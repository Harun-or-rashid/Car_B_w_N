@extends('layouts.admin')
@section('title', "User Registrations")
@push('css')
    <!-- input partial css here -->
    <style>

    </style>
@endpush
@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-md-6">
                        <h1 class="m-0 text-dark">Membership Control</h1>
                    </div><!-- /.col -->
                    <div class="col-md-6">

                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Main row -->
                <div class="row">
                    <div class="col-lg-12">
                        @include('include.flashMessage')
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title">Member List</h3>
                            </div>
                            {{--                        {!! Form::open(['method'=>'GET', 'action'=>['Admin\UserController@index']]) !!}--}}

                            {{--                        <div class="card-body">--}}
                            {{--                            <div class="row">--}}

                            {{--                                <div class="col-md-3">--}}
                            {{--                                    <div class="form-group">--}}
                            {{--                                        {!! Form::label('name', 'Name') !!}--}}
                            {{--                                        {!! Form::text('name', request()->name, ['class'=>'form-control']) !!}--}}
                            {{--                                    </div>--}}
                            {{--                                </div>--}}
                            {{--                                 <!-- /.col -->--}}
                            {{--                                <div class="col-md-3">--}}
                            {{--                                    <div class="form-group">--}}
                            {{--                                        {!! Form::label('email', 'Email') !!}--}}
                            {{--                                        {!! Form::text('email', request()->email, ['class'=>'form-control']) !!}--}}
                            {{--                                    </div>--}}
                            {{--                                </div>--}}
                            {{--                                <!-- /.col -->--}}
                            {{--                                <div class="col-md-3">--}}
                            {{--                                    <div class="form-group">--}}
                            {{--                                        {!! Form::label('phone', 'Phone Number') !!}--}}
                            {{--                                        {!! Form::text('phone', request()->phone, ['class'=>'form-control']) !!}--}}
                            {{--                                    </div>--}}
                            {{--                                </div>--}}
                            {{--                                <!-- /.col -->--}}
                            {{--                            </div>--}}
                            {{--                            <!-- /.row -->--}}
                            {{--                            <button type="submit" class="btn btn-primary"> Filter </button>--}}
                            {{--                        </div>--}}
                            {{--                        {!! Form::close() !!}--}}

                            <div class="card-body table-responsive">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    {{--                                    <th>Address</th>--}}
                                    <th>Status</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th class="text-center">Actions</th>
                                    </thead>
                                    <tbody>

                                    @foreach ($users as $user)

                                        <tr>
                                            <td>{{ $user->id }}</td>
                                            <td>{{ $user->name }}</td>
                                            <td><a class="text-info" href="javascript:void(0)">{{$user->email}}</a></td>
                                            <td><a class="text-info" href="javascript:void(0)">{{$user->phone}}</a></td>
                                            {{--                                        <td>{{ $user->address??'' }}</td>--}}
                                            <td class="text-center">{!! Helper::activeStatusLabel($user->status) !!}</td>
                                            <td>{{ $user->created_at }}</td>
                                            <td>{{ $user->updated_at }}</td>
                                            <td class="text-center">
                                                {{--                                            <a class="btn btn-info btn-sm"--}}
                                                {{--                                                href="{{ route('admin.users.show', $user->id) }}" data-toggle="tooltip"--}}
                                                {{--                                                title="Detail"> <i class="fas fa-eye"></i></a>--}}
                                                @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                                Auth::guard('admin')->user()->hasPermission('admin-users-update'))
                                                    @if($user->member_type==0)
                                                        <a class="btn btn-success btn-sm"
                                                           href="{{route('admin.approve',$user->id)}}" data-toggle="tooltip"
                                                           title="Edit"> <i class="fas fa-edit">Approve Membership</i></a>
                                                    @else
                                                        <a class="btn btn-danger btn-sm"
                                                           href="{{route('admin.reject', $user->id)}}" data-toggle="tooltip"
                                                           title="Edit"> <i class="fas fa-edit">Cancel Membership</i></a>
                                                    @endif

                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- /.row (main row) -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>

    @push('js')
        <!-- input partial scripts here -->
        <script>
            $(document).ready(function () {
                $('.multi-select').select2({
                    placeholder: "Choose an option",
                });
                //end document ready
            });
        </script>
    @endpush
@endsection
