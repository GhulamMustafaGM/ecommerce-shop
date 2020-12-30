<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    //
    use Uploadphoto;
    use ItemRules;

    public function addItem(Request $request, $id) {

        $rules = $this->ItemsRules();
        $validator = Validator::make($request->all(), $rules);

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
        $items = Items::orderBy('id', 'desc')->paginate(5);
        return response()->json(compact('items'));
    }

    public function editItem($id) {
        $items = Items::find($id);
        return response()->json(compact('items'));
    }

    public function updateItem() {

        $rules = $this->ItemsRules();
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return response()->json(['error at validation'], 400);
        }
            $fileName=$this->uploadphoto($request->file('photo'), 'images/items');

            $items=Items::find($id);

            $items->name=$request->name;
            $items->description=$request->description;
            $items->status=$request->status;
            $items->price=$request->price;
            $items->photo=$fileName;

            $items->save();

            return response()->json(compact('items'));
    }

    public function deleteItem($id) {
        $items = Items::find($id);
        $items->delete();
    }
}
