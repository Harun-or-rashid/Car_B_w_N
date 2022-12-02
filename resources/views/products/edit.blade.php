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
                    <h1 class="m-0 text-dark">Product Edit</h1>
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

                    @include('include.error')
                    {!! Form::model($product,['route' => ['product.product.update', $product->id],
                    'method' =>'patch']) !!}
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <h3 class="card-title">Edit Product Item Info</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">

                                    <div class="form-group">
                                        {!! Form::label('name', 'Name') !!}
                                        {!! Form::text('name', null, ['class'=>'form-control']) !!}
                                    </div>


                                    <div class="form-group">
                                        {!! Form::label('description', 'Description') !!}
                                        {!! Form::textarea('description', null, ['class'=>'form-control ckeditor']) !!}
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <div class="icheck-primary">
                                                    {!! Form::checkbox('status', '1', 1, ['id'=>'status',
                                                    'class'=>'form-control'])
                                                    !!}
                                                    {!! Form::label('status', '&nbsp;Active') !!}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6">

                                    <div class="form-group">
                                        {!! Form::label('category_id', 'Category') !!}
                                        {!! Form::select('category_id', [''=>'Choose a Category']+$categories, null,
                                        ['class'=>'form-control multi-select ']) !!}
                                    </div>


                                    <div class="form-group col-md-5">
                                        {!! Form::label('baseprice', 'Base Price') !!}
                                        {!! Form::number('base_price', null, ['class'=>'form-control ']) !!}
                                    </div>
                                    <div class="form-group col-md-5">
                                        {!! Form::label('slug', 'Slug') !!}
                                        {!! Form::text('slug', null, ['class'=>'form-control ']) !!}
                                    </div>
                                    <div class="form-group col-md-5">
                                        {!! Form::label('images', 'Image') !!}
                                        {{--                                        {!! Form::file('images[]', null,'multiple', ['class'=>'form-control',]) !!}--}}
                                        <input type="file" name="image[]" multiple>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>

                            @if(Auth::guard('admin')->user()->hasRole('admin') ||
                            Auth::guard('admin')->user()->hasPermission(['admin-admins-read']))
                            <a href="{{route('product.product.index')}}" type="button" class="btn btn-danger">Cancel</a>
                            @endif
                        </div>
                    </div>
                    {!! Form::close() !!}
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
