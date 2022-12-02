<?php

namespace App\Http\Controllers\Option;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\CategoryOptionItem;
use App\Models\Option;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class OptionItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-read'])) {
            $categoryItem= Item::orderBy('name', 'ASC');
            if ($request->get('name')) {
                $categoryItem->where('name', 'LIKE', '%' . $request->get('name') . '%');
            }


            $categoryItem = $categoryItem->paginate(50);
//            $roles = Role::pluck('display_name', 'id')->all();
            return view('options.index', compact('categoryItem', ));
        } else {
            return view('error.admin-unauthorized');
        }
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request) {

        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $display = 'none';
            if (old('role_id') && old('role_id') > 1) {
                $display = 'block';
            }

            return view('options.create');
        } else {
            return view('error.admin-unauthorized');
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $messages = [

                'name.required' => 'The Name field is required',
                'description.required' => 'The Description field is required',
            ];

            $this->validate($request, [
                'name' => 'required',
//                'description' => 'required',
            ], $messages);

            $input = $request->all();
            $input['slug']= Str::slug($request->name);

//            dd($request);
            $admin = Item::create($input);

//            if ($admin->role_id == 2) {
//                if ($request->get('permissions')) {
//                    $admin->permissions()->sync($request->get('permissions'));
//                }
//            }

            Session::flash('success', 'The  Option Item has been created');

            return redirect()->back();
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Item  $optionItem
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $category = Item::findOrFail($id);
//            $permissionGroups = AdminPermissionGroup::where('status', 1)->with('permissions')->get();
//            $display = 'none';
//            if (old('role_id') && old('role_id') > 1 || $admin->role_id > 1) {
//                $display = 'block';
//            }
//            $roles = Role::pluck('display_name', 'id')->all();
            return view('category.edit', compact('category'));
        } else {
            return view('error.admin-unauthorized');
        }
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item  $optionItem
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $category = Item::findOrFail($id);
//            $category = CategoryOptionItem::findOrFail($id);
            $options = Option::where('status', 1)->pluck('name', 'id')->all();
//            $categoryO = CategoryOptionItem::findOrFail($id);
//            $item=$categoryO->categoryOptionItems($id);
            $optionItems=CategoryOptionItem::where('category_id',$id)->get()->groupBy('option_id');

            $items=[];
            if(old('option_id')){
                $items = Item::where('status', 1)->where('option_id', old('option_id'))->pluck('name', 'id')->all();
            }

            return view('category.category-option.optionItemEdit', compact('category','options','items'));
        } else {
            return view('error.admin-unauthorized');
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Item  $optionItem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $messages = [
                'name.required' => 'The Name field is required',
                'description.required' => 'The Description field is required',
            ];

            $rules = [
                'name' => 'required',
//                'description' =>'required' ,

            ];

            $this->validate($request, $rules, $messages);

            $input = $request->all();
            if (!$request->has('status')) {
                $input['status'] = 0;
            }


            $category = Item::findOrFail($id);
            $input['slug']= Str::slug($request->slug);
            $category->update($input);
            Session::flash('success', 'The Item has been updated');

            return redirect()->back();
        } else {
            return view('error.admin-unauthorized');
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $optionItem
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-delete'])) {


            $category = Item::findOrFail($id);
//                $admin->update([
//                    'admin_id' => Auth::guard('admin')->user()->id,
//                ]);

//                $admin->permissions()->sync([]);
//                $admin->syncRoles([]);

            $category->delete();

            Session::flash('success', 'The Option Item has been deleted');

            return redirect()->back();

        } else {
            return view('error.admin-unauthorized');
        }
    }

}
