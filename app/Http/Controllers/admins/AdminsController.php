<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminsController extends Controller
{
    public function adminsLogin(Request $request) {
        $credentials=$request->only('email','password');
        try{
            if(! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['invalid credentials']);
            }
        }catch(JWTException $e) {
            return response()->json(['cannot create token']);
        }
        return response()->json(compact('token'));
    }
}
