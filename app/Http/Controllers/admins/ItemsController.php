<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    //
    public function addItem(Request $request, $id) {
        $file=$request->file('photo');
        $fileName=time().'_'.$file->getClientOriginalName();
        $filePath='images/items';
        $file->move($filePath,$fileName);

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
