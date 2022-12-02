@extends('layouts.user')
@section('title', "Profile Info")
@push('css')
<!-- input partial css here -->
<style>

</style>
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
                    <h1 class="m-0 text-dark">User Profile Info</h1>
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
                <div class="col-md-12">
                    <!-- Profile Image -->
                    <div class="row">

                        <div class="col-md-6">
                            <div class="card card-primary card-outline">
                                <div class="card-body box-profile">
                                    <div class="text-center">
                                        <img class="profile-user-img img-fluid img-circle"
                                            src="{{ asset('backend/image/User-Avatar.png') }}"
                                            alt="User profile picture">
                                    </div>

                                    <h3 class="profile-username text-center">{{ $user->name }}</h3>

                                    <p class="text-muted text-center">{{ $user->email }}</p>

                                    <ul class="list-group list-group-unbordered mb-3">
                                        <li class="list-group-item">
                                            <b>Total Enroll</b> <a class="float-right">{{ $user->parentInformation->count() }}</a>
                                        </li>
                                    </ul>

                                    <a href="{{ route('editProfile') }}" class="btn btn-primary btn-block"><b>Update Profile</b></a>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.card -->
                        </div>
                        <div class="col-md-6">
                            <div class="card card-info">
                                <div class="card-header">
                                    <h3 class="card-title">About Me</h3>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <strong><i class="fas fa-book mr-1"></i> Full Name</strong>
                                    <p class="text-muted">
                                        {{ $user->name }}
                                    </p>
                                    <hr>
                                    <strong><i class="fas fa-book mr-1"></i> Email</strong>
                                    <p class="text-muted">
                                        {{ $user->email }}
                                    </p>
                                    <hr>
                                    <strong><i class="fas fa-book mr-1"></i> Phone Number</strong>

                                    <p class="text-muted">
                                        {{ $user->phone }}
                                    </p>
                                    <hr>
                                    <strong><i class="fas fa-map-marker-alt mr-1"></i> Address</strong>
                                    <p class="text-muted">{{ $user->location }}</p>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.card -->
                        </div>
                        <!-- About Me Box -->

                    </div> <!-- /.row -->
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

            //end document ready
        });
</script>
@endpush
@endsection
