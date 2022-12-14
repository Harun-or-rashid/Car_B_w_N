@extends('layouts.admin')
@section('title', "Product")
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
                    <h1 class="m-0 text-dark">Product  Create</h1>
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
                    {!! Form::open(['route' => 'product.product.store', 'method' =>'post','enctype' => 'multipart/form-data']) !!}
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <h3 class="card-title">New Product Info</h3>
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
                                        {!! Form::text('base_price', null, ['class'=>'form-control ']) !!}
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
                            <a href="{{route('category.category-item.index')}}" type="button" class="btn btn-danger">Cancel</a>
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
    <script src="https://cdn.ckeditor.com/4.16.2/standard/ckeditor.js"></script>

    <!-- input partial scripts here -->
<script>
    $(document).ready(function () {
        $('.multi-select').select2({
            placeholder: "Choose a Category",
        });

        //For getting associate items according to option
        {{--$('#option_id').on('change', function () {--}}

        {{--    if ($(this).val() != '') {--}}
        {{--        const option_id = $(this).val();--}}
        {{--        const csrf_token = '{{ csrf_token() }}';--}}
        {{--        $.ajax({--}}
        {{--            url: '{{ route('category.OptionList') }}',--}}
        {{--            method: 'POST',--}}
        {{--            data: {'option_id': option_id, '_token': csrf_token},--}}
        {{--            //must be send csrf_token exactly to _token name otherwise not work--}}
        {{--            success: function (data) {--}}
        {{--                $('#item').html(data);--}}
        {{--            }--}}
        {{--        });--}}
        {{--    } else {--}}
        {{--        $('#item').html('');--}}
        {{--    }--}}
        {{--})--}}

//             $("#country").change(function(){
//                 var id = $(this).val();
//
//                 if(id){
//
//                     $.ajax({
//                         type:'GET',
//                         url:'{{ route("category.OptionList") }}',
//                         data:{"id" : id },
//                         success:function(res){
//                             console.log(res);
//                             $("#item").empty();
//                             $("#item").append('<option>Select Item</option>');
//                             $.each(res,function(key,value){
//                                           $("#item").append('<option class="select2" value="'+value.id+'">'+value.name+'</option>');
//
// /*
//                                 $("#item").append(' <input name="item" id="item" type="checkbox" value="'+value.id+'" data-tags="[]">'+value.name+');
// */
//
//                             });
//                         }
//                     });
//                 }
//             });
        {{--$('#state').on('change',function(){--}}
        {{--    var stateID = $(this).val();--}}
        {{--    if(stateID){--}}
        {{--        $("#item").append('<option value="'+value.id+'">'+value.name+'</option>');--}}
        {{--        $.ajax({--}}
        {{--            type:"GET",--}}
        {{--            url:"{{ route('get_city') }}",--}}
        {{--            data : { "state_id" : stateID },--}}
        {{--            success:function(res){--}}
        {{--                if(res){--}}
        {{--                    $("#city").empty();--}}
        {{--                    $("#city").append('<option>Select City</option>');--}}
        {{--                    $.each(res,function(key,value){--}}
        {{--                        $("#city").append('<option value="'+key.city_id+'">'+value.city_name+'</option>');--}}
        {{--                    });--}}
        {{--                }--}}
        {{--            }--}}
        {{--        });--}}
        {{--    }--}}
        {{--});--}}
    });
</script>

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
