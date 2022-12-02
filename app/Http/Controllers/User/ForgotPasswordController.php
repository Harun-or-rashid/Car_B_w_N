<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller {
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
     */

    use SendsPasswordResetEmails;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('guest');
    }

    protected function broker() {
        return Password::broker();
    }

    public function showLinkRequestForm() {
        return view('user.passwords.forgot');
    }

    protected function validateEmail(Request $request) {
        $messages = [
            'email.required' => 'The Email field is required.',
        ];
        $request->validate([
            'email' => 'required|email',
        ], $messages);
    }
}
