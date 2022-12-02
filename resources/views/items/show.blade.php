@extends('layouts.admin')
@section('title', "Category")
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
                        <h1 class="m-0 text-dark">Option Details</h1>
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
                        @include('include.error')

                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title"> Option  Info</h3>
                            </div>
                            <div class="card-body">
                                <div class="col-md-6">
                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">Option Details</h3>
                                        </div>
                                        <!-- /.card-header -->
                                        <div class="card-body">
                                            <p class="text-muted">    <strong> Option :  <span>
                                                {{$category->name}}
                                            </span> </strong></p>



                                            <hr>
                                            <p class="text-muted">
                                                <strong> Option Details : <span>

                                      {{$category->description}}</span></strong>
                                            </p>
                                            <hr>

                                            {{--                                        <strong><i class="fas fa-pencil-alt mr-1"></i> Status</strong>--}}

                                            {{--                                        <p class="text-muted nav-pill-warning">--}}
                                            {{--                                         {{$category->status}}--}}
                                            {{--                                        </p>--}}

                                            <p class="text-muted">
                                                <strong> Slug  : <span>

                                      {{$category->slug}}</span></strong>
                                            </p>
                                            <hr>

                                            {{--                                        <div class="col-6">--}}
                                            {{--                                        <strong> Status--}}

                                            {{--                                            <div class="form-group">--}}
                                            {{--                                                <div class="icheck-primary">--}}
                                            {{--                                                    {!! Form::checkbox('status', '1', null, ['id'=>'status',--}}
                                            {{--                                                    'class'=>'form-control'])--}}
                                            {{--                                                    !!}--}}
                                            {{--                                                    {!! Form::label('status', '&nbsp;Active') !!}--}}
                                            {{--                                                </div>--}}
                                            {{--                                            </div>--}}

                                            {{--                                        </strong>--}}
                                            {{--                                        </div>--}}
                                        </div>
                                        <!-- /.card-body -->
                                    </div>

                                    <div class="row">

                                    </div>
                                </div>
                                <div class="col-md-6">

                                </div>
                            </div>
                            <div class="row">

                                <div class="col-md-2"><h4 class="badge-light offset-1"> Option Items</h4></div>
                                <div class="col-md-2" ><a class="btn btn-info" href="{{route('category.category-option.create',$category->id)}}">Add More Item</a></div>
                            </div>
                            <div class="card-body table-responsive " style="height: 200px;">

                                <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Action</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Double Petty</td>
                                        <td class="text-center">
                                            @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                            Auth::guard('admin')->user()->hasPermission('admin-admins-update'))
{{--                                                <a class="btn btn-info btn-sm"--}}
{{--                                                   href="{{ route('category.category-option.show',$category->id) }}"--}}
{{--                                                   data-toggle="tooltip" title="Details"> <i--}}
{{--                                                        class="fas fa-info"></i>--}}
{{--                                                </a>--}}
                                                <a class="btn btn-primary btn-sm"
                                                   href="{{route('category.category-option.edit',$category->id)}}" data-toggle="tooltip"
                                                   title="Edit"> <i class="fas fa-edit"></i>
                                                </a>

                                            @endif

                                            @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                            Auth::guard('admin')->user()->hasPermission('admin-admins-delete'))
                                                <a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                                   title="Delete"
                                                   onclick="if (confirm(&quot;Are you sure you want to delete ?&quot;)) { document.getElementById('deleteForm{{ $category->id }}').submit(); } event.returnValue = false; return false;"><i
                                                        class="fa fa-trash"></i></a>

                                                {!! Form::open(['method'=>'DELETE',
                                                'action'=>['Category\CategoryOptionController@destroy',
                                                $category->id], 'id'=>'deleteForm'.$category->id]) !!}
                                                {!! Form::close() !!}
                                            @endif
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
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
        <script src="https://cdn.ckeditor.com/4.16.2/standard/ckeditor.js"></script>
        <script>
            $('#option').select2({
                placeholder: "Select Option",
                ajax: {
                    url: "{{ route('category.OptionList') }}",
                    type: 'post',
                    dataType: "json",
                    data: function (term) {
                        return {
                            _token: CSRF_TOKEN,
                            term: term
                        };
                    },
                    processResults: function (data) {
                        return {
                            results: $.map(data, function (item) {
                                return {
                                    text: item.name,
                                    id: item.id
                                }
                            })
                        };
                    }
                }
            });
        </script>
        <!-- input partial scripts here -->
        <script>
            $(document).ready(function () {
                $('.multi-select').select2({
                    placeholder: "Choose an option",
                });


                //show hide
                $('#role_id').on('change', function () {
                    if (this.value == '2') {
                        $(".permission").show();
                    } else {
                        $(".permission").hide();
                    }
                });

                //select permissions
                let triggeredByChild = false;

                $('#selectAll').on('click', function (event) {
                    if($(this).prop("checked") == true){
                        $('.check').prop("checked", true);
                        $('.selectcategory').prop("checked", true);
                        $('#selectRevert').prop("checked", false);
                    }else{
                        $('.check').prop("checked", false);
                        $('.selectcategory').prop("checked", false);
                    }
                });


                $('#selectRevert').on('click', function (event) {
                    if($(this).prop("checked") == true){
                        $('#selectAll').prop("checked", false);
                        $('.selectcategory').prop("checked", false);
                        $('.check').prop("checked", false);
                    }else{
                        $('.check').prop("checked", true);
                        $('#selectAll').prop("checked", true);
                        $('.selectcategory').prop("checked", true);
                    }
                });

                // Removed the checked state from "All" if any checkbox is unchecked
                $('.check').on('click', function (event) {
                    if ($('.check').filter(':checked').length == $('.check').length) {
                        $('#selectAll').prop("checked", true);
                    }else{
                        $('#selectAll').prop("checked", false);
                    }
                });

                // Category wise Select
                $('.selectcategory').on('click', function (event) {
                    // alert($(this).parent().parent().attr('class'));
                    if($(this).prop("checked") == true){
                        $(this).parent().parent().parent().next().find('.check').prop("checked", true);
                    }else{
                        $(this).parent().parent().parent().next().find('.check').prop("checked", false);
                    }
                    // calculate length
                    if ($('.check').filter(':checked').length == $('.check').length) {
                        $('#selectAll').prop("checked", true);
                    }else{
                        $('#selectAll').prop("checked", false);
                    }

                });
                //end document ready
            });
        </script>
    @endpush
@endsection
