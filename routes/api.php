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
    //Login and getauthadmin

Route::group(['prefix' => 'admins','namespace'=>'Admins'], function () {
    Route::post('login', [AdminsController::class,'adminsLogin']);
    Route::get('authadmin', [AdminsController::class, 'getAuthenticateAdmin']);
        
    });

    //items

    Route::group(['prefix' => 'admins','namespace'=>'Admins', 'middleware'=>'adminsRoutes','jwt.auth'], function () {
        Route::post('add/items{id}', [ItemsController::class,'addItem']);
            
        });

