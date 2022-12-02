<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin;
use App\Models\AdminPermissionGroup;
use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class AdminRoleController extends Controller {
    public function __construct() {
        $this->middleware('auth:admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-roles-read'])) {
            $roles = Role::orderBy('id', 'ASC');

            if ($request->get('name')) {
                $roles->where('display_name', 'LIKE', '%' . $request->get('name') . '%');
            }

            $roles = $roles->paginate(50);
            $assigned_role = Admin::pluck('role_id', 'role_id')->all();
            return view('admin.roles.index', compact('roles','assigned_role'));
        } else {
            return view('error.admin-unauthorized');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-roles-create'])) {
            $permissionGroups = AdminPermissionGroup::where('status', 1)->with('permissions')->get();
            return view('admin.roles.create', compact('permissionGroups'));
        } else {
            return view('error.admin-unauthorised');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-roles-create'])) {
            $messages = [
                'display_name.required' => 'Name field is required',
                'display_name.unique' => 'Name field is already exists',
            ];

            $this->validate($request, [
                'display_name' => [
                    'required',
                    Rule::unique('roles'),
                ],
                'description' => 'required',
                'permissions' => 'required',
            ], $messages);

            $input = $request->all();

            $input['name'] = Str::slug($request->display_name);

            $role = Role::create($input);

            if ($request->get('permissions')) {
                $role->permissions()->sync($request->get('permissions'));
            }

            Session::flash('success', 'The Role has been created');
            return redirect()->route('admin.roles.index');
        } else {
            return view('error.admin-unauthorised');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-roles-update'])) {
            $role = Role::findOrFail($id);
            $permissionGroups = AdminPermissionGroup::where('status', 1)->with('permissions')->get();
            return view('admin.roles.edit', compact('role', 'permissionGroups'));
        } else {
            return view('error.admin-unauthorised');
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
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-roles-update'])) {
            $messages = [
                'display_name.required' => 'Name field is required',
                'display_name.unique' => 'Name field is already exists',
            ];

            $this->validate($request, [
                'display_name' => [
                    'required',
                    Rule::unique('roles')->ignore($id),
                ],
                'description' => 'required',
                'permissions' => 'required',
            ], $messages);

            $input = $request->all();

            $input['name'] = Str::slug($request->display_name);
            $role = Role::findOrFail($id);
            $role->update($input);

            if ($request->get('permissions')) {
                $role->permissions()->sync($request->get('permissions'));
            }

            Session::flash('success', 'The Role has been updated');
            return redirect()->route('admin.roles.index');
        } else {
            return view('error.admin-unauthorised');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-delete'])) {
            $role = Role::findOrfail($id);
            // Role existence check in Admin model
            $assigned_role = Admin::pluck('role_id', 'role_id')->all();
            if ($id == 1 || in_array($id, $assigned_role)) {
                Session::flash('warning', 'This Role already assigned an user');
                return redirect()->back();
            }

            $role->permissions()->sync([]);
            $role->delete();

            Session::flash('success', 'The Role has been deleted');

            return redirect()->route('admin.roles.index');

        } else {
            return view('error.admin-unauthorized');
        }
    }
}
