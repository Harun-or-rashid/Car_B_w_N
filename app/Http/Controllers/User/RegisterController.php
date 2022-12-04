<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('guest');
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data) {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            // 'phone' => $data['phone'],
            // 'location' => $data['location'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function showRegistrationForm() {
        // return view('auth.login');
        return view('auth.register');
    }

    public function register(Request $request) {
        // Validate the form data
//        dd($request);
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            // 'phone' => ['required', 'unique:users'],
            // 'location' => ['required'],
//            'term_condition' => ['required'],
        ]);

        $input = $request->all();
        $input['password'] = Hash::make($request->password);
        $input['status'] = 1;
//        dd($input);
        $user = User::create($input);
        Auth::login($user);
        return redirect()->route('applyNow');
    }

}
