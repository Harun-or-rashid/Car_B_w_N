<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- CSRF Token -->
{{--    <script>--}}
{{--        window.Laravel = <?php echo json_encode([--}}
{{--            'csrfToken' => csrf_token(),--}}
{{--        ]); ?>--}}
{{--    </script>--}}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> @yield('title','Admin Panel') | {{ config('app.name', 'Laravel') }}</title>
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
    <link rel="stylesheet" href="{{ asset('backend/css/plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
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
                    {{-- <a href="#" class="nav-link">Home</a>--}}
                </li>
            </ul>
            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown user-menu">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="{{ asset('backend/image/User-Avatar.png') }}"
                            class="user-image img-circle elevation-2" alt="User Image">
                        <span class="d-none d-md-inline">{{ Auth::guard('admin')->user()->name ?? '' }}</span>
                    </a>
                    <ul class="user-layout dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <!-- User image -->
                        <li class="user-header bg-dark">
                            <img src="{{ asset('backend/image/User-Avatar.png') }}" class="img-circle elevation-2"
                                alt="User Image">
                            <p>{{ Auth::guard('admin')->user()->name ?? '' }}</p>
                            <p class="mt-0"><small>{{ Auth::guard('admin')->user()->email ?? '' }}</small></p>
                        </li>
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <a href="{{ route('admin.changePassword') }}" class="btn btn-default btn-flat">Change
                                Password</a>
                            <a href="{{ route('admin.logout') }}" class="btn btn-default btn-flat float-right">Sign
                                out</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-info elevation-4">
            <!-- Brand Logo -->
            <a href="{{ url('/') }}" class="brand-link">
                <img src="{{asset('backend/image/Admin-Logo.png')}}" alt="Admin Logo"
                    class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-bold">Admin Panel</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column nav-legacy nav-child-indent" data-widget="treeview"
                        role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
                         with font-awesome or any other icon font library -->
                        <li class="nav-item has-treeview {{ Helper::menuIsOpen(['admin.dashboard']) }}">
                            <a href="{{ url('/') }}" class="nav-link {{ Helper::menuIsActive([ 'admin.dashboard']) }}">
                                <i class="nav-icon fas fa-home"></i>
                                <p>
                                    Dashboard
                                </p>
                            </a>
                        </li>

                        @if(Auth::guard('admin')->user()->hasRole('admin') ||
                        Auth::guard('admin')->user()->hasPermission(['user-permission-groups-read']))
                        <li class="nav-item">
                            <a href="{{ route('admin.permissionList') }}"
                        class="nav-link {{ Helper::menuIsActive(['admin.permissionList']) }}">
                        <i class="fas fa-user-shield"></i>
                        <p>Permission List</p>
                        </a>
                        </li>
                        @endif

                        {{-- @if(Auth::guard('admin')->user()->hasRole('admin') ||
                        Auth::guard('admin')->user()->hasPermission(['admin-permission-groups-read',
                        'admin-permission-groups-create',
                        'admin-permission-groups-update', 'admin-permission-groups-delete']))
                        <li
                            class="nav-item has-treeview {{ Helper::menuIsOpen(['admin.admin-permission-groups.index', 'admin.admin-permission-groups.create', 'admin.admin-permission-groups.edit']) }}">
                            <a href="#"
                                class="nav-link {{ Helper::menuIsActive(['admin.admin-permission-groups.index', 'admin.admin-permission-groups.create', 'admin.admin-permission-groups.edit']) }}">
                                <i class="nav-icon fas fa-user-shield"></i>
                                <p>
                                    Permission Groups
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                Auth::guard('admin')->user()->hasPermission(['admin-permission-groups-create']))
                                <li class="nav-item">
                                    <a href="{{ route('admin.admin-permission-groups.create') }}"
                                        class="nav-link {{ Helper::menuIsActive([ 'admin.admin-permission-groups.create']) }}">
                                        <i class="fas fa-plus nav-icon"></i>
                                        <p>Permission Group Create</p>
                                    </a>
                                </li>
                                @endif

                                @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                Auth::guard('admin')->user()->hasPermission(['admin-permission-groups-read']))
                                <li class="nav-item">
                                    <a href="{{ route('admin.admin-permission-groups.index') }}"
                                        class="nav-link {{ Helper::menuIsActive(['admin.admin-permission-groups.index']) }}">
                                        <i class="fas fa-list nav-icon"></i>
                                        <p>Permission Group List</p>
                                    </a>
                                </li>
                                @endif
                            </ul>
                        </li>
                        @endif --}}

                        @if(Auth::guard('admin')->user()->hasRole('admin') ||
                        Auth::guard('admin')->user()->hasPermission(['admin-admins-create',
                        'admin-admins-read',
                        'admin-admins-update', 'admin-admins-delete']))
                        <li
                            class="nav-item has-treeview {{ Helper::menuIsOpen(['admin.admins.index', 'admin.admins.create', 'admin.admins.edit', 'admin.admins.show', 'admin.admins.resetPassword']) }}">
                            <a href="#"
                                class="nav-link {{ Helper::menuIsActive(['admin.admins.index', 'admin.admins.create', 'admin.admins.edit', 'admin.admins.show', 'admin.admins.resetPassword']) }}">
                                <i class="nav-icon fas fa-users"></i>
                                <p>
                                    Admins
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                Auth::guard('admin')->user()->hasPermission(['admin-admins-create']))
                                <li class="nav-item">
                                    <a href="{{ route('admin.admins.create') }}"
                                        class="nav-link {{ Helper::menuIsActive(['admin.admins.create']) }}">
                                        <i class="fas fa-plus nav-icon"></i>
                                        <p>Admin Create</p>
                                    </a>
                                </li>
                                @endif

                                @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                Auth::guard('admin')->user()->hasPermission(['admin-admins-read']))
                                <li class="nav-item">
                                    <a href="{{ route('admin.admins.index') }}"
                                        class="nav-link {{ Helper::menuIsActive(['admin.admins.index']) }}">
                                        <i class="fas fa-list nav-icon"></i>
                                        <p>Admin List</p>
                                    </a>
                                </li>
                                @endif
                            </ul>
                        </li>
                        @endif

                        @if(Auth::guard('admin')->user()->hasRole('admin') ||
                        Auth::guard('admin')->user()->hasPermission(['admin-users-create',
                        'admin-users-read',
                        'admin-users-update', 'admin-users-delete']))
                        <li
                            class="nav-item has-treeview {{ Helper::menuIsOpen(['admin.users.index', 'admin.users.create', 'admin.users.edit', 'admin.users.show']) }}">
                            <a href="#"
                                class="nav-link {{ Helper::menuIsActive(['admin.users.index', 'admin.users.create', 'admin.users.edit', 'admin.users.show']) }}">
                                <i class="nav-icon fas fa-user-friends"></i>
                                <p>
                                    Users
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                Auth::guard('admin')->user()->hasPermission(['admin-users-create']))
                                <li class="nav-item">
                                    <a href="{{ route('admin.users.create') }}"
                                        class="nav-link {{ Helper::menuIsActive(['admin.users.create']) }}">
                                        <i class="fas fa-plus nav-icon"></i>
                                        <p>User Create</p>
                                    </a>
                                </li>
                                @endif

                                @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                Auth::guard('admin')->user()->hasPermission(['admin-users-read']))
                                <li class="nav-item">
                                    <a href="{{ route('admin.users.index') }}"
                                        class="nav-link {{ Helper::menuIsActive(['users.index']) }}">
                                        <i class="fas fa-list nav-icon"></i>
                                        <p>User List</p>
                                    </a>
                                </li>
                                @endif
                            </ul>
                        </li>
                        @endif

                        @if(Auth::guard('admin')->user()->hasRole('admin') ||
                               Auth::guard('admin')->user()->hasPermission(['admin-users-create',
                               'admin-users-read',
                               'admin-users-update', 'admin-users-delete']))
                            <li
                                class="nav-item has-treeview {{ Helper::menuIsOpen(['admin.users.index', 'admin.users.create', 'admin.users.edit', 'admin.users.show']) }}">
                                <a href="#"
                                   class="nav-link {{ Helper::menuIsActive(['admin.users.index', 'admin.users.create', 'admin.users.edit', 'admin.users.show']) }}">
                                    <i class="nav-icon fa-brand fa-product-hunt"></i>
                                    <p>
                                        Manage Product
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                    Auth::guard('admin')->user()->hasPermission(['admin-users-create']))
                                        <li class="nav-item">
                                            <a href="{{ route('product.product.create') }}"
                                               class="nav-link {{ Helper::menuIsActive(['product.product.create']) }}">
                                                <i class="fas fa-plus nav-icon"></i>
                                                <p>Product Create</p>
                                            </a>
                                        </li>
                                    @endif

                                    @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                    Auth::guard('admin')->user()->hasPermission(['admin-users-read']))
                                        <li class="nav-item">
                                            <a href="{{ route('product.product.index') }}"
                                               class="nav-link {{ Helper::menuIsActive(['product.product.index']) }}">
                                                <i class="fas fa-list nav-icon"></i>
                                                <p>Product List</p>
                                            </a>
                                        </li>
                                    @endif
                                </ul>
                            </li>
                        @endif
                        @if(Auth::guard('admin')->user()->hasRole('admin') ||
                       Auth::guard('admin')->user()->hasPermission(['admin-users-create',
                       'admin-users-read',
                       'admin-users-update', 'admin-users-delete']))
                            <li
                                class="nav-item has-treeview {{ Helper::menuIsOpen(['admin.users.index', 'admin.users.create', 'admin.users.edit', 'admin.users.show']) }}">
                                <a href="{{ route('category.category-item.index') }}"
                                   class="nav-link {{ Helper::menuIsActive(['admin.users.index', 'admin.users.create', 'admin.users.edit', 'admin.users.show']) }}">
                                    <i class="nav-icon fas fa-list-alt"></i>
                                    <p>
                                        Category
                                    </p>
                                </a>


                            </li>
                        @endif


                        @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                  Auth::guard('admin')->user()->hasPermission(['admin-users-create',
                                  'admin-users-read',
                                  'admin-users-update', 'admin-users-delete']))
                            <li
                                class="nav-item has-treeview {{ Helper::menuIsOpen(['admin.users.index', 'admin.users.create', 'admin.users.edit', 'admin.users.show']) }}">
                                <a href="{{ route('category.option.index') }}"
                                   class="nav-link {{ Helper::menuIsActive(['category.option.index']) }}">
                                    <i class="fas fa-list nav-icon"></i>
                                    <p> Options</p>
                                </a>

                            </li>
                        @endif

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
    <script src="{{ asset('backend/js/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}">
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.0/sweetalert.min.js"></script>
    <script src="https://cdn.ckeditor.com/4.16.2/standard/ckeditor.js"></script>


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
    <script type="text/javascript">

        $('.show_confirm').click(function(event) {
            var form =  $(this).closest("form");
            var name = $(this).data("name");
            event.preventDefault();
            swal({
                title: `Are you sure you want to delete this record?`,
                text: "If you delete this, it will be gone forever.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        form.submit();
                    }
                });
        });
        $('.warning').click(function(event) {
            var form =  $(this).closest("form");
            var name = $(this).data("name");
            event.preventDefault();
            swal({
                title: `Are you sure you want to Change this price Controller?`,
                text: "If you Change this, it will be remove previous data.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        form.submit();
                    }
                });
        });

    </script>
    <!-- partial Scripts specific page-->
    @stack('js')
</body>

</html>
