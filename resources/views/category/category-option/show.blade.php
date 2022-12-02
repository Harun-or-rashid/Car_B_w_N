@extends('layouts.admin')
@section('title', "Category")
@push('css')
    <!-- input partial css here -->
    <style>

    </style>
@endpush
@section('content')
    <div class="content-wrapper">

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-md-6">
                        <h1 class="m-0 text-dark">Option Details</h1>
                    </div><!-- /.col -->
                    <div class="col-md-6">

                    </div><!-- /.col -->
                </div><!-- /.row -->

                <!-- Main row -->
                <div class="row">
                    <div class="col-lg-12">

                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title"> Option  Info</h3>
                            </div>
                                <div class="col-lg-12">
                                    <div class="card card-primary">

                                        <!-- /.card-header -->
                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <table class="table table-bordered   table-hover">
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

                                            {{--                                            <p class="text-muted">    <strong> Option :  <span>--}}
{{--                                                {{$category->name}}--}}
{{--                                            </span> </strong></p>--}}



{{--                                            <hr>--}}
{{--                                            <p class="text-muted">--}}
{{--                                                <strong> Option Details : <span>--}}

{{--                                      {{$category->description}}</span></strong>--}}
{{--                                            </p>--}}
{{--                                            <hr>--}}

{{--                                            --}}{{--                                        <strong><i class="fas fa-pencil-alt mr-1"></i> Status</strong>--}}

{{--                                            --}}{{--                                        <p class="text-muted nav-pill-warning">--}}
{{--                                            --}}{{--                                         {{$category->status}}--}}
{{--                                            --}}{{--                                        </p>--}}

{{--                                            <p class="text-muted">--}}
{{--                                                <strong> Slug  : <span>--}}

{{--                                      {{$category->slug}}</span></strong>--}}
{{--                                            </p>--}}
{{--                                            <hr>--}}

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


                                </div>

                            </div>
                            <div class="row " >
                                <div class="col-lg-12">
                                    @include('include.error')
                                <div class="card card-primary card-outline">
                                    <div class="card-header">
                                        <h3 class="card-title">Create Item</h3>
                                    </div>
                                    @include('include.flashMessage')

                                    {!! Form::open(['route' => 'option.option-item.store', 'method' =>'post']) !!}
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    {!! Form::label('name', 'Name') !!}
                                                    {!! Form::text('name', null, ['class'=>'form-control']) !!}
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    {!! Form::label('description', 'Description') !!}
                                                    {!! Form::text('description', null, ['class'=>'form-control']) !!}
                                                </div>
                                            </div>
                                            {!! Form::hidden('option_id', $category->id) !!}

                                            <div class="col-md-1 form-group d-flex" style="    margin: 29px 5px 0px 20px;" >
                                                <div>
                                                    {!! Form::checkbox('status', '1', 1, ['id'=>'status',
                                                           'class'=>'form-control'])
                                                           !!}
                                                </div>

                                                <div class="icheck-primary form-group"  >
                                                    {!! Form::label('status', '&nbsp;Active') !!}
                                                </div>
                                            </div>
                                            <div class="col-md-2 form-group">
                                                <button  type="submit"  class=" btn btn-primary" style="margin: 32px -2px ;"> Create </button>
                                            </div>

                                            <!-- /.row -->

                                            {!! Form::close() !!}
                                        </div>
                                        {{--                        <div class="card-footer pb-0">--}}
                                        {{--                            <ul class="pagination pagination-sm m-0 float-right">--}}
                                        {{--                                Page {{ $item->currentPage() }} , showing--}}
                                        {{--                                {{ $item->count() }}--}}
                                        {{--                                records out of {{ $item->total() }} total--}}
                                        {{--                            </ul>--}}
                                        {{--                        </div>--}}
                                        {{--                        <div class="card-footer py-2">--}}
                                        {{--                            <ul class="pagination pagination-sm m-0 float-right">--}}
                                        {{--                                {{ $item->appends(request()->all())->links() }}--}}
                                        {{--                            </ul>--}}
                                        {{--                        </div>--}}
                                    </div>
                                </div>

                            </div>
                                    <div class="col-lg-12">
                                        <div class="card card-primary card-outline">
                                            <div class="card-header">
                                                <h3 class="card-title">Item Info</h3>
                                            </div>
                            <div class="card-body table-responsive " >
                                <table class="table table-head-fixed text-nowrap">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Description</th>
{{--                                        <th>Status</th>--}}
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Action</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($item as $itema)
                                        <tr>
                                        <td>{{$itema->id}}</td>
                                        <td>{{$itema->name}}</td>
                                        <td>{{$itema->slug}}</td>
                                        <td>{{$itema->description}}</td>
{{--                                            <td class="text-center">{!! Helper::activeStatusLabel($itema->status) !!}</td>--}}
                                            <td>{{ $itema->created_at->diffForHumans() }}</td>
                                            <td>{{ $itema->updated_at->diffForHumans() }}</td>
                                        <td class="row">
                                   <div style="margin-right: 5px">
                                       @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                   Auth::guard('admin')->user()->hasPermission('admin-admins-update'))
                                           {{--                                                <a class="btn btn-info btn-sm"--}}
                                           {{--                                                   href="{{ route('category.category-option.show',$category->id) }}"--}}
                                           {{--                                                   data-toggle="tooltip" title="Details"> <i--}}
                                           {{--                                                        class="fas fa-info"></i>--}}
                                           {{--                                                </a>--}}
                                           <a class="btn btn-primary btn-sm"
                                              href="{{route('option.option-item.edit',$itema->id)}}" data-toggle="tooltip"
                                              title="Edit"> <i class="fas fa-edit"></i>
                                           </a>

                                       @endif
                                   </div>

                                            @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                            Auth::guard('admin')->user()->hasPermission('admin-admins-delete'))
{{--                                                <a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip"--}}
{{--                                                   title="Delete"--}}
{{--                                                   onclick="if (confirm(&quot;Are you sure you want to delete ?&quot;)) { document.getElementById('deleteForm{{ $itema->id }}').submit(); } event.returnValue = false; return false;"><i--}}
{{--                                                        class="fa fa-trash"></i></a>--}}
                                                    <form method="POST" action="{{ route('option.option-item.destroy', $itema->id) }}">
                                                        @csrf
                                                        <input name="_method" type="hidden" value="DELETE">
                                                        <button type="submit" class="btn btn-danger btn-sm show_confirm" data-toggle="tooltip" title='Delete'><i class="fa fa-trash"></i></button>
                                                    </form>
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
                                        </div></div>
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
