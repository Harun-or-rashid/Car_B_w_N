<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminPermissionGroup;
use App\Models\Message;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Intervention\Image\Facades\Image as Images;
use Validator;


class UserController extends Controller {


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboard()
    {
        if (Auth::guard('web')->user() ) {
            return view('user.dashboard');
        } else {
            return redirect()->route('login');
        }
    }
    public function profile()
    {
        $id= Auth::guard('web')->user()->id;
        $user = DB::table('users')->find($id);
//        dd($user);
        return view('user.profile',compact('user'));
    }
    public function index1(Request $request)
    {

        $users=DB::table('users')->get();
//            $user=User::all();
//            var_dump(User::all()->pluck('name'));
//            dd($user);
//            $product= Product::all();
//            $images=$product->productImage($product->id);
//            dd($images);
        if ($request->get('name')) {
            $users->where('name', 'LIKE', '%' . $request->get('name') . '%');
        }

//            $messages = $users->paginate(50);
//            $roles = Role::pluck('display_name', 'id')->all();
        return view('admin.users.index', compact('users', ));
//        } else {
//            return view('error.admin-unauthorized');
//        }
    }

    public function index(Request $request) {
//        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-read'])) {
        $users=DB::table('users')->get();
//            dd($users[0]->name);

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
//            $users = $users->paginate(50);
        return view('admin.users.index', compact('users'));
//        } else {
//            return view('error.admin-unauthorized');
//        }
    }

    public function indexs(Request $request) {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-read'])) {
            $users = User::whereStatus(0)->pluck('name');

//dd($users);
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
//            $users = $users->paginate(50);
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
//        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-admins-create'])) {
        $display = 'none';
        if (old('role_id') && old('role_id') > 1) {
            $display = 'block';
        }
        $permissionGroups = AdminPermissionGroup::where('status', 1)->with('permissions')->get();
        $roles = Role::pluck('display_name', 'id')->all();
        return view('admin.users.create', compact('permissionGroups', 'roles', 'display'));
//        } else {
//            return view('error.admin-unauthorized');
//        }
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
//                Rule::unique('admins', 'email')->whereNull('deleted_at'),
                'email',
            ],
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
        ], $messages);
        $input = $request->all();
//            dd($input);

        unset($input['password_confirmation']);

        $input['password'] = bcrypt($request->get('password'));
//        $input['admin_id'] =Auth::guard('admin')->user()->id;
        $user = User::create($input);


        Session::flash('success', 'The User has been created');

        return redirect()->route('admin.users.index');
//        } else {
//            return view('error.admin-unauthorized');
//        }
    }
    public function register(Request $request) {
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
//                Rule::unique('admins', 'email')->whereNull('deleted_at'),
                'email',
            ],
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
        ], $messages);
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as  $image) {

//                    $file = $request->file('image');

                $path = '\images\news';
                $dpath = '\images\news\150';

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
        $input = $request->all();
//            dd($input);

        unset($input['password_confirmation']);

        $input['password'] = bcrypt($request->get('password'));
//        $input['admin_id'] =Auth::guard('admin')->user()->id;
//        $input = $request->all();

        DB::beginTransaction();
        try {
            if ($request->image > 0) {
                foreach ($dbimg as  $image) {
                    $input['image'] =$image;

                    $message = User::create($input);
                }
            }
            DB::commit();
        }catch (\Exception $exception){
            dd($exception);
            DB::rollback();
            Session::flash('warning', 'Something went wrong, Please try again');
            return redirect()->back()->withInput();
        }
        Session::flash('success', 'Registration Successful');
        return redirect()->back();
//            $input = $request->all();
//            $input['slug']= Str::slug($request->name);
//            $admin = Product::create($input);

        Session::flash('success', 'Member Registration Success');
        return redirect()->back();



        return redirect()->back();
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
//        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-read'])) {
        $user = User::findOrFail($id);
        return view('admin.users.show', compact('user'));
//        } else {
//            return view('error.admin-unauthorized');
//        }
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

    public function changePassword() {
        return view('user.changePassword');
    }
    public function changePasswordStore(Request $request,$id) {
        $messages = [
            'old_password.required' => 'Current password is required',
            'old_password.old_password' => 'Current password is wrong',
            'password.required' => 'New Password is required',
            'password.confirmed' => 'New Passwords does not match',
            'password.min' => 'New Password must be at least 6 char long',
            'password.max' => 'New Password can be maximum 200 char long',
        ];

//        $this->validate($request, [
//            'old_password' => 'required|old_password:'.Auth::user()->password,
//            'password' => 'required|confirmed|min:6|max:255',
//        ], $messages);
        if (!(Hash::check($request->old_password, Auth::user()->password))) {
            return redirect()->back()->with("error","your current password does not match with the password you provided. please try again.");
        }
        $input = $request->all();
//        if (!$request->has('status')) {
//            $input['status'] = 0;
//        }

//            $input['admin_id'] = Auth::guard('admin')->user()->id;
//dd($id);
        $product = User::findOrFail(2);
        $input['password'] = Hash::make($request->password);
        dd($product);
        $product->update($input);
//        $input = $request->only('password');
//        $input['password'] = Hash::make($request->get('password'));

//        $users[]= Auth::guard('web')->user()->id;
//        dd($users);

//        $users->update();

        Session::flash('success', 'Your password has been changed');

        return redirect()->route('changePassword');
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

    public function extrat($id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-update'])) {

//            content will go here

            return redirect()->route('admin.users.index');
        } else {
            return view('error.admin-unauthorized');
        }
    }

    public function approveMembership($id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-update'])) {


//            content will go here
            $user = DB::table('users')->find($id);
            $update = DB::table('users') ->where('id', $id)->update( [ 'member_type' =>1, 'status' =>1 ]);
            Session::flash('success', 'The Membership has been Approved');

            return redirect()->route('admin.users.index');
        } else {
            return view('error.admin-unauthorized');
        }
    }
    public function rejectMembership($id)
    {
        if (Auth::guard('admin')->user()->hasRole('admin') || Auth::guard('admin')->user()->hasPermission(['admin-users-update'])) {
//            content will go here
            $user = DB::table('users')->find($id);
            $update = DB::table('users') ->where('id', $id)->update( [ 'member_type' =>0, 'status' =>0 ]);
            Session::flash('error', 'The Membership has been canceled');

            return redirect()->route('admin.users.index');
        } else {
            return view('error.admin-unauthorized');
        }
    }


}
