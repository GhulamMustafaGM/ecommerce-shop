<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admins extends Authenticatable implements JWTSubject
{
    use Notifiable;

    // Rest omitted for brevity
    protected $table = 'admins';
    protected $fillable = ['name','email','password','created_at','updated_at'];
    protected $hidden = ['password','remember_token'];
    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
    
