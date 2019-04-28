<?php

namespace cross\jw\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class GrupoController extends Controller
{
    public function index(){
       
        $grupos=DB::table('grupos')->get();
        return $grupos;
    }

    public function crear(Request $request){

        $idP=DB::table('grupos')->select('grupos.id')->orderBy('id', 'desc')->get();
        $consulta=DB::table('grupos')->insert(
            ['id'=>$idP[0]->id+1,'Nombre_Grupo' => $request->Nombre, 'Descrpicion' => $request->Descripcion]
        );
         
         $permisos=$request->checkedItems;
         $idP1=DB::table('grupo__permisos')->select('grupo__permisos.id')->orderBy('id', 'desc')->get();
         $c=1;
         foreach($permisos as $per){
             DB::table('grupo__permisos')
             ->insert(['id'=>$idP1[0]->id+$c,'Grupo_id'=>$idP[0]->id+1,'Permiso_id'=>$per]);
             $c=$c+1;
         }
         
    }

    public function buscar($id){
        $result=DB::table('grupo__permisos')
        ->join('permisos','permisos.id','=','grupo__permisos.Permiso_id')
        ->where('grupo__permisos.Grupo_id','=',$id)
        ->select('permisos.*')
        ->get();
        
        return $result;
    }

    public function DeleteGrupo($id){

        DB::table('grupo__permisos')->where('Grupo_id','=',$id)->delete();
        DB::table('grupos')->where('id','=',$id)->delete();


    }

} 
