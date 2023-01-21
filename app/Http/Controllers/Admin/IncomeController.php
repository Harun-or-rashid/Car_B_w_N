<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Income;
use App\Models\IncomeType;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Intervention\Image\Facades\Image;

class IncomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-read'])) {
            $income = Income::orderBy('id', 'DESC');
            $type =  IncomeType::where('status', 1)->pluck('name', 'id')->all();
//            dd($users);

            if ($request->get('name')) {
                $income->where('name', 'LIKE', '%' . $request->get('name') . '%');
            }

            if ($request->get('email')) {
                $income->where('email', 'LIKE', '%' . $request->get('email') . '%');
            }

            if ($request->get('phone')) {
                $income->where('phone', 'LIKE', '%' . $request->get('phone') . '%');
            }
//            $users = User::orderBy('id', 'DESC');
//            dd($users);
            $income = $income->paginate(50);
            return view('incomes.index', compact('income','type'));
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
//        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
        $messages = [
            'inc_type.required' => 'The Income Type field is required',
            'amount.required' => 'The Income Amount field is required',
            'inc_date.required' => 'The Date field is required',
        ];

        $this->validate($request, [
            'income_type_id' => 'required',
            'amount' => 'required',
            'inc_date' => 'required',
        ], $messages);

        if ($request->hasFile('image')) {
            foreach ($request->file('image') as  $image) {

//                    $file = $request->file('image');

                $path = '\images\income';
                $dpath = '\images\income\150';

                $image_name = time() . rand(00, 99) . '.' . $image->getClientOriginalName();

                $resize_image = Image::make($image->getRealPath());
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
        $input = $request->all();
//        $input['slug'] = Str::slug($request->name);
        $input['user_id'] = Auth::guard('admin')->user()->id;
//dd($input);
        DB::beginTransaction();
        try {
            if ($request->image > 0) {
                foreach ($dbimg as  $image) {
                    $input['image'] =$image;

                    $income = Income::create($input);
                }
            }
            DB::commit();
        }catch (\Exception $exception){
            dd($exception);
            DB::rollback();
            Session::flash('warning', 'Something went wrong, Please try again');
            return redirect()->back()->withInput();
        }
//        Session::flash('success', 'Income has been added');
//        return redirect()->back();
////            dd($input);
//
//
//        $income = Income::create($input);


        Session::flash('success', 'The Income has been Generated');

        return redirect()->back();
//        } else {
//            return view('error.admin-unauthorized');
//        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function show(Income $income)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function edit(Income $income)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Income $income)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function destroy(Income $income)
    {
        //
    }
}
