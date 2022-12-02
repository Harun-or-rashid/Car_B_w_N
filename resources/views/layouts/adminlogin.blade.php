<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{config('app.name', "Laravel")}} | Log in</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Favicon -->
    <link href="{{ asset('backend/image/favicon.png') }}" type="image/x-icon" rel="icon" />
    <link href="{{ asset('backend/image/favicon.png') }}" type="image/x-icon" rel="shortcut icon" />
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/fontawesome-free/css/all.min.css') }}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('backend/css/adminlte.min.css') }}">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    <!-- custom css -->
    <link rel="stylesheet" href="{{ asset('backend/css/custom.css') }}">
    @stack('css')
</head>
<body class="hold-transition login-page">
<div class="login-box">
    <div class="login-logo">
        <a href="#"><b>Admin</b>Login</a>
    </div>
    <!-- /.login-logo -->
    @yield('content')
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="{{ asset('backend/js/plugins/jquery/jquery.min.js') }}"></script>
<!-- Bootstrap 4 -->
<script src="{{ asset('backend/js/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('backend/js/adminlte.js') }}"></script>
@stack('js')
</body>
</html>
