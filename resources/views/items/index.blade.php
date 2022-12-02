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
            <div class="row mb-2">
                <div class="col-md-6">
                    <h1 class="m-0 text-dark">Option Item</h1>
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
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <h3 class="card-title">Category List</h3>
                        </div>
                        {!! Form::open(['method'=>'GET', 'action'=>['Category\CategoryItemController@index']]) !!}

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

                        <div class="card-body table-responsive">
                            <table class="table table-bordered table-hover">
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
                                    @foreach ($categoryItem as $item)
                                    <tr>
                                        <td>{{ $item->id }}</td>
                                        <td>{{ $item->name }}</td>
                                        <td>{{ $item->slug }}</td>
                                        <td>{{ $item->description }}</td>
                                        <td class="text-center">{!! Helper::activeStatusLabel($item->status) !!}</td>
                                        <td>{{ $item->created_at->diffForHumans() }}</td>
                                        <td>{{ $item->updated_at->diffForHumans() }}</td>
                                        <td class="text-center">
                                            @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                            Auth::guard('admin')->user()->hasPermission('admin-admins-update'))
                                                <a class="btn btn-info btn-sm"
                                                   href="{{ route('category.category-item.show', $item->id) }}"
                                                   data-toggle="tooltip" title="Details"> <i
                                                        class="fas fa-info"></i>
                                                </a>
                                                <a class="btn btn-primary btn-sm"
                                                    href="{{route('category.category-item.edit', $item->id)}}" data-toggle="tooltip"
                                                    title="Edit"> <i class="fas fa-edit"></i>
                                                </a>

                                            @endif

                                            @if(Auth::guard('admin')->user()->hasRole('admin') ||
                                            Auth::guard('admin')->user()->hasPermission('admin-admins-delete'))
                                            <a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                                title="Delete"
                                                onclick="if (confirm(&quot;Are you sure you want to delete ?&quot;)) { document.getElementById('deleteForm{{ $item->id }}').submit(); } event.returnValue = false; return false;"><i
                                                    class="fa fa-trash"></i></a>

                                            {!! Form::open(['method'=>'DELETE',
                                            'action'=>['Category\CategoryItemController@destroy',
                                            $item->id], 'id'=>'deleteForm'.$item->id]) !!}
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
