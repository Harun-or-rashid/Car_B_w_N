@extends('layouts.admin')
@section('title', "Admin")
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
            <h1 class=" text-dark">Products</h1>



    <!-- /.content-header -->

    <!-- Main content -->

            <!-- Main row -->
                <div class="col-lg-12">
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <h3 class="card-title">Product List</h3>
                        </div>
                        {!! Form::open(['method'=>'GET', 'action'=>['Product\ProductController@index']]) !!}

                        <div class="card-body">
                            <div class="row">

                                <div class="col-md-3">
                                    <div class="form-group">
                                        {!! Form::label('name', 'Name') !!}
                                        {!! Form::text('name', request()->name, ['class'=>'form-control']) !!}
                                    </div>
                                </div>
{{--                                <div class="col-md-3">--}}
{{--                                    <div class="form-group">--}}
{{--                                        {!! Form::label('description', 'Description') !!}--}}
{{--                                        {!! Form::text('description', request()->email, ['class'=>'form-control']) !!}--}}
{{--                                    </div>--}}
{{--                                </div>--}}

{{--                                <div class="col-md-3">--}}
{{--                                    <div class="form-group">--}}

{{--                                        {!! Form::label('role_id', 'Role') !!}--}}
{{--                                        {!! Form::select('role_id', ['0'=>'All']+$roles, request()->role_id,--}}
{{--                                        ['class'=>'form-control multi-select', 'id'=>'role_id']) !!}--}}
{{--                                    </div>--}}
{{--                                </div>--}}

                                <!-- /.col -->
                                <button type="submit" class="btn btn-primary" style="margin: 32px -2px ;"> Filter </button>

                            </div>
                            <!-- /.row -->
                        </div>
                        {!! Form::close() !!}

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
                                <th class="text-center">Actions</th>
                                </thead>
                                <tbody>
                                @foreach ($products as $products)
                                    <tr>
                                        <td>{{ $products->id }}</td>
                                        <td>{{ $products->name }}</td>
                                        <td>{{ $products->slug }}</td>
                                        <td>{{ $products->description }}</td>
                                        <td class="text-center">{!! Helper::activeStatusLabel($products->status) !!}</td>
                                        <td>{{ $products->created_at->diffForHumans() }}</td>
                                        <td>{{ $products->updated_at->diffForHumans() }}</td>
                                        <td class="row text-center">
                                      <div style="margin-right: 5px">
                                          @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                      Auth::guard('admin')->user()->hasPermission('admin-admins-update'))
                                              <a class="btn btn-info btn-sm"
                                                 href="{{ route('product.product.show', $products->id) }}"
                                                 data-toggle="tooltip" title="Details"> <i
                                                      class="fas fa-eye"></i> Manage Products
                                              </a>
                                              <a class="btn btn-primary btn-sm"
                                                 href="{{route('product.product.edit', $products->id)}}" data-toggle="tooltip"
                                                 title="Edit"> <i class="fas fa-edit"></i>
                                              </a>

                                          @endif
                                      </div>

                                            @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                            Auth::guard('admin')->user()->hasPermission('admin-admins-delete'))
                                                    <form method="POST" action="{{ route('category.category-item.destroy', $products->id) }}">
                                                        @csrf
                                                        <input name="_method" type="hidden" value="DELETE">
                                                        <button type="submit" class="btn btn-danger btn-sm show_confirm" data-toggle="tooltip" title='Delete'>Delete</button>
                                                    </form>

{{--                                                <a href="#" class="btn btn-danger btn-sm show_confirm" data-toggle="tooltip"--}}
{{--                                                   title="Delete"--}}
{{--                                                   onclick=" { document.getElementById('deleteForm{{ $item->id }}').submit(); } event.returnValue = false; return false;"><i--}}
{{--                                                        class="fa fa-trash"></i></a>--}}

                                                {!! Form::open(['method'=>'DELETE',
                                                'action'=>['Category\CategoryItemController@destroy',
                                                $products->id], 'id'=>'deleteForm'.$products->id]) !!}
                                                {!! Form::close() !!}
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
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
            <!-- /.row (main row) -->
    <!-- /.content -->
        </div></div>
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
