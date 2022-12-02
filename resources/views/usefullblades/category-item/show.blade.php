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
                    <h1 class="m-0 text-dark">Category Details</h1>
                </div><!-- /.col -->

            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
        <div class="row">
            <div class="col-lg-12">
{{--                @include('include.error')--}}

                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h3 class="card-title"> Category  Info</h3>
                    </div>
                    <div class="col-lg-12">
                        <div class="card card-primary">

                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{{ $category->id }}</td>
                                            <td>{{ $category->name }}</td>
                                            <td>{{ $category->slug }}</td>
                                            <td>{{ $category->description }}</td>
                                            <td class="text-center">{!! Helper::activeStatusLabel($category->status) !!}</td>
                                            <td>{{ $category->created_at->diffForHumans() }}</td>
                                            <td>{{ $category->updated_at->diffForHumans() }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
     </div>
                            <!-- /.card-body -->
                        </div>


                    </div>

                </div>
                <div class="row " >
                    <div class="col-lg-12">
                        @include('include.flashMessage')

                        @include('include.error')
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title">Add Option and Item</h3>
                            </div>
                            {!! Form::open(['route' => ['category.item.store', $category->id], 'method' =>'post']) !!}
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            {!! Form::label('option_id', 'Options') !!}
                                            {!! Form::select('option_id', [''=>'Choose an option']+$options, null,
                                            ['class'=>'form-control multi-select']) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            {!! Form::label('item', 'Items') !!}
                                            {!! Form::select('items[]', $items, null,
                                            ['class'=>'form-control multi-select', 'id'=>'item', 'multiple' => true]) !!}
                                        </div>
                                    </div>

                                    <div class="col-md-2 form-group">
                                        <button  type="submit"  class=" btn btn-primary" style="margin: 32px -2px ;"> Add </button>
                                    </div>
                                </div>
                                <!-- /.row -->
                            </div>
                            {!! Form::close() !!}
                        </div>

                    </div>
                    <div class="col-lg-12">
{{--                        @include('include.error')--}}
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title">Item Info</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Option</th>
                                            <th>Item</th>
                                            <th>Created At</th>
                                            <th>Updated At</th>
                                            <th>Action</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach ($category->optionCategories as $optionCategory)
                                            <tr>
                                                <td>{{$optionCategory->id}}</td>
                                                <td>{{$optionCategory->option->name ?? '' }}</td>
                                                <td>
                                                @foreach($optionCategory->categoryOptionItems as $categoryOptionItem)
                                                    {{$categoryOptionItem->item->name ?? ''}}@if (!$loop->last), @endif
                                                @endforeach
                                                </td>
                                                <td>{{ $optionCategory->created_at->diffForHumans() }}</td>
                                                <td>{{ $optionCategory->updated_at->diffForHumans() }}</td>
                                                <td class="row">
                                           <div style="    margin-right: 5px;">
                                               @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                           Auth::guard('admin')->user()->hasPermission('admin-admins-update'))
                                                   <a class="btn btn-primary btn-sm"
                                                      href="{{route('category.item.edit',[$optionCategory->category_id, $optionCategory->id])}}" data-toggle="tooltip"
                                                      title="Edit"> <i class="fas fa-edit"></i>
                                                   </a>
                                               @endif
                                           </div>

                                              <div>
                                                  @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                              Auth::guard('admin')->user()->hasPermission('admin-admins-delete'))
                                                      {{--                                                    <a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip"--}}
                                                      {{--                                                       title="Delete"--}}
                                                      {{--                                                       onclick="if (confirm(&quot;Are you sure you want to delete ?&quot;)) { document.getElementById('deleteForm{{ $optionCategory->id }}').submit(); } event.returnValue = false; return false;"><i--}}
                                                      {{--                                                            class="fa fa-trash"></i></a>--}}
                                                      <form class="" method="POST" action="{{route('category.item.destroy',[$optionCategory->category_id, $optionCategory->id])}}">
                                                          @csrf
                                                          <input name="_method" type="hidden" value="DELETE">
                                                          <button type="submit" class="btn btn-danger btn-sm show_confirm" data-toggle="tooltip" title='Delete'><i class="fa fa-trash"></i></button>
                                                      </form>
                                                      {!! Form::open(['method'=>'DELETE',
                                                      'action'=>['Category\CategoryOptionItemController@destroy',
                                                      $optionCategory->category_id, $optionCategory->id], 'id'=>'deleteForm'.$optionCategory->id]) !!}
                                                      {!! Form::close() !!}
                                                  @endif
                                              </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div></div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.content-header -->

    <!-- Main content -->

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
