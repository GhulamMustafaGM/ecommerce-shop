<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    //
    use uploadphoto;
    public function addItem(Request $request, $id) {

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
