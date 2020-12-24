<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admins\AdminsController;

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

Route::group(['prefix' => 'admins','namespace'=>'Admins'], function () {
    Route::post('login', [AdminsController::class,'adminsLogin']);
    Route::get('authadmin', [AdminsController::class, 'getAuthenticateAdmin']);
        
    });

