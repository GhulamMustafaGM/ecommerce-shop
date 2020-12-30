<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MembersController extends Controller
{
    //
    use Uploadphoto;
    use MembersRules;

    public function addUser(Request $request)
    {

        //import from trait(membersRules)
        $rules = $this->MembersRules($request);

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['error at validation'], 400);
        }

        $fileName = '';
        if ($request->file('photo')) {
            //import from trait(Uploadphoto)
            $fileName = $this->uploadphoto($request->file('photo'), 'images/items');
        }

        $users = Users::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'date' => now(),
            'approve' => 1,
            'photo' => $fileName,
            
        ]
        );
        return response()->json(compact('users'));
    }

    public function getUser()
    {
        $users = Users::orderBy('id', 'desc')->paginate(2);
        return response()->json(compact('users'));
    }

    public function deleteUser($id) {
        $users = users::find($id);
        $users->delete();
    }
}
