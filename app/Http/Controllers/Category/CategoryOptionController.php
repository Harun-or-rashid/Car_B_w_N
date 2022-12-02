<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Option;
use App\Models\Item;
use App\Models\ProductPrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class CategoryOptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-read'])) {
            $categoryItem= Option::orderBy('name', 'ASC');
            if ($request->get('name')) {
                $categoryItem->where('name', 'LIKE', '%' . $request->get('name') . '%');
            }
//            if ($request->get('description')) {
//                $categoryItem->where('description', 'LIKE', '%' . $request->get('description') . '%');
//            }


            $categoryItem = $categoryItem->paginate(50);
//            $roles = Role::pluck('display_name', 'id')->all();
            return view('category.category-option.index', compact('categoryItem', ));
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

            return view('category.category-option.create');
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
//            $messages$slug_small=strtolower($request->name);
//            $slug = Input::get($slug);


            $input = $request->all();
            $input['slug']= Str::slug($request->name);



            $admin = Option::create($input);

//            if ($admin->role_id == 2) {
//                if ($request->get('permissions')) {
//                    $admin->permissions()->sync($request->get('permissions'));
//                }
//            }

            Session::flash('success', 'The Option  has been created');

            return redirect()->route('category.option.index');
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Option  $categoryOption
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $category = Option::findOrFail($id);
            $item=$category->item;
//            $optionItem=Option::with("item")->get();
//            $item=$optionItem->item;
//            dd($item);
//            dd($item);
//            $permissionGroups = AdminPermissionGroup::where('status', 1)->with('permissions')->get();
//            $display = 'none';
//            if (old('role_id') && old('role_id') > 1 || $admin->role_id > 1) {
//                $display = 'block';
//            }
//            $roles = Role::pluck('display_name', 'id')->all();
            return view('category.category-option.show', compact('category','item'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Option  $categoryOption
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $category = Option::findOrFail($id);
//            $permissionGroups = AdminPermissionGroup::where('status', 1)->with('permissions')->get();
//            $display = 'none';
//            if (old('role_id') && old('role_id') > 1 || $admin->role_id > 1) {
//                $display = 'block';
//            }
//            $roles = Role::pluck('display_name', 'id')->all();
            return view('category.category-option.edit', compact('category'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Option  $categoryOption
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
                'description' =>'required' ,

            ];

            $this->validate($request, $rules, $messages);

            $input = $request->all();
            if (!$request->has('status')) {
                $input['status'] = 0;
            }

//            $input['admin_id'] = Auth::guard('admin')->user()->id;

            $category = Option::findOrFail($id);
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
            Session::flash('success', 'The  Option has been updated');

            return redirect()->route('category.option.index');
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Option  $categoryOption
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-delete'])) {


            $category = Option::findOrFail($id);
            if ($category->category()->count()>0){
                Session::flash('warning', "Couldn't delete the option");

                return redirect()->route('category.option.index');
            }else{

                $category->delete();

                Session::flash('success', 'The  Option has been deleted');

                return redirect()->route('category.option.index');
            }

//                $admin->update([
//                    'admin_id' => Auth::guard('admin')->user()->id,
//                ]);

//                $admin->permissions()->sync([]);
//                $admin->syncRoles([]);



        } else {
            return view('error.admin-unauthorized');
        }
    }

    //Return items according to option
        public function getOptionList(Request $request) {

        $optionItems = Item::where('status', 1)->where('option_id', $request->option_id)->pluck('name', 'id')->all();
        $data = '<option value=""></option>';
        foreach ($optionItems as $key => $value) {
            $data .= '<option value="' . $key . '">' . $value . '</option>';
        }
        return $data;
    }
    public function getItemsList(Request $request) {
                    $id=$request->id;
                    $items = Item::where('status', 1)->whereNotIn('id', function($query) use($id){
                $query->select('item_id')->from('product_prices')->where('product_id', $id);
            })->pluck('name', 'id')->all();
//        $price=Item::all();
////        $prices=$price->priceswhere('status',1)->where('item_id',$request->id)->pluck('name', 'id')->all();
//        $prices=$price->itemPrice($request->id);
        $data = '<option value=""></option>';
        foreach ($items as $key => $value) {
            $data .= '<option value="' . $key . '">' . $value . '</option>';
        }
        return $data;
    }

    function getItemList(Request $request){
        $category = Item::all();
//        $item=$category->item;
//        $items = DB::table('option_items')->where(1,$request->id)->get();
        return response()->json($category);
    }
//    public function getOptionList(Request $request): ?JsonResponse
//    {
//        $response = array();
//        $search = '';
//        if ($request->has('term.term')) {
//            $search = $request->term['term'];
//        }
//        $data = new Option();
//        $data = $data->select('id', 'name');
//        if ($search != '') {
//            $data = $data->where('name', 'like', '%' . $search . '%');
//        }
//        $data = $data->limit(20);
//        $data = $data->orderby('name', 'asc');
//        $response= $data->get();
//
//        return response()->json($response);
//    }

}
