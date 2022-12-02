<?php

namespace App\Http\Controllers\Product;
//use Intervention\Image;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\CategoryOptionItem;
use App\Models\Item;
use App\Models\Option;
use App\Models\OptionCategory;
use App\Models\Image;
use App\Models\Product;
//use Illuminate\Http\File;
use App\Models\ProductPrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image as Images;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-read'])) {
            $products= Product::orderBy('name', 'ASC');
//            $product= Product::all();
//            $images=$product->productImage($product->id);
//            dd($images);
            if ($request->get('name')) {
                $products->where('name', 'LIKE', '%' . $request->get('name') . '%');
            }

            $products = $products->paginate(50);
//            $roles = Role::pluck('display_name', 'id')->all();
            return view('products.index', compact('products', ));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $display = 'none';

            $categories = Category::where('status', 1)->pluck('name', 'id')->all();

            return view('products.create',compact('categories'));
        } else {
            return view('error.admin-unauthorized');
        }    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $messages = [

                'name.required' => 'The Name field is required',
                'description.required' => 'The Description field is required',
            ];
            $data = $request->all();

            $this->validate($request, [
                'name' => 'required',
                'image' => 'required',
                'base_price' => 'required',
            ], $messages);

//                $product=new Product();


            if ($request->hasFile('image')) {
                foreach ($request->file('image') as  $image) {

//                    $file = $request->file('image');

                    $path = '\images\products';
                    $dpath = '\images\products\150';

                    $image_name = time() . rand(00, 99) . '.' . $image->getClientOriginalName();

                    $resize_image = Images::make($image->getRealPath());
                    $resize_image->resize(150, 150, function ($constraint) {
                        $constraint->aspectRatio();
                    });

                    $path1 = Storage::disk('public')->put($path . '\\' . $image_name, File::get($image));
                    $path2 = Storage::disk('public')->put($dpath . '\\' . $image_name, (string)$resize_image->encode());
                    $dbimg[] = $image_name;
                }
            } else {
                $dbimg = '';
            }
//            dd($dbimg);
//            $product->images = $dbimg;
//            $product->image = $dbimg;
            $input = $request->except('image');
            $input['slug'] = Str::slug($request->name);
//dd($input);
            DB::beginTransaction();
            try {
                $product = Product::create($input);
//dd($product);
                if ($request->image > 0) {
                    foreach ($dbimg as  $image) {
                        Image::create([
                            'product_id' => $product->id,
                            'image' => $image,
                        ]);
                    }
                }
                DB::commit();
            }catch (\Exception $exception){
                dd($exception);
                DB::rollback();
                Session::flash('warning', 'Something went wrong, Please try again');
                return redirect()->back()->withInput();
            }
            Session::flash('success', 'Product has been added');
            return redirect()->back();
//            $input = $request->all();
//            $input['slug']= Str::slug($request->name);
//            $admin = Product::create($input);

            Session::flash('success', 'The Product has been created');
            return redirect()->back();
        } else {
            return view('error.admin-unauthorized');
        }




    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $product = Product::findOrFail($id);
            $images=$product->productImage($id);
            $cat_id=$product->category_id;
            $pro_id=$product->id;

            $productPrice=ProductPrice::find($pro_id);
            $itemId=$productPrice->item_id??'';
            $options = Option::where('status', 1)->whereIn('id', function($query) use($cat_id){
                $query->select('option_id')->from('option_categories')->where('category_id', $cat_id);
            })->pluck('name', 'id')->all();
            $item=ProductPrice::find($pro_id)??'';
            if ($product->product_controller){
                         $prices=$item->prices($id);

            }else{
                $prices=[];
            }

//        dd($prices->name);
//            $items[] = Item::where('status', 1)->whereNotIn('id', function($query) use($id){
//                $query->select('item_id')->from('product_prices')->where('product_id', $id);
//            })->pluck('name', 'id')->all();
            $items[] = Item::where('status', 1)->whereNotIn('id', function($query) use($itemId){
                $query->select('item_id')->from('product_prices')->where('item_id', $itemId);
            })->pluck('name', 'id')->all();
//            dd($items);

//            $items=[];


            return view('products.show', compact('items','options','product','images','prices'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    public function priceList(Request $request)
    {
        $items[] = Item::where('status', 1)->whereNotIn('id', function($query) use($id){
            $query->select('item_id')->from('product_prices')->where('product_id', $id);
        })->pluck('name', 'id')->all();        $data = '<option value=""></option>';
        foreach ($items as $key => $value) {
            $data .= '<option value="' . $key . '">' . $value . '</option>';
        }
        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $product = Product::findOrFail($id);
            $categories = Category::where('status', 1)->pluck('name', 'id')->all();

            return view('products.edit', compact('product','categories'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
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

            $product = Product::findOrFail($id);
            $input['slug']= Str::slug($request->slug);

            $product->update($input);



            Session::flash('success', 'The Product  has been updated');

            return redirect()->route('product.product.index');
        } else {
            return view('error.admin-unauthorized');
        }
    }
    public function updateaa(Request $request, $id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $messages = [

                'name.required' => 'The Name field is required',
                'description.required' => 'The Description field is required',
            ];
            $data = $request->all();

            $this->validate($request, [
                'name' => 'required',
                'image' => 'required',
                'base_price' => 'required',
            ], $messages);


            $product = Product::findOrFail($id);
            $image = Image::findOrFail($id);
            $images=$product->productImage($id);

            if ($request->hasFile('image')) {
                foreach ($request->file('image') as  $image) {


                    $path = '\images\products';
                    $dpath = '\images\products\150';
                    if($image->image != ''  && $image->$image != null){
                        $file_old = $path.$image->file;
                        unlink($file_old);
                    }
                    $image_name = time() . rand(00, 99) . '.' . $image->getClientOriginalName();

                    $resize_image = Images::make($image->getRealPath());
                    $resize_image->resize(150, 150, function ($constraint) {
                        $constraint->aspectRatio();
                    });

                    $path1 = Storage::disk('public')->put($path . '\\' . $image_name, File::get($image));
                    $path2 = Storage::disk('public')->put($dpath . '\\' . $image_name, (string)$resize_image->encode());
                    $dbimg[] = $image_name;
                }
            } else {
                $dbimg = '';
            }

            $input = $request->except('image');
            $input['slug'] = Str::slug($request->name);

            DB::beginTransaction();
            try {
                $product =$product->update($input);
                if ($request->image > 0) {
                    foreach ((array) $dbimg as  $image) {
                        $image->save([
                            'product_id' => $product->id,
                            'image' => $image,
                        ]);
                    }
                }
                DB::commit();
            }catch (\Exception $exception){
                dd($exception);
                DB::rollback();
                Session::flash('warning', 'Something went wrong, Please try again');
                return redirect()->back()->withInput();
            }
            Session::flash('success', 'Product has been added');
            return redirect()->back();

            Session::flash('success', 'The Product has been created');
            return redirect()->back();
        } else {
            return view('error.admin-unauthorized');
    }
    }
//add options as price controller
    public function addPriceController(Request $request,$id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $messages = [

                'option_id.required' => 'The Price Controller Option field is required',
            ];
            $this->validate($request, [
                'option_id' => 'required',

            ], $messages);

            $product = Product::findOrFail($id);
            $input['price_controller']= $request->option_id;

            $product->update($input);

            Session::flash('success', 'The price controller has been created');

            return redirect()->back();
        } else {
            return view('error.admin-unauthorized');
        }

    }
// add Item's price here
    public function addPrice(Request $request,$id,$optId)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $messages = [

                'item_id.required' => 'The Item field is required',
                'price.required' => 'The Price   field is required',
            ];
            $this->validate($request, [
                'item_id' => 'required',
                'price' => 'required',

            ], $messages);


            $input = $request->all();
            $input['product_id']= $request->id;
            $input['status']= 1;
            $input['option_id']= $optId;

            $price = ProductPrice::create($input);

            Session::flash('success', 'The price  has been created');

            return redirect()->back();
        } else {
            return view('error.admin-unauthorized');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function changeController($id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {


            $prices = ProductPrice::findOrFail($id);

//            $input = $request->all();
//            $input['product_id']= $request->id;
            $input['price_controller']= 0;


            $price = $prices->update($input);


            Session::flash('success', 'The Product  has been deleted');

            return redirect()->back();

        } else {
            return view('error.admin-unauthorized');
        }
    }

    public function destroy($id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-delete'])) {


            $category = Product::findOrFail($id);


            $category->delete();

            Session::flash('success', 'The Product  has been deleted');

            return redirect()->route('category.category-item.index');

        } else {
            return view('error.admin-unauthorized');
        }
    }
}
