<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;

class UserController extends Controller {
    public function __construct() {
        $this->middleware('auth:web');
    }

    public function dashboard() {
        return view('user.dashboard');
    }

    public function changePassword() {
        return view('user.changePassword');
    }

    public function changePasswordStore(Request $request) {
        $messages = [
            'old_password.required' => 'Current password is required',
            'old_password.old_password' => 'Current password is wrong',
            'password.required' => 'New Password is required',
            'password.confirmed' => 'New Passwords does not match',
            'password.min' => 'New Password must be at least 6 char long',
            'password.max' => 'New Password can be maximum 200 char long',
        ];

        $this->validate($request, [
            'old_password' => 'required|old_password:' . Auth::user()->password,
            'password' => 'required|confirmed|min:6|max:255',
        ], $messages);

        $user = Auth::user();

        $user['password'] = bcrypt($request->get('password'));

        $user->save();

        Session::flash('success', 'Your password has been changed');

        return redirect()->route('changePassword');
    }

    //
    public function profile() {
        $user = Auth::user();
        return view('user.profile', compact('user'));
    }

    public function editProfile() {
        $user = Auth::user();
        // dd($user);
        return view('user.editProfile', compact('user'));
    }

    public function editProfileStore(Request $request, $id) {
        $user = Auth::user();
        // Validate the form data
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($user->id),
            ],
            'phone' => [
                'required',
                'max:255',
                Rule::unique('users', 'phone')->ignore($user->id),
            ],
            'location' => ['required'],
        ]);

        $input = $request->except('password');

        $user->update($input);

        Session::flash('success', 'The User Profile has been updated');

        return redirect()->route('profile');
    }

    public function create(Request $request) {
dd('f');
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $display = 'none';
            if (old('role_id') && old('role_id') > 1) {
                $display = 'block';
            }

            return view('options.create');
        } else {
            return view('error.admin-unauthorized');
        }
    }


}
