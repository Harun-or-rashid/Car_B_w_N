<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\CategoryOptionItem;
use App\Models\Item;
use App\Models\Option;
use App\Models\OptionCategory;
use App\Models\Product;
use App\Models\ProductPrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class ProductPriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductPrice  $productPrice
     * @return \Illuminate\Http\Response
     */
    public function show(ProductPrice $productPrice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductPrice  $productPrice
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $option = ProductPrice::findOrFail($id);
            $options = Item::where('id', $option->item_id)->pluck('name', 'id')->all();
            $items = Item::where('status', 1)->where('option_id', $option->option_id)->pluck('name', 'id')->all();
            $selectedItems = CategoryOptionItem::where('option_category_id', $id)->pluck('item_id', 'item_id')->all();

            return view('item-price.edit', compact('option','options','items', 'selectedItems'));
        } else {
            return view('error.admin-unauthorized');
        }    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductPrice  $productPrice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
         $price=ProductPrice::find($id);
            $messages = [

                'price.required' => 'The Price   field is required',
            ];
            $this->validate($request, [
                'price' => 'required',

            ], $messages);


            $input = $request->all();

            $prices = $price->update($input);

            Session::flash('success', 'The price  has been updated');

            return redirect()->back();
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductPrice  $productPrice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-delete'])) {


            $prices = ProductPrice::findOrFail($id);

//            $input = $request->all();
//            $input['product_id']= $request->id;
            $input['status']= 0;


            $price = $prices->update($input);
//            $price->delete();

            Session::flash('success', 'The Price  has been deleted');

            return redirect()->back();

        } else {
            return view('error.admin-unauthorized');
        }
    }
}
