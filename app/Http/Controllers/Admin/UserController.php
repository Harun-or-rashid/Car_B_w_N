<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminPermissionGroup;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;

class UserController extends Controller {
    public function __construct() {
        $this->middleware('auth:admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-read'])) {
            $users = User::orderBy('id', 'DESC');
//            dd($users);

            if ($request->get('name')) {
                $users->where('name', 'LIKE', '%' . $request->get('name') . '%');
            }

            if ($request->get('email')) {
                $users->where('email', 'LIKE', '%' . $request->get('email') . '%');
            }

            if ($request->get('phone')) {
                $users->where('phone', 'LIKE', '%' . $request->get('phone') . '%');
            }
//            $users = User::orderBy('id', 'DESC');
//            dd($users);
            $users = $users->paginate(50);
            return view('admin.users.index', compact('users'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request  $request) {
//        dd('Please create');
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $display = 'none';
            if (old('role_id') && old('role_id') > 1) {
                $display = 'block';
            }
            $permissionGroups = AdminPermissionGroup::where('status', 1)->with('permissions')->get();
            $roles = Role::pluck('display_name', 'id')->all();
            return view('admin.users.create', compact('permissionGroups', 'roles', 'display'));
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
//        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
            $messages = [
                'name.required' => 'The Name field is required',
                'email.required' => 'The Email field is required',
                'email.unique' => 'The Email already exists',
                'phone.required' => 'The Phone field is required',
                'phone.regex' => 'Invalid Phone number format.',
                'phone.unique' => 'The Phone already exists',
                'password.required' => 'The Password field is required',
                'password_confirmation.required' => 'The Confirm Password field is required',
            ];

            $this->validate($request, [
                'name' => 'required',
                'phone' => [
                    'required',
                    // Rule::unique('admins', 'phone')->whereNull('deleted_at'),
                ],
                'email' => [
                    'required',
                    Rule::unique('admins', 'email')->whereNull('deleted_at'),
                    'email',
                ],
                'password' => 'required|min:6|confirmed',
                'password_confirmation' => 'required|min:6',
            ], $messages);
            $input = $request->all();
//            dd($input);

            unset($input['password_confirmation']);

            $input['password'] = bcrypt($request->get('password'));
            $input['admin_id'] = Auth::guard('admin')->user()->id;
            $user = User::create($input);


            Session::flash('success', 'The User has been created');

            return redirect()->route('admin.users.index');
//        } else {
//            return view('error.admin-unauthorized');
//        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-read'])) {
            $user = User::findOrFail($id);
            return view('admin.users.show', compact('user'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-update'])) {
            $user = User::findOrFail($id);
            return view('admin.users.edit', compact('user'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-update'])) {
            $messages = [
                'name.required' => 'The Name field is required.',
                'name.min' => 'The Name field must be minimum 4 characters.',
                'mobile.required' => 'The Mobile number field is required.',
                'email.required' => 'The Email field is required.',
                'email.unique' => 'The Email already exists.',
            ];

            $this->validate($request, [
                'name' => 'required|min:4|max:191',
                'email' => [
                    'required',
                    Rule::unique('users')->ignore($id),
                    'email',
                ],
            ], $messages);

            $input = $request->all();
            if (!$request->has('status')) {
                $input['status'] = 0;
            }

            $user = User::findOrFail($id);
            $user->update($input);

            Session::flash('success', 'The User has been updated');

            return redirect()->route('admin.users.index');
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }
}
