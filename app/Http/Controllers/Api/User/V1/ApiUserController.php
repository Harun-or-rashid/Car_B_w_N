<?php

namespace App\Http\Controllers\Api\User\V1;

use App\Address;
use App\DeviceToken;
use App\Helpers\Helper;
use App\Http\Controllers\Api\Controller;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ApiUserController extends Controller {
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['deRegisterToken']]);
    }

    //Completed User registration
    public function registration(Request $request) {
        $user = auth('api')->user();
        $messages = [
            'name.required' => 'The Name field is required.',
            'name.min' => 'The Name field must be minimum 4 characters.',
            'email.required' => 'The Email field is required.',
            // 'email.unique' => 'The Email already exists.',
            'referral.alpha_num' => 'The Referral Code must be alpha numeric characters.',
            'referral.size' => 'The Referral Code must be 6 characters.',
            'referral.exists' => 'The Referral Code does not exists.',
        ];

        $validator = Validator::make($request->all(), [
            'name' => 'required|min:4|max:191',
            'email' => [
                'sometimes',
                'nullable',
                // Rule::unique('users'),
                'email',
            ],
            'referral' => [
                'sometimes',
                'nullable',
                'alpha_num',
                'size:6',
                Rule::exists('users', 'referral_code')->whereNull('deleted_at'),
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

        $input = $request->except('mobile');
        unset($input['authentication']);
        $referral = User::where('referral_code', $request->referral)->whereNotNull('referral_code')->first();
        $input['referral_id'] = is_null($referral) ? 0 : $referral->id;
        $user->update($input);

        //generate Referral Code and Update
        $referral_code = Helper::generateCode($user);
        $user->update([
            'referral_code' => $referral_code,
        ]);

        //Send Sms to referral owner and user
        if ($user->referral_id != 0) {
            Helper::sendReferralSms($user);
        }

        auth('api')->fromUser($user);
        $token = auth('api')->refresh();

        return response()->json(
            [
                'error' => 0,
                'message' => '',
                'data' => [
                    'users' => auth('api')->user(),
                    'addresses' => Address::where('user_id', auth('api')->user()->id)->get()->toArray(),
                ],
                'token' => $token,
            ]
        );

    }

    /**
     * User Profile Detail
     *
     */
    public function profileDetail(Request $request) {
        return response()->json(
            [
                'error' => 0,
                'message' => '',
                'data' => [
                    'users' => auth('api')->user(),
                ],
            ]
        );
    }

    /**
     * Update User Profile.
     *
     */
    public function updateProfile(Request $request) {
        $user = auth('api')->user();
        $messages = [
            'name.required' => 'The Name field is required.',
            'name.min' => 'The Name field must be minimum 4 characters.',
            'email.required' => 'The Email field is required.',
            // 'email.unique' => 'The Email already exists.',
            'gender.required' => 'The Gender field is required.',
        ];

        $validator = Validator::make($request->all(), [
            'name' => 'required|min:4|max:191',
            'email' => [
                'sometimes',
                'nullable',
                // Rule::unique('users')->ignore($user->id),
                'email',
            ],
            'gender' => 'required|in:1,2',
        ], $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();

            $data = [
                'error' => 1,
                'message' => implode(', ', $errors),
                'data' => null,
            ];
            return response()->json($data);
        }

        $input = $request->except('mobile');
        unset($input['authentication']);

        if ($request->file('photo')) {
            $imagePath = Helper::uploadFile($request->file('photo'), null, Config::get('constants.USER_IMAGES'));
            $input['photo'] = $imagePath;
        } elseif ($request->has('photo')) {
            $imageNameWithSegmentedFolder = Carbon::now()->format('Y') . '/' . Carbon::now()->format('m') . '/' . uniqid() . '_' . time() . '.jpg';
            $image = Helper::uploadFile(null, base64_decode($request->get('photo')), Config::get('constants.USER_IMAGES') . '/', $imageNameWithSegmentedFolder);
            $input['photo'] = Config::get('constants.USER_IMAGES') . '/' . $image;
        }
        // dd($input);
        $user->update($input);
        return response()->json(
            [
                'error' => 0,
                'message' => '',
                'data' => [
                    'users' => auth('api')->user(),
                ],
            ]
        );
    }

    //Logout
    public function logout(Request $request) {
        auth()->logout();
        // Pass true to force the token to be blacklisted "forever"
        // auth()->logout(true);

        return response()->json(
            [
                'error' => 0,
                'message' => 'Successfully logged out.',
                'data' => null,
            ]
        );
    }

    //Register Device Token
    public function registerToken(Request $request) {
        $user = auth('api')->user();

        $messages = [
            'device_token.required' => 'The device token field is required.',
            'device_type.required' => 'The device type field is required.',
            'device_type.in' => 'The device type field must be 1 or 2.',
            'version.required' => 'The version field is required.',
        ];

        $validator = Validator::make($request->all(), [
            'device_token' => 'required',
            'device_type' => 'required|in:1,2',
            'version' => 'required|numeric',
        ], $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();

            $data = [
                'error' => 1,
                'message' => implode(', ', $errors),
                'data' => null,
            ];
            return response()->json($data);
        }
        // dd($request->all());
        $deviceToken = DeviceToken::updateOrCreate([
            'device_token' => $request->device_token,
        ], [
            'device_token' => $request->device_token,
            'device_type' => $request->device_type,
            'version' => $request->version,
            'tokenable_id' => $user->id,
            'tokenable_type' => 'App\User',
        ]);

        return response()->json(
            [
                'error' => 0,
                'message' => 'Token has been stored',
                'data' => null,
            ]
        );
    }

    //Deregister Device Token
    public function deRegisterToken(Request $request) {
        $messages = [
            'device_token.required' => 'The device token field is required.',
        ];

        $validator = Validator::make($request->all(), [
            'device_token' => 'required',
        ], $messages);

        if ($validator->fails()) {
            $errors = $validator->errors()->all();

            $data = [
                'error' => 1,
                'message' => implode(', ', $errors),
                'data' => null,
            ];
            return response()->json($data);
        }

        $deviceToken = DeviceToken::where('device_token', $request->device_token)->first();

        if (!is_null($deviceToken)) {
            $deviceToken->delete();
        }

        return response()->json(
            [
                'error' => 0,
                'message' => 'Token has been removed.',
                'data' => null,
            ]
        );

    }
}
