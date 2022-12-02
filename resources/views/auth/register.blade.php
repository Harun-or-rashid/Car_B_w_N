@extends('layouts.userlogin')
@section('title', "Sign Up")
@push('css')
    <!-- input partial css here -->
    <style>
        .login-box {
            width: 450px !important
        }

        input,
        button,
        .input-group,
        .input-group-text {
            border-radius: 0px !important;
        }

        .card {
            border-radius: 0
        }
    </style>
@endpush
@section('content')
    <div class="card">
        <div class="card-body login-card-body">
            <p class="login-box-msg">Sign up to start your session</p>

            <form method="post" action="{{ route('register') }}">
                @csrf
                <div class="input-group mb-3">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                           value="{{ old('name') }}" autocomplete="name" autofocus placeholder="Full Name">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-user"></span>
                        </div>
                    </div>
                    @error('name')
                    <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                    @enderror
                </div>

                <div class="input-group mb-3">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                           name="email"
                           value="{{ old('email') }}" autocomplete="email" autofocus placeholder="Email Address">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                    @enderror
                </div>

                <div class="input-group mb-3">
                    <input id="phone" type="text" class="form-control @error('phone') is-invalid @enderror" name="phone"
                           value="{{ old('phone') }}" autocomplete="phone" autofocus placeholder="Phone Number">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-mobile-alt"></span>
                        </div>
                    </div>
                    @error('phone')
                    <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                    @enderror
                </div>

                {{-- <div class="input-group mb-3">
                    <input id="location" type="text" class="form-control @error('location') is-invalid @enderror"
                           name="location" value="{{ old('location') }}" autocomplete="location" autofocus
                           placeholder="Address">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-map-marker-alt"></span>
                        </div>
                    </div>
                    @error('location')
                    <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                    @enderror
                </div> --}}

                <div class="input-group mb-3">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                           name="password" autocomplete="current-password" placeholder="Password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                    @enderror
                </div>

                <div class="input-group mb-3">
                    <input id="password-confirm" type="password" class="form-control"
                           name="password_confirmation" autocomplete="new-password" placeholder="Confirm Password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    @error('password_confirmation')
                    <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                    @enderror
                </div>
                <div class="row">
                    <div class="col-8">
                    </div>
                    <!-- /.col -->
                    <div class="col-4">
                        <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>
        </div>
        <!-- /.login-card-body -->
        <div class="card-footer">
            <a href="{{ route('login') }}" class="text-bold">Have an account ? Sign in</a>
        </div>
    </div>
@endsection
