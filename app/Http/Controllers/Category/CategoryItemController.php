<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\AdminPermissionGroup;
use App\Models\Category;
use App\Models\Option;
use App\Models\CategoryOptionItem;
use App\Models\Item;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class CategoryItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-read'])) {
            $categoryItem= Category::orderBy('name', 'ASC');
            if ($request->get('name')) {
                $categoryItem->where('name', 'LIKE', '%' . $request->get('name') . '%');
            }

            $categoryItem = $categoryItem->paginate(50);
//            $roles = Role::pluck('display_name', 'id')->all();
            return view('category.category-item.index', compact('categoryItem', ));
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

            return view('category.category-item.create');
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
            $data = $request->all();

            $this->validate($request, [
                'name' => 'required|unique:categories,name',
//                'name' => ['required',Rule::unique('categories')->ignore($data['name'])->whereNotNull('deleted_at')]
//                'description' => 'required',
            ], $messages);
//            $messages$slug_small=strtolower($request->name);
//            $slug = Input::get($slug);


            $input = $request->all();
           $input['slug']= Str::slug($request->name);


            $admin = Category::create($input);

//            if ($admin->role_id == 2) {
//                if ($request->get('permissions')) {
//                    $admin->permissions()->sync($request->get('permissions'));
//                }
//            }

            Session::flash('success', 'The Category has been created');

            return redirect()->back();
        } else {
            return view('error.admin-unauthorized');
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $categoryItem
     * @return \Illuminate\Http\Response
     */
    public function show($id) {

        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $category = Category::findOrFail($id);
            $options = Option::where('status', 1)->whereNotIn('id', function($query) use($id){
                $query->select('option_id')->from('option_categories')->where('category_id', $id);
            })->pluck('name', 'id')->all();


            $optionItems=CategoryOptionItem::where('category_id',$id)->get()->groupBy('option_id');

            $items=[];
            if(old('option_id')){
                $items = Item::where('status', 1)->where('option_id', old('option_id'))->pluck('name', 'id')->all();
            }

            return view('category.category-item.show', compact('category','options', 'items','optionItems'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $categoryItem
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $category = Category::findOrFail($id);
//            $permissionGroups = AdminPermissionGroup::where('status', 1)->with('permissions')->get();
//            $display = 'none';
//            if (old('role_id') && old('role_id') > 1 || $admin->role_id > 1) {
//                $display = 'block';
//            }
//            $roles = Role::pluck('display_name', 'id')->all();
            return view('category.category-item.edit', compact('category'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $categoryItem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $messages = [
                'name.required' => 'The Name field is required',
//                'description.required' => 'The Description field is required',
            ];

            $rules = [
                'name' => 'required',
                'description' =>'required' ,

            ];

            $this->validate($request, $rules, $messages);

            $input = $request->all();
            if (!$request->has('status')) {
                $input['status'] = 0;
            }

//            $input['admin_id'] = Auth::guard('admin')->user()->id;

            $category = Category::findOrFail($id);
            $input['slug']= Str::slug($request->slug);

            $category->update($input);

//            if ($category->role_id == 2) {
//                if ($request->get('permissions')) {
//                    $category->permissions()->sync($request->get('permissions'));
//                } else {
//                    $category->permissions()->sync([]);
//                }
//            } else {
//                $category->permissions()->sync([]);
//            }
//
//            $category->syncRoles([$input['role_id']]);
//
            Session::flash('success', 'The Category  has been updated');

            return redirect()->route('category.category-item.index');
        } else {
            return view('error.admin-unauthorized');
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $categoryItem
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-delete'])) {


                $category = Category::findOrFail($id);
//                $admin->update([
//                    'admin_id' => Auth::guard('admin')->user()->id,
//                ]);

//                $admin->permissions()->sync([]);
//                $admin->syncRoles([]);

                $category->delete();

                Session::flash('success', 'The Category  has been deleted');

                return redirect()->route('category.category-item.index');

        } else {
            return view('error.admin-unauthorized');
        }
    }

}
