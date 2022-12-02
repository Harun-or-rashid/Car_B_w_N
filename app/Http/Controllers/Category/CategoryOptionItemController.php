<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Item;
use App\Models\Option;
use App\Models\CategoryOptionItem;
use App\Models\OptionCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class CategoryOptionItemController extends Controller
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
    public function store(Request $request, $catId)
    {
//        dd($request);
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $messages = [

                'option_id.required' => 'The Option field is required',
                'item.required' => 'The Item field is required',
            ];

            $this->validate($request, [
                'option_id' => 'required',
                'items' => 'required|array',
            ], $messages);

            $input = $request->except('items');
            $input['category_id'] = $catId;
            $input['status'] = 1;
//            dd($input);

            DB::beginTransaction();
            try {
                $optionCategory = OptionCategory::create($input);

                if ($request->items && count($request->items) > 0) {
                    foreach ($request->items as $key => $item_id) {
                        CategoryOptionItem::create([
                            'option_category_id' => $optionCategory->id,
                            'category_id' => $catId,
                            'option_id' => $request->option_id,
                            'item_id' => $item_id,
                            'status' => 1
                        ]);
                    }
                }

                DB::commit();
            } catch (\Exception $exception) {
//                dd($exception);
                DB::rollback();
                Session::flash('warning', 'Something went wrong, Please try again');
                return redirect()->back()->withInput();
            }

            Session::flash('success', 'The Option and Item has been added');
            return redirect()->back();

        }else {
            return view('error.admin-unauthorized');
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CategoryOptionItem  $categoryOptionItem
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryOptionItem $categoryOptionItem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CategoryOptionItem  $categoryOptionItem
     * @return \Illuminate\Http\Response
     */
    public function edit($catId, $id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $optionCategory = OptionCategory::findOrFail($id);
            $options = Option::where('id', $optionCategory->option_id)->pluck('name', 'id')->all();
            $items = Item::where('status', 1)->where('option_id', $optionCategory->option_id)->pluck('name', 'id')->all();
            $selectedItems = CategoryOptionItem::where('option_category_id', $id)->pluck('item_id', 'item_id')->all();

            return view('items.edit', compact('optionCategory','options','items', 'selectedItems'));
        } else {
            return view('error.admin-unauthorized');
        }    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoryOptionItem  $categoryOptionItem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $catId, $id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-update'])) {
            $optionCategory = OptionCategory::findOrFail($id);
            $messages = [
                'option_id.required' => 'The Option field is required',
                'items.required' => 'The Item field is required',
            ];

            $this->validate($request, [
                'items' => 'required|array',
            ], $messages);

            DB::beginTransaction();
            try {
                CategoryOptionItem::where('option_category_id', $id)->whereNotIn('item_id', $request->items)->delete();

                if ($request->items && count($request->items) > 0) {
                    foreach ($request->items as $key => $item_id) {
                        CategoryOptionItem::firstOrCreate([
                            'option_category_id' => $optionCategory->id,
                            'item_id' => $item_id,
                        ],[
                            'option_category_id' => $optionCategory->id,
                            'category_id' => $catId,
                            'option_id' => $optionCategory->option_id,
                            'item_id' => $item_id,
                            'status' => 1
                        ]);
                    }
                }

                DB::commit();
            } catch (\Exception $exception) {
//                dd($exception);
                DB::rollback();
                Session::flash('warning', 'Something went wrong, Please try again');
                return redirect()->back();
            }

            Session::flash('success', 'The Option and Item has been updated');
            return redirect()->route('category.category-item.show', $catId);

        }else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryOptionItem  $categoryOptionItem
     * @return \Illuminate\Http\Response
     */
    public function destroy($catId, $id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-delete'])) {

            $optionCategory = OptionCategory::findOrFail($id);

            DB::beginTransaction();
            try {
                CategoryOptionItem::where('option_category_id', $id)->delete();
                $optionCategory->delete();

                DB::commit();
            } catch (\Exception $exception) {
//                dd($exception);
                DB::rollback();
                Session::flash('warning', 'Something went wrong, Please try again');
                return redirect()->back();
            }

            Session::flash('success', 'The Option and Item has been deleted');
            return redirect()->back();

        } else {
            return view('error.admin-unauthorized');
        }
    }
}
