<?php 

namespace App\Traits;

trait ItemRules{
    public function ItemsRules() {
        $rules = [
                    'name'=>'required|string|min:4|max:25',
                    'description'=>'required|string|min:4|max:100',
                    'status'=>'required|numric',
                    'price'=>'required|string',
                    'photo'=>'required|image|mimes:jpg,jpeg,gif,png|max:14048',
                ];
                return $rules;
            }
            
}