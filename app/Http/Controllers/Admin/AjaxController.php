<?php

namespace App\Http\Controllers\Admin;

use App\Models\Branch;
use App\Http\Controllers\Controller;
use App\Models\Thana;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AjaxController extends Controller {
    public function __construct() {
        $this->middleware('auth:admin');
    }

    // Get Thana for ajax request
    public function getThana() {
        $thanas = Thana::where('district_id', $_POST['district_id'])->pluck('name', 'id')->all();
        $data = '<option value=""></option>';
        foreach ($thanas as $key => $value) {
            $data .= '<option value="' . $key . '">' . $value . '</option>';
        }
        return $data;
    }

    //Search Users/Tax Payer Info
    public function searchTinNumber(Request $request) {
        $admin = Auth::guard('admin')->user();
        if ($admin->role_id == 1) {
            $users = User::where('tin_number', 'like', $request->get('search') . '%')->get()
                ->pluck('tin_with_name', 'id')->all();
        } else {
            $circles = DB::table('admin_circle')->where('admin_id', $admin->id)->pluck('circle_id')->all();
            $users = User::where('tin_number', 'like', $request->get('search') . '%')->whereIn('circle_id', $circles)->get()
                ->pluck('tin_with_name', 'id')->all();
        }

        $final = [];

        foreach ($users as $key => $user) {
            $final[] = ['id' => $key, 'text' => $user];
        }

        $data = [
            'results' => $final,
        ];

        return response()->json($data);
    }

    // Get Thana for ajax request
    public function getBranches() {
        $branches = Branch::where('bank_id', $_POST['bank_id'])->pluck('name', 'id')->all();
        $data = '<option value=""></option>';
        foreach ($branches as $key => $value) {
            $data .= '<option value="' . $key . '">' . $value . '</option>';
        }
        return $data;
    }
}
