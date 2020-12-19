<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admins extends Model
{
    use HasFactory;
    protected $table = 'admins';
    protected $fillable = ['name','email','password','created_at','updated_at'];
    protected $hidden = ['password','remember_token'];
}
