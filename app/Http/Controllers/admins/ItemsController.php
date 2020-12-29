<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    //
    use uploadphoto;
    use ItemRules;

    public function addItem(Request $request, $id) {

        $this->ItemsRules();

        $rules = $validator = Validator::make($request->all(), $rules);

        if($validator->fails()) {
            return response()->json(['error at validation'], 400);
        }

        //import from trait(uploadphoto)
        
        $fileName=$this->uploadphoto($request->file('photo'), 'images/items');

        $items=Items::create([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'status' => $request->get('status'),
            'price' => $request->get('price'),
            'date' => now(),
            'approve' => 1,
            'photo' => $fileName,
            'admins_id' => $id
        ]
        );
            return response()->json(compact('items'));
    }

    public function getItem() {
        $items = Items::all();
        return response()->json(compact('items'));
    }

    public function editItem($id) {
        $items = Items::find($id);
        return response()->json(compact('items'));
    }
}
