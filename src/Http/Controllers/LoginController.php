<?php

namespace cross\jw\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Auth\Authenticatable;
use DB;
class LoginController extends Controller
{   
    
    public function __construct(){

        $this->middleware('guest',['only'=>'inicio']);
    }


    public function inicio(){
        if(Auth::check()){
            return "Hola";
        }else{
            return view('index::login');

        }
    }
    
    public function login(){
        
       $credentials= $this->validate(request(),[
            'email'=>'email|required|string',
            'password'=>'required|string'
        ]);
       
       if(Auth::attempt($credentials)){
           if(Auth::guard('web')->attempt($credentials,true)){

               return view('index::index');

        }
       } 
       return back();
    }

    public function logout(){
         Auth::logout();
        return redirect('/');
    }
}
