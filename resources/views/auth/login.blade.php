@extends('layouts.userlogin')
@section('title', "Sign In")
@push('css')
<!-- input partial css here -->
<style>
    .login-box {
        width: 425px !important;
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
        <p class="login-box-msg">Sign in to start your session</p>

        <form method="post" action="{{ route('login') }}">
            @csrf
            <div class="input-group mb-3">
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email"
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
            <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember"
                            {{ old('remember') ? 'checked' : '' }}>
                        <label for="remember">
                            Remember Me
                        </label>
                    </div>
                </div>
                <!-- /.col -->
                <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                </div>
                <!-- /.col -->
            </div>
        </form>
    </div>
    <!-- /.login-card-body -->
    <div class="card-footer">
        <a href="{{ route('register') }}" class="text-bold">Don't have account ? Sign up</a>
        <a href="#" class="float-right">I forgot my password</a>
        {{-- @if (Route::has('admin.password.forgot'))
        <a href="{{ route('admin.password.forgot') }}">
        {{ __('I forgot my password') }}
        </a>
        @endif --}}
    </div>
</div>
@push('js')
<!-- input partial scripts here -->
<script>
    $(document).ready(function () {

//end document ready
            });
</script>
@endpush
@endsection
