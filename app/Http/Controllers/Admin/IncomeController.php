<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Income;
use App\Models\IncomeType;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;

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
        $input = $request->all();
//            dd($input);


        $input['user_id'] = Auth::guard('admin')->user()->id;
        $income = Income::create($input);


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
