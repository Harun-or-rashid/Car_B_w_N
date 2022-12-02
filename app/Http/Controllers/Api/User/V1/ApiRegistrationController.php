<?php

namespace App\Http\Controllers\Api\User\V1;

use App\Address;
use App\Helpers\Helper;
use App\Http\Controllers\Api\Controller;
use App\Otp;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ApiRegistrationController extends Controller {
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:otp-api', ['only' => ['verifyOtp']]);
    }

    //Login
    public function login(Request $request) {
        $messages = [
            'mobile.required' => 'The Mobile number field is required.',
            'mobile.bd_mobile' => 'Invalid Mobile number format.',
        ];

        $validator = Validator::make($request->all(), [
            'mobile' => [
                'required',
                'bd_mobile',
                // 'regex:/^(01)[1-9]{1}[0-9]{8}$/',
            ],
        ], $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();

            return response()->json([
                'error' => 1,
                'message' => implode(', ', $errors),
                'data' => null,
            ]);
        }

        $user = User::where('mobile', $request->mobile)->first();
        if ($user && $user->status == 0) {
            // If success return response
            return response()->json(
                [
                    'error' => 0,
                    'message' => 'This account is blocked.',
                    'data' => null,
                ]
            );
        }

        $otp = Helper::otp($request->mobile, 1);
        $ttl = Config::get('constants.OTP_TTL');
        $token = auth('otp-api')->setTTL($ttl)->fromUser($otp['user']);

        // $token = Auth::guard('otp-api')->setTTL($ttl)->fromUser($otp['user']);
        // If success return response
        return response()->json(
            [
                'error' => 0,
                'message' => '',
                'data' => null,
                'token' => $token,
                // 'otp' => $otp['otp'],
            ]
        );

    }

    //verify Otp
    public function verifyOtp(Request $request) {
        if (!auth('otp-api')->check()) {
            return response()->json([
                'error' => 900,
                'message' => 'Token has expired.',
                'data' => null,
            ]);
        }

        $otpUser = auth('otp-api')->user();
        $messages = [
            'otp.required' => 'The OTP field is required.',
            'otp.verify_otp' => 'The OTP is invalid.',
        ];

        $validator = Validator::make($request->all(), [
            'otp' => 'required|verify_otp:' . $otpUser->otp,
        ], $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();

            return response()->json([
                'error' => 1,
                'message' => implode(', ', $errors),
                'data' => null,
            ]);
        }

        $userCheck = User::where('mobile', $otpUser->mobile)->first();

        //If user is old
        if ($userCheck && $userCheck->status == 1 && $userCheck->name != null) {
            $token = auth('api')->fromUser($userCheck);

            //Delete Data from Otp Model
            $otp = Otp::where('mobile', $otpUser->mobile)->where('type', 1)->first();
            if ($otp) {
                $otp->delete();
            }
            $address = Address::where('user_id', $userCheck->id);
            // If success return response
            return response()->json(
                [
                    'error' => 0,
                    'message' => 'OTP verified successfully.',
                    'data' => [
                        'users' => $userCheck->toArray(),
                        'addresses' => $address->get()->toArray(),
                    ],
                    'token' => $token,
                ]
            );
        }

        //If user is new
        if (is_null($userCheck) || ($userCheck && $userCheck->status == 1 && $userCheck->name == null)) {
            // dd($userCheck);
            DB::beginTransaction();
            try {
                $userCreate = User::updateOrCreate(
                    [
                        'mobile' => $otpUser->mobile,
                    ],
                    [
                        'mobile' => $otpUser->mobile,
                        'password' => bcrypt(Helper::generateRandomString(32)),
                        'status' => 1,
                        'account_verified_at' => Carbon::now(),
                    ]);

                //Delete Data from Otp Model
                $otp = Otp::where('mobile', $otpUser->mobile)->where('type', 1)->first();
                if ($otp) {
                    $otp->delete();
                }
                DB::commit();

            } catch (\Exception $e) {
                DB::rollback();
                // dd($e);

                return response()->json(
                    [
                        'error' => 1,
                        'message' => 'Sorry! Something went wrong, please try again.',
                        'data' => null,
                    ]
                );
            }

            $ttl = Config::get('constants.REGISTRATION_TTL');
            $token = auth('api')->setTTL($ttl)->fromUser($userCreate);

            // If success return response
            return response()->json(
                [
                    'error' => 0,
                    'message' => 'OTP verified successfully.',
                    'data' => null,
                    'token' => $token,
                ]
            );
        }

        // If success return response
        return response()->json(
            [
                'error' => 1,
                'message' => 'Something went wrong, please try again.',
                'data' => null,
            ]
        );

    }

}
