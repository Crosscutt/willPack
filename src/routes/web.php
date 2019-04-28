<?php

use Illuminate\Http\Request;



Route::group(['namespace'=>'cross\jw\Http\Controllers'],function(){
    
    ///USUARIOS
    Route::get('home','UsuarioController@index');

    
    Route::get('usuarios','UsuarioController@usuarios');
    Route::Post('crear','UsuarioController@crear');
    Route::Post('autenticacion','UsuarioController@auth');
    Route::delete('usuario/delete/{id}','UsuarioController@DeleteUsuario');
    Route::get('usuarios/perfil/{id}','UsuarioController@Perfilshow');
    Route::get('usuarios/edit/{id}','UsuarioController@editar');
    Route::put('UpdateUser/{id}','UsuarioController@update');


    ///PERMISOS
    Route::get('permisos','PermisoController@index');
    Route::Post('addPermisos','PermisoController@crear');
    Route::delete('permisos/delete/{id}','PermisoController@DeletePermiso');
    



    ///GRUPOS
    Route::get('grupos','GrupoController@index');
    Route::Post('newGrupo','GrupoController@crear'); 
    Route::get('buscar/{id}','GrupoController@buscar');
    Route::delete('grupos/delete/{id}','GrupoController@DeleteGrupo');



    ///Login
    //1
    Route::get('/',function(){
        return view('index::login');
    });
    
    ///1.1
    Route::Post('home','LoginController@login')->name('login');

    //2
    Route::get('dashboard','DashBoardController@dashboard')->name('dashboard');
     //3
    Route::Post('logout','LoginController@logout')->name('logout');
   

    Route::get('Allpermisos/{id}','UsuarioController@buscar');


    

    ////// PERMISOS DEL USUARIO

    

});











?>