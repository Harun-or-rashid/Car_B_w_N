@extends('layouts.admin')
@section('title', "Admin Dashboard")
@push('css')
<style>
    sup {
        font-size: 16px;
        font-weight: 400;
        opacity: .90;
    }
</style>
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
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Dashboard</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
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
                {{-- <div class="col-md-4 col-12">
                    <!-- small box -->
                    <div class="small-box bg-info">
                        <div class="inner">
                            @php
                            $nUsers = App\User::whereDate('created_at', Carbon\Carbon::today())->count();
                            @endphp
                            <h3>{{ $nUsers }} <sup>New User</sup></h3>
                <p>Registrations Today</p>
            </div>
            <div class="icon">
                <i class="ion ion-person-add"></i>
            </div>
            @if(Auth::guard('admin')->user()->hasRole('admin') ||
            Auth::guard('admin')->user()->hasPermission(['admin-users-read']))
            <a href="{{route('admin.users.index')}}" class="small-box-footer">More info <i
                    class="fas fa-arrow-circle-right"></i></a>
            @endif
        </div>
</div> --}}
<!-- ./col -->
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