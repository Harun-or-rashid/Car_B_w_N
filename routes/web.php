<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\AdminPermissionGroupController;
use App\Http\Controllers\Admin\ResetPasswordController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\Category\CategoryItemController;
use App\Http\Controllers\Category\CategoryOptionController;
use App\Http\Controllers\Category\CategoryOptionItemController;
use App\Http\Controllers\Option\OptionItemController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Product\ProductPriceController;
use App\Http\Controllers\User\ForgotPasswordController;
use App\Http\Controllers\User\RegisterController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\User\UserLoginController;
use App\Models\Item;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');

//User/Parent panel
//Route::domain(env('APP_DOMAIN_URL'))->group(function () {
Route::group([
    'namespace' => 'User',
    'prefix' => 'users',
], function () {
//        Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');

    Route::get('login', [UserLoginController::class,'showLogin'])->name('login');
    Route::post('login', [UserLoginController::class,'login'])->name('login');

    Route::get('register', [RegisterController::class,'showRegistrationForm'])->name('register');
    Route::post('register', [RegisterController::class,'register'])->name('register');

    Route::post('logout', [UserLoginController::class,'logout'])->name('logout');
    //Forget Password
    Route::get('password/reset', [ForgotPasswordController::class,'showLinkRequestForm'])->name('password.forgot');
    Route::post('password/email', [ForgotPasswordController::class,'sendResetLinkEmail'])->name('password.email');
    Route::post('password/reset', [\App\Http\Controllers\User\ResetPasswordController::class,'reset']);
    Route::get('password/reset/{token}', [\App\Http\Controllers\User\ResetPasswordController::class,'showResetForm'])->name('password.reset');
    //User Dashboard
    Route::get('/dashboard', [UserController::class,'dashboard'])->name('dashboard');
    //Change Password
    Route::get('change-password', [UserController::class,'changePassword'])->name('changePassword');
    Route::post('change-password', [UserController::class,'changePasswordStore']);
    //User Info
    Route::get('profile', [UserController::class,'profile'])->name('profile');
    Route::get('edit-profile', [UserController::class,'editProfile'])->name('editProfile');
    Route::patch('edit-profile/{id}', [UserController::class,'editProfileStore']);

//    Route::get('/', function () {
//        return view('welcome');
//    });
});

//Admin Panel
// Route::domain(env('ADMIN_PANEL_SUB_DOMAIN', 'admin') . '.' . env('APP_DOMAIN_URL'))->group(callback: function () {
    Route::any('/', function () {
        return redirect('/dashboard');
    });
//    Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');
//    Route::get('/{any}', [AdminController::class,'dashboard'])->where('any', '.*');
    Route::get('/home', function () {
        return redirect('/dashboard');
    });

    Route::group([
        'namespace' => 'Admin',
        'as' => 'admin.',
    ], function () {
        //Reset Password
        Route::get('password/reset', [\App\Http\Controllers\Admin\ForgotPasswordController::class,'showLinkRequestForm'])->name('password.forgot');
        Route::post('password/email', [\App\Http\Controllers\Admin\ForgotPasswordController::class,'sendResetLinkEmail'])->name('password.email');
        Route::post('password/reset', [ResetPasswordController::class,'reset']);
        Route::get('password/reset/{token}', [ResetPasswordController::class,'showResetForm'])->name('password.reset');

        //Login/logout
        Route::get('login', [AdminLoginController::class,'showLogin'])->name('login');
        Route::post('login', [AdminLoginController::class,'login'])->name('login.submit');
        Route::get('/dashboard', [AdminController::class,'dashboard'])->name('dashboard');
        Route::get('logout', [AdminLoginController::class,'logout'])->name('logout');

        //Change Password
        Route::get('change-password', [AdminController::class,'changePassword'])->name('changePassword');
        Route::post('change-password', [AdminController::class,'changePasswordStore']);

        //Admin Permission Group
        Route::get('admin-permission-list', [AdminPermissionGroupController::class,'permissionList'])->name('permissionList');
        // Route::resource('admin-permission-groups', 'AdminPermissionGroupController');
        //Admin
        Route::get('admins/resetPassword/{id}',  [AdminController::class,'resetPassword'])->name('admins.resetPassword');
        Route::patch('admins/resetPassword/{id}',  [AdminController::class,'resetPasswordStore'])->name('admins.resetPasswordStore');
        Route::resource('admins', AdminController::class);

        Route::resource('admins', AdminController::class);
        //User
        Route::resource('users', UserController::class);

//        Route::resource('users', UserController::class);
        //phpinfo
        Route::get('phpinfo',  [AdminController::class,'phpinfo']);
    });

    //end admin

    Route::group([
        'namespace' => 'Category',
        'as' => 'category.',
    ], function () {

        Route::resource('category-item',CategoryItemController::class);
        Route::resource('option',CategoryOptionController::class);
        Route::post('option-list', [CategoryOptionController::class,'getOptionList'])->name('OptionList');
        Route::post('price-list', [CategoryOptionController::class,'getItemsList'])->name('PriceList');
        Route::post('item-list', [CategoryOptionController::class,'getItemList'])->name('itemList');
        Route::group(['prefix' => 'category-item/{catId}'], function () {
            Route::resource('item', CategoryOptionItemController::class);
        });

    });

    Route::group([
        'namespace' => 'Option',
        'as' => 'option.',
    ], function () {
        Route::resource('option-item',OptionItemController::class);

    });

//    Product Routes

    Route::group([
        'namespace' => 'Product',
        'as' => 'product.',
    ], function () {
        Route::resource('product',ProductController::class);
        Route::resource('price',ProductPriceController::class);
        Route::post('price-controller/{id}', [ProductController::class,'addPriceController'])->name('priceController');
        Route::post('price-controller-changed/{id}', [ProductController::class,'changeController'])->name('changeController');
        Route::post('price/{id}/{optId}', [ProductController::class,'addPrice'])->name('price');
//        Route::post('price/{id}', [ProductController::class,'addPrice'])->name('price');

    });

// });
