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
            'password' => $request->get('password'),
            'date' => now(),
            'approve' => 1,
            'photo' => $fileName,
            
        ]
        );
        return response()->json(compact('users'));
    }

    public function getItem()
    {
        $items = Items::orderBy('id', 'desc')->paginate(5);
        return response()->json(compact('items'));
    }

    public function editItem($id)
    {
        $items = Items::find($id);
        return response()->json(compact('items'));
    }

    public function updateItem()
    {

        $rules = $this->ItemsRules();
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(['error at validation'], 400);
        }
        $fileName = $this->uploadphoto($request->file('photo'), 'images/items');

        $items = Items::find($id);

        $items->name = $request->name;
        $items->description = $request->description;
        $items->status = $request->status;
        $items->price = $request->price;
        $items->photo = $fileName;

        $items->save();

        return response()->json(compact('items'));
    }

    public function deleteItem($id)
    {
        $items = Items::find($id);
        $items->delete();
    }
}
