<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryControl extends Controller
{
    //
    use Uploadphoto;
    use CategoryRules;

    public function addCategory(Request $request) {

        $rules = $this->CategoryRules();
        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()) {
            return response()->json(['error at validation'], 400);
        }

        //import from trait(uploadphoto)
        
        $fileName=$this->uploadphoto($request->file('photo'), 'images/category');

        $Category=Category::create([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'photo' => $fileName,
        ]
        );
            return response()->json(compact('category'));
    }
}
