import React ,{Component} from 'react';
import AddGrupoComponent from '../AddGrupoComponent';
import PermisosAll from './permisosAll';
import axios from 'axios';
class Tablex extends Component{
     constructor(props){
       super(props);
       this.state={
         grupos:[],
         permisos:"",
         estado:false,
         mensaje:"",
       }
     }  
     onPerfil(usuario_id){
      axios.get('buscar/'+usuario_id)
      .then(response=>{
            this.setState({permisos:response.data})
      });
     }
     CargarPerfil(){
 
      return this.state.permisos.map(permiso=>{
        return(
           <div>
             <div class="card w-100">
             <div class="card-body"> 
            <center><p class="card-text"> {permiso.Nombre}</p></center> <center><strong>{permiso.Descripcion}</strong></center> 
            </div>
            </div>
            </div>
        )
      })
    }

   componentWillMount(){
    fetch('/grupos')
    .then(response =>{
        return response.json();
    })
    .then(grupos => {
       this.setState({grupos});
    });
   } 
  Cargar(){
    return this.state.grupos.map(grupo =>{
      return (
                <tr>
                   <td>
                   {grupo.id}
                   </td>
                   <td> 
                   {grupo.Nombre_Grupo}
                   </td>
                   <td>
                   {grupo.Descrpicion}
                   </td>
                   <td>
                     
                   <button className="btn btn-primary"  data-toggle="modal" data-target="#perfil" onClick={this.onPerfil.bind(this,grupo.id)}>Ver Permisos</button>
                   <div class="modal" id="perfil">
                        <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                        
                          <div class="modal-header">
                            <h4 class="modal-title">Perfil de Usuario</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>

                          <div class="modal-body">
                          <h5 class="card-title"><b>Nombres del Permiso</b></h5>
                          { this.state.permisos!="" ? this.CargarPerfil() : console.log("Hola") }
                          </div>
                          
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                   <button class="btn btn-success">Editar</button>
                   <button className="btn btn-danger btn-sm" onClick={this.onDelete.bind(this,grupo.id)}>Eliminar</button>
                   </td>
                 </tr>
          
      );
  })
  }
  
 
  onDelete(usuario_id){
    axios.delete('grupos/delete/'+usuario_id)
    .then(response=>{
     var grupos=this.state.grupos;
     for(var i=0;i<grupos.length;i++){
          if(grupos[i].id==usuario_id){
            grupos.splice(i,1);
            this.setState({grupos:grupos,estado:true,mensaje:"Eliminaste un Usuario"});
          }
     }
    })
   }


  handleAddProduct(product) {
     
    axios.post('newGrupo',product)
    .then(res=>Console.log(res.data));
    this.setState({estado:true,mensaje:"Se ah Creado un Nuevo Grupo"});

  }
  render(){
    const ping=this.props.ping;
    return(  
      <div className="indexU">
      <div class="card-body d-flex">
      <button type="button" class="btn btn-primary btn-lg ml-auto" data-toggle="modal" data-target="#myModal" >
        Añadir
      </button>
      </div>

  <AddGrupoComponent onAdd={this.handleAddProduct}></AddGrupoComponent>
         <br></br>
        
        <h3>Gestionar Grupos</h3>  
      <table class="table table-bordered">
       <thead>
         <tr> 
           <th>
             Id
           </th>
           <th>
             Nombre
           </th>
           <th>
             Descripcion
           </th>
           <th>
             Opciones
             
           </th>
         </tr>
       </thead>
      
       <tbody>
         {this.Cargar()}
       </tbody>
      </table>
      </div>
    );
  }
}


export default Tablex;