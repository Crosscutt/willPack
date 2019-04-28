<?php

namespace cross\jw\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use DB;
class PermisoController extends Controller
{
    public function index(){
        $permisos=DB::table('permisos')->get();
        return $permisos;
    }
    public function crear(Request $request){
        $idP=DB::table('permisos')->select('permisos.id')->orderBy('id', 'desc')->get();
        
        DB::table('permisos')->insert(
            ['id'=>$idP[0]->id+1,'Nombre' => $request->Nombre, 'Descripcion' => $request->Descripcion]
        );
        

    }

    public function DeletePermiso($id){
        DB::table('permisos')->where('id','=',$id)->delete();
    }
}
