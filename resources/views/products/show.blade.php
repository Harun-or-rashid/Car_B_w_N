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
                    <h1 class="m-0 text-dark">Products Details</h1>
                </div><!-- /.col -->

            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
        <div class="row">
            <div class="col-lg-12">
{{--                @include('include.error')--}}

                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h3 class="card-title"> Products  Info</h3>
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
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Slug</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{{ $product->id ??''}}</td>
                                            <td>{{ $product->name ??''}}</td>
                                            <td>
                                            @foreach($images as $image)
                                            <img src="{{asset('storage/images/products/150/'.$image['image'])}}" alt="">
                                            @endforeach
                                            </td>
                                            <td>{{ $product->base_price??''}}</td>
                                            <td>{{ $product->slug ??''}}</td>
                                            <td>{{ $product->description ??''}}</td>
                                            <td class="text-center">{!! Helper::activeStatusLabel($product->status??'') !!}</td>
                                            <td>{{ $product->created_at->diffForHumans()??'' }}</td>
                                            <td>{{ $product->updated_at->diffForHumans()??'' }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>


                    </div>

                </div>
                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h3 class="card-title"> Product  Pricing Controller</h3>
                    </div>
                    <div class="col-lg-12">
                        <div class="card card-primary">

                            <!-- /.card-header -->
                            @include('include.flashMessage')

                            @include('include.error')
                                <div class="card-body">
                                    {!! Form::open(['route' => ['product.priceController',$product->id??''], 'method' =>'post']) !!}
                                    <div class="row">
                                        <div class="col-md-6">
                                                  <div class="row">
                                                      <div class=" row">
                                                          <div class="form-group m-2 center">  {!! Form::label('option_id', 'Price Controller') !!} </div>
                                                          <div class="form-group">

                                                              {!! Form::select('option_id', [''=>'Choose an option']+$options??'', $product->price_controller??'',
                                                                     ['class'=>'form-control multi-select'])     !!}
                                                          </div>

                                                      </div>
                                                      <div class=" form-group" style="margin: 0px 15px;" >
                                                          @if($product->price_controller??'')
                                                              <form class="" method="POST" action="{{route('product.changeController',$product->id)}}">
                                                                  @csrf
{{--                                                                  <input name="_method" type="hidden" value="DELETE">--}}
                                                                  <button type="submit" class="btn btn-warning warning" data-toggle="tooltip" > Change</button>
                                                              </form>
{{--                                                              <form action="post">--}}
{{--                                                                  <a href=""  class="btn btn-primary" >Change</a>--}}
{{--                                                              </form>--}}
                                                          @else
                                                              <button  type="submit"  class=" btn btn-primary" > Add </button>
                                                          @endif
                                                      </div>
                                                  </div>
                                                 </div>
                                        </div>


                                    </div>
                                    <!-- /.row -->
                                    {!! Form::close() !!}
                                </div>

                            </div>
                </div>
                    @if($product->price_controller??'')
                    <div class="card card-bordered">

                        <div class="card-header">
                            <h3 class="card-title">  Pricing</h3>
                        </div>
                        {!! Form::open(['route' => ['product.price',$product->id,$product->price_controller ??''], 'method' =>'post']) !!}

                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class=" row">
                                            <div class="form-group m-2 center">  {!! Form::label('item', 'Item') !!} </div>
                                            <div class="form-group">

                                                {!! Form::select('item_id', $items??'', null,
                                             ['class'=>'form-control multi-select', 'id'=>'item', 'multiple' => false]) !!}
                                            </div>

                                        </div>
                                        <div class=" row">
                                            <div class="form-group  "style="margin: 5px 5px 0px 25px;">  {!! Form::label('price', 'Price') !!} </div>
                                            <div class="form-group" >

                                                {!! Form::text('price', null, ['class'=>'form-control']) !!}

                                            </div>

                                        </div>
                                        <div class=" form-group" style="margin: 0px 15px;" >
                                            <button  type="submit"  class=" btn btn-primary" > Add </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.row -->
                        {!! Form::close() !!}
                    </div>
                    @endif

                {{--item wise price showing--}}
                    <div class="card card-bordered">

                        <div class="card-header">
                            <h3 class="card-title">Prices</h3>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                        <th>ID</th>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        {{--                                    <th>Created At</th>--}}
                                        {{--                                    <th>Updated At</th>--}}
                                        <th>Action</th>
                                        </thead>
                                        <tbody>
                                        @foreach($prices  as $price)
                                            <tr>
                                                <td>{{ $price->id??'' }}</td>
                                                <td>{{ $price->item_name ?? '' }}</td>
                                                <td>{{ $price->price ??''}}</td>
                                                <td class="text-center">{!! Helper::activeStatusLabel($price->status??'') !!}</td>
                                                {{--                                        <td>{{ $price->created_at->diffForHumans() }}</td>--}}
                                                {{--                                        <td>{{ $price->updated_at->diffForHumans() }}</td>--}}
                                                {{--                                        <td>{{ $price->updated_at->diffForHumans() }}</td>--}}
                                                <td class="text-center">
                                                    @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                                    Auth::guard('admin')->user()->hasPermission('admin-admins-update'))
                                                        {{--                                                <a class="btn btn-info btn-sm"--}}
                                                        {{--                                                   href="{{ route('category.category-option.show',$price->id) }}"--}}
                                                        {{--                                                   data-toggle="tooltip" title="Details"> <i--}}
                                                        {{--                                                        class="fas fa-info"></i>--}}
                                                        {{--                                                </a>--}}
                                                        <a class="btn btn-primary btn-sm"
                                                           href="{{route('product.price.edit',$price->id??'')}}" data-toggle="tooltip"
                                                           title="Edit"> <i class="fas fa-edit"></i>
                                                        </a>

                                                    @endif

                                                    @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                                    Auth::guard('admin')->user()->hasPermission('admin-admins-delete'))
                                                        <form class="" method="POST" action="{{route('product.price.destroy',$price->id??'')}}">
                                                            @csrf
                                                            <input name="_method" type="hidden" value="DELETE">
                                                            <button type="submit" class="btn btn-danger btn-sm show_confirm" data-toggle="tooltip" title='Delete'><i class="fa fa-trash"></i></button>
                                                        </form>

                                                        {!! Form::open(['method'=>'DELETE',
                                                        'action'=>['Product\ProductPriceController@destroy',
                                                        $price->id??''], 'id'=>'deleteForm'.$price->id??'']) !!}
                                                        {!! Form::close() !!}
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


            </div>
        </div>
    </div>
</div>
                            <!-- /.card-body -->





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
            $('#option_id').attr('selected', function () {

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
