<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> @yield('title','User Panel') | {{ config('app.name', 'Laravel') }}</title>
    <!-- Favicon -->
    <link href="{{ asset('backend/image/favicon.png') }}" type="image/x-icon" rel="icon" />
    <link href="{{ asset('backend/image/favicon.png') }}" type="image/x-icon" rel="shortcut icon" />
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/fontawesome-free/css/all.min.css') }}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Bootstrap 4 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <!-- JQVMap -->
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/jqvmap/jqvmap.min.css') }}">
    <!-- overlayScrollbars -->
    <link rel="stylesheet"
        href="{{ asset('backend/css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/daterangepicker/daterangepicker.css') }}">
    <!-- tempusdominus -->
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
    <!-- Date picker -->
    <link rel="stylesheet" type="text/css" href="{{ asset('backend/css/plugins/datepicker/datepicker3.css') }}" />
    <!-- summernote -->
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/summernote/summernote-bs4.css') }}">
    <!-- select 2 -->
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/select2/css/select2.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('backend/css/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('backend/css/adminlte.min.css') }}">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=swap" rel="stylesheet">

    <!-- custom css -->
    <link rel="stylesheet" href="{{ asset('backend/css/custom.css') }}">
    <style>
        .sidebar-dark-info .nav-sidebar.nav-legacy>.nav-item>.nav-link.active,
        .sidebar-light-info .nav-sidebar.nav-legacy>.nav-item>.nav-link.active {
            border-color: #28a745;
        }

        [class*=sidebar-dark] .nav-legacy .nav-treeview>.nav-item>.nav-link.active,
        [class*=sidebar-dark] .nav-legacy.nav-sidebar>.nav-item>.nav-link.active {
            color: #28a745;
        }
    </style>
    <!-- add specific page css -->
    @stack('css')
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">

        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="{{ url('/') }}" class="nav-link">Home</a>
                </li>
            </ul>
            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown user-menu">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="{{ asset('backend/image/User-Avatar.png') }}"
                            class="user-image img-circle elevation-2" alt="User Image">
                        <span class="d-none d-md-inline">{{ Auth::guard('web')->user()->name ?? '' }}</span>
                    </a>
                    <ul class="user-layout dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <!-- User image -->
                        <li class="user-header bg-dark">
                            <img src="{{ asset('backend/image/User-Avatar.png') }}" class="img-circle elevation-2"
                                alt="User Image">
                            <p>{{ Auth::guard('web')->user()->name ?? '' }}</p>
                            <p class="mt-0"><small>{{ Auth::guard('web')->user()->email ?? '' }}</small></p>
                        </li>
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <a href="{{ route('changePassword') }}" class="btn btn-default btn-flat">Change
                                Password</a>
                            {{-- <a href="#" class="btn btn-default btn-flat float-right">Sign
                                out</a> --}}
                            <a class="btn btn-default btn-flat float-right" href="{{ route('logout') }}"
                                onclick="event.preventDefault(); document.getElementById('logout-form').submit();"> Sign
                                out</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-info elevation-4">
            <!-- Brand Logo -->
            <a href="{{ url('/dashboard') }}" class="brand-link">
                <img src="{{asset('backend/image/Admin-Logo.png')}}" alt="Admin Logo"
                    class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-bold">User Panel</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column nav-legacy nav-child-indent" data-widget="treeview"
                        role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
                         with font-awesome or any other icon font library -->
                        <li class="nav-item has-treeview {{ Helper::menuIsOpen(['dashboard']) }}">
                            <a href="{{ url('/dashboard') }}"
                                class="nav-link {{ Helper::menuIsActive([ 'dashboard']) }}">
                                <i class="nav-icon fas fa-home"></i>
                                <p>
                                    Dashboard
                                </p>
                            </a>
                        </li>

                        <li class="nav-item has-treeview {{ Helper::menuIsOpen(['profile','editProfile']) }}">
                            <a href="{{ url('/profile') }}"
                                class="nav-link {{ Helper::menuIsActive([ 'profile','editProfile']) }}">
                                <i class="nav-icon far fa-user"></i>
                                <p>
                                    Profile
                                </p>
                            </a>
                        </li>

                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        @yield('content')
        <!-- /.content-wrapper -->
        <footer class="main-footer">
            <strong>Developed by <a href="http://annanovas.com/">Annanovas IT LTD</a>.</strong>
            All rights reserved.
        </footer>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->

    <!-- jQuery -->
    <script src="{{ asset('backend/js/plugins/jquery/jquery.min.js') }}"></script>
    <!-- jQuery UI 1.11.4 -->
    <script src="{{ asset('backend/js/plugins/jquery-ui/jquery-ui.min.js') }}"></script>
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
        $.widget.bridge('uibutton', $.ui.button)
    </script>
    <!-- Bootstrap 4 -->
    <script src="{{ asset('backend/js/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <!-- ChartJS -->
    <script src="{{ asset('backend/js/plugins/chart.js/Chart.min.js') }}"></script>
    <!-- Sparkline -->
    <script src="{{ asset('backend/js/plugins/sparklines/sparkline.js') }}"></script>
    <!-- JQVMap -->
    <script src="{{ asset('backend/js/plugins/jqvmap/jquery.vmap.min.js') }}"></script>
    <script src="{{ asset('backend/js/plugins/jqvmap/maps/jquery.vmap.usa.js') }}"></script>
    <!-- jQuery Knob Chart -->
    <script src="{{ asset('backend/js/plugins/jquery-knob/jquery.knob.min.js') }}"></script>
    <!-- daterangepicker -->
    <script src="{{ asset('backend/js/plugins/moment/moment.min.js') }}"></script>
    <script src="{{ asset('backend/js/plugins/daterangepicker/daterangepicker.js') }}"></script>
    <!-- date picker -->
    <script type="text/javascript" src="{{ asset('backend/js/plugins/datepicker/bootstrap-datepicker.js') }}"></script>
    <!-- Tempusdominus Bootstrap 4 -->
    <script
        src="{{ asset('backend/js/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}">
    </script>
    <!-- Summernote -->
    <script src="{{ asset('backend/js/plugins/summernote/summernote-bs4.min.js') }}"></script>
    <!-- select 2 -->
    <script src="{{ asset('backend/js/plugins/select2/js/select2.full.min.js') }}"></script>
    <!-- overlayScrollbars -->
    <script src="{{ asset('backend/js/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}">
    </script>
    <!-- Custom File Input -->
    <script src="{{ asset('backend/js/plugins/bs-custom-file-input/bs-custom-file-input.min.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('backend/js/adminlte.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('ul.user-layout').on('click', function(event) {
                event.stopPropagation();
            })
            $('[data-toggle="tooltip"]').tooltip()

            let activeItem = $('.nav-item .nav-link.active').offset().top;
            let windowHeight = $(window).height();
            let scrollPosition = activeItem - (windowHeight/2);
            let instances = $(".sidebar").overlayScrollbars({ }).overlayScrollbars();
            instances.scroll({ x : "0", y : scrollPosition }, 300);
        });
    </script>
    <!-- partial Scripts specific page-->
    @stack('js')
</body>

</html>
