<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    //
    use uploadphoto;
    public function addItem(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'name'=>'required|string|min:4|max:25',
            'description'=>'required|string|min:4|max:100',
            'status'=>'required|numric',
            'price'=>'required|string',
            'photo'=>'required|image|mimes:jpg,jpej,gif,png|max:14048',

        ])

        //import from trait(uploadphoto)
        
        $fileName=$this->uploadphoto($request->file('photo'), 'images/items');

        $items=Items::create([
            'name'=>$request->get('name'),
            'description'=>$request->get('description'),
            'status'=>$request->get('status'),
            'price'=>$request->get('price'),
            'date'=>now(),
            'approve'=>1,
            'photo'=>$fileName,
            'admins_id'=>$id
        ]
        );
            return response()->json(compact('items'));
    }
}
