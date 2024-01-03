<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;
use Sqits\UserStamps\Concerns\HasUserStamps;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, HasPermissions;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $appends = ['rolename'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'roles',
        'permissions',
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function abilities(){
       $permissions = $this->getAllPermissions();
       $abilities = [];
       foreach($permissions as $item){
        $exploded = explode(':',$item['name']);
        $abilities[] = [
            'subject' => $exploded[1],
            'action' => $exploded[0]
        ];
       }
       return $abilities;
    }

    protected function rolename(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $this->roles()->first()->name,
        );
    }

}
