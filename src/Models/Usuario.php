<?php

namespace cross\jw;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = "usuarios";
    public $timestamps=false;
    protected $fillable = ['id','Username','email','password'];
    protected $primaryKey = 'id';
}
