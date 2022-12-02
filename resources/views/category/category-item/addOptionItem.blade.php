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
                        <h1 class="m-0 text-dark">Add Option and Item</h1>
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
                                <h3 class="card-title"> Category Info</h3>
                            </div>
                            <div class="card-body">
                                <div class="col-md-6">
                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">Category Details</h3>
                                        </div>
                                        <!-- /.card-header -->
                                        <div class="card-body">
                                            <p class="">     Category :  <span>{{$category->name}}</span> </p>
                                            <hr>
                                            <p class="">Category Details : <span>{{$category->description}}</span></p>
                                            <hr>
                                            <p class="">Slug  : <span>{{$category->slug}}</span></p>
                                            <hr>


                                        </div>
                                        <!-- /.card-body -->

                                    </div>


                                </div>

                            </div><!-- /.card -->
                            <div class="">
                                <div class="card-body">
                                    <div class="col-md-6">
                                        <div class="card card-info">
                                            <div class="card-header">
                                                <div class="row">

                                                    <div class="col-md-3">
                                                        <h3 class="card-title">Selected Option and Item</h3>
                                                    </div>
                                                    <div class="col-md-3 offset-5">
                                                        <a class="btn btn-primary" href="" data-toggle="modal" data-target="#modal-default">Add Option and Item</a>

                                                    </div>
                                                </div>

                                            </div>

                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    @include('include.error')

                                                                    {!! Form::open(['route' => 'category.item.store', 'method' =>'post']) !!}
                                                                    <div class="col-md-4 form-group ">
                                                                        {!! Form::label('option_id', 'Options') !!}
                                                                        {!! Form::select('option_id', [''=>'Choose an option']+$options, null,
                                                                        ['class'=>'form-control multi-select']) !!}
                                                                    </div>
                                                                    {!! Form::hidden('category_id', $category->id) !!}
                                                                    <div class="form-group">
                                                                        {!! Form::label('item', 'Items') !!}
                                                                        {!! Form::select('item[]', $items, null,
                                                                        ['class'=>'form-control multi-select', 'id'=>'item', 'multiple' => true]) !!}
                                                                    </div>
                                                                    <button type="submit" class="btn btn-primary">Submit</button>
                                                                    {!! Form::close() !!}




                                            <!-- /.card-header -->
                                            <div class="card-body table-responsive " style="height: 200px;">

                                                <table class="table table-head-fixed text-nowrap">
                                                    <thead>
                                                    <tr>
                                                        <th>Option</th>
                                                        <th>Item</th>
                                                        <th>Action</th>

                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    @foreach ($item as $itema)
                                                        <tr>
                                                            <td>{{$itema->oname}}</td>
                                                            <td>{{$itema->iname}}</td>
                                                            <td>
                                                                @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                                                Auth::guard('admin')->user()->hasPermission('admin-admins-update'))
                                                                    {{--                                                <a class="btn btn-info btn-sm"--}}
                                                                    {{--                                                   href="{{ route('category.category-option.show',$category->id) }}"--}}
                                                                    {{--                                                   data-toggle="tooltip" title="Details"> <i--}}
                                                                    {{--                                                        class="fas fa-info"></i>--}}
                                                                    {{--                                                </a>--}}
                                                                    <a class="btn btn-primary btn-sm"
                                                                       href="{{route('category.item.edit',$itema->id)}}" data-toggle="tooltip"
                                                                       title="Edit"> <i class="fas fa-edit"></i>
                                                                    </a>

                                                                @endif

                                                                @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                                                Auth::guard('admin')->user()->hasPermission('admin-admins-delete'))
                                                                    <a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                                                       title="Delete"
                                                                       onclick="if (confirm(&quot;Are you sure you want to delete ?&quot;)) { document.getElementById('deleteForm{{ $itema->id }}').submit(); } event.returnValue = false; return false;"><i
                                                                            class="fa fa-trash"></i></a>

                                                                    {!! Form::open(['method'=>'DELETE',
                                                                    'action'=>['Option\OptionItemController@destroy',
                                                                    $itema->id], 'id'=>'deleteForm'.$itema->id]) !!}
                                                                    {!! Form::close() !!}
                                                                @endif
                                                            </td>
                                                        </tr>
                                                    @endforeach
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="row">

                                        </div>
                                    </div>
                                    <div class="col-md-6">

                                    </div>
                                </div>
                                {{--                            <div class="">--}}
                                {{--                                <div class="row bg-info ">--}}

                                {{--                                    <div class="col-md-2"><h4 class="offset-1">Add Options and Item</h4></div>--}}
                                {{--                                </div>--}}
                                {{--                            </div>--}}


                            </div>
                        </div>
                        <!-- /.row (main row) -->
                    </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>

    @push('js')

        <script src="https://cdn.ckeditor.com/4.16.2/standard/ckeditor.js"></script>
        <script>
            $(document).ready(function () {
                $('.multi-select').select2({
                    placeholder: "Choose an option",
                });

                //For getting associate items according to option
                $('#option_id').on('change', function () {

                    if ($(this).val() != '') {
                        const option_id = $(this).val();
                        const csrf_token = '{{ csrf_token() }}';
                        $.ajax({
                            url: '{{ route('category.OptionList') }}',
                            method: 'POST',
                            data: {'option_id': option_id, '_token': csrf_token},
                            //must be send csrf_token exactly to _token name otherwise not work
                            success: function (data) {
                                $('#item').html(data);
                            }
                        });
                    } else {
                        $('#item').html('');
                    }
                })

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
            $('#items').select2({
                placeholder: "Select Items",
                ajax: {
                    url: "{{ route("category.itemList") }}",
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
