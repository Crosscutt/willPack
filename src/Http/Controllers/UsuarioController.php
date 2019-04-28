<?php

namespace cross\jw\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Hash;
use Illuminate\Support\Facades\Auth;
use App\User;
use Cross\jw\Models\Perfil;

class UsuarioController extends Controller
{    

    
    public function index(){
         

        return view('index::index');
       
    }

    public function create(Request $request){
        return $request->all();
    }

    public function usuarios(){
        $user=DB::table('users')->get();
        return $user;
    }
    public function crear(Request $request){
       
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $user = User::create($input);
        $user->save(); 
        
        DB::table('perfils')->insert(
            ['User_id' => $user->id, 'Grupo_id' => $request->GrupoId,'Nombre'=>$request->Nombre,
            'Apellido'=>$request->Apellido,'CI'=>$request->CI,'Fecha_Nacimiento'=>$request->FN,
            'Direccion'=>$request->direccion]
        );
        

    }

    public function auth(Request $request){
         
         $username=$request->username;
         $password=$request->password;
         
         $usuarios=DB::table('usuarios')
         ->where('usuarios.username','=',$username)
         ->select('usuarios.*')
         ->get()->toJson();
    
        if(!empty($usuarios)){
            return redirect('/home');
        }
        
        
    }

    public function DeleteUsuario($id){
       
        DB::table('perfils')->where('User_id','=',$id)->delete();
        DB::table('users')->where('id', '=', $id)->delete();
    }

    public function Perfilshow($id){
        $perfil=DB::table('perfils')->where('User_id','=',$id)->select('perfils.*')->get();
        return $perfil;
    }
    public function editar($id){
        $consultas=DB::table('users')
        ->join('perfils','perfils.User_id','=','users.id')
        ->join('grupos','grupos.id','=','perfils.Grupo_id')
        ->where('users.id','=',$id)
        ->select('users.*','perfils.*','grupos.Nombre_Grupo as ng','grupos.Descrpicion as gd')
        ->get();
        return $consultas;
    }

    public function store(Request $request, $id){
        dd($request);
    }

    public function update(Request $request,$id){

        dd($request);
    }


    public function buscar($id){
         
        $idGrupo=DB::table('perfils')
        ->where('perfils.User_id','=',$id)
        ->select('perfils.Grupo_id')
        ->get();
        
        $result=DB::table('grupo__permisos')
        ->join('permisos','permisos.id','=','grupo__permisos.Permiso_id')
        ->where('grupo__permisos.Grupo_id','=',$idGrupo[0]->Grupo_id)
        ->select('permisos.Nombre')
        ->get();
        
        return $result;
    }
}
