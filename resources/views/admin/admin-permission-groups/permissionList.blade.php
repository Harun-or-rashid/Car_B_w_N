@extends('layouts.admin')
@section('title', "Admin Permissions")
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
                    <h1 class="m-0 text-dark">Admin Permission List</h1>
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
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <h3 class="card-title">All Permissions Group Info</h3>
                        </div>
                        <div class="card-body">
                            @foreach($permissionGroups as $permissionGroup)
                            <div class="card-header border-0 pb-0">
                                <h3 class="card-title text-bold">
                                    {{ $loop->iteration }} . <span class="permissionscategory">{{ $permissionGroup->name }}</span>
                                </h3>
                            </div>

                            <div class="card-body">
                                <div class="col-md-12">
                                    <div class="row">
                                        @foreach($permissionGroup->permissions as $permission)
                                        <div class="col-md-3">
                                            {{ $loop->iteration }}. <label class="permissionlabel">{{ $permission->display_name }}</label>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>
                        <div class="card-footer">
                        </div>
                    </div>
                </div><!-- /.card -->
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
