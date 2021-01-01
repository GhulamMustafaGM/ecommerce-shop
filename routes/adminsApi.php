<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admins\AdminsController;
use App\Http\Controllers\Admins\ItemsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
    ########################## Login #########################################

Route::group(['prefix' => 'admins','namespace'=>'Admins'], function () {
    Route::post('login', [AdminsController::class,'adminsLogin']);
        
    });

    ########################## getauthadmin #########################################

Route::group(['prefix' => 'admins','namespace'=>'Admins', 'middleware'=>'adminsRoutes','jwt.auth'], function () {
    Route::get('authadmin', [AdminsController::class,'addUser']);
        
    });

    ######################################## items ##########################################

Route::group(['prefix' => 'admins','namespace'=>'Admins', 'middleware'=>'adminsRoutes','jwt.auth'], function () {
    Route::post('add/items{id}', [ItemsController::class,'addItem']);
    Route::get('get/items', [ItemsController::class,'getItem']);
    Route::get('edit/items{id}', [ItemsController::class,'editItem']);
    Route::post('update/items{id}', [ItemsController::class,'updateItem']);
    Route::delete('delete/items{id}', [ItemsController::class,'deleteItem']);
        
    }); 

########################## users #########################################

Route::group(['prefix' => 'admins','namespace'=>'Admins', 'middleware'=>'adminsRoutes','jwt.auth'], function () {
    Route::post('add/users', [MembersController::class,'addUser']);
    Route::get('get/users', [MembersController::class,'getUser']);
    Route::delete('delete/users{id}', [MembersController::class,'deleteUser']);
    Route::get('edit/users{id}', [MembersController::class,'editUser']);
    Route::post('update/users{id}', [MemberssController::class,'updateUser']);
    
});