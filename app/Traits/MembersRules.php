<?php

namespace App\Traits;

trait MembersRules
{
    public function MembersRules()
    {
        $rules = [
            'name' => 'required|string|min:4|max:25',
            'email' => 'required|email|min:10|max:100|unique:users',
            'password' => 'required|string|min:8|max:50',
            'photo' => 'image|mimes:jpg,jpeg,gif,png|max:14048',
        ];
        return $rules;
    }

}
