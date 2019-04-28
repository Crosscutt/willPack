import React ,{Component} from 'react';
import AddUsuarioComponent from '../AddUsuarioComponent';
import axios from 'axios';
import firebase from 'firebase';

class Tablex extends Component{
     constructor(props){
       super(props);
       this.state={
         usuarios:[],
         perfils:"",
         consultas:"",
         estado:false,
         mensaje:"",
         grupos:[],
       }

       this.handleAddProduct = this.handleAddProduct.bind (this);
     }  
     
  
  onDelete(usuario_id){
   axios.delete('/usuario/delete/'+usuario_id)
   .then(response=>{
    var usuarios=this.state.usuarios;
    for(var i=0;i<usuarios.length;i++){
         if(usuarios[i].id==usuario_id){
          usuarios.splice(i,1);
           this.setState({usuarios:usuarios,estado:true,mensaje:"Eliminaste un Usuario"});
         }
    }
   })

  }

  onPerfil(usuario_id){
   axios.get('/usuarios/perfil/'+usuario_id)
   .then(response=>{
         this.setState({perfils:response.data})
   });
  }


 
  CargarEditar(usuario_id){
    axios.get('/usuarios/edit/'+usuario_id)
    .then(response=>{
          this.setState({consultas:response.data})
    });

 
  }


  mostrar(){
    return this.state.grupos.map(grupo =>{
      return (
        <option value={grupo.id}>{grupo.Nombre_Grupo}</option>
      );
  })
  }
  

  componentDidMount(){
    axios.get('/usuarios')
    .then(response=>{
      this.setState({usuarios:response.data})
    })
    fetch('/grupos')
    .then(response =>{
        return response.json();
    })
    .then(grupos => {
       this.setState({grupos});
    });
    


  
  }

  Bitacora(){
    const { idLog }=this.props;
    const { username }=this.props;


    const record = {
      UserName:username,
      idUser:idLog,
      Url:location.href,
      Accion:this.state.mensaje,
      Fecha : Date(Date.now()).toString(),
      dispositivo:navigator.userAgent || navigator.vendor || window.opera,
    }
    const dbRef = firebase.database().ref('Bitacora/Usuario/'+idLog);
    const newPicture = dbRef.push();
    newPicture.set(record);

    this.setState({estado:false,mensaje:""})
  }

  
  CargarPerfil(){
 
    return this.state.perfils.map(perfil=>{
      return(
         <div>

           <div class="card w-100">
           <div class="card-body"> 
           <h5 class="card-title"><b>Nombres y Apellidos</b></h5>
           <p class="card-text">{perfil.Nombre}  {perfil.Apellido} </p>
          </div>
          </div>
          <div class="card w-100">
           <div class="card-body"> 
           <h5 class="card-title"><b>Datos Personales</b></h5>
           <p class="card-text">
                   <strong>CI</strong>  : {perfil.CI}      <strong>Direccion</strong>  : {perfil.Direccion}      <strong>FechaN </strong>  : {perfil.Fecha_Nacimiento} </p>
                   
                   <strong>Telefono</strong>:              <strong>Sexo</strong>       :
          </div>
          </div>

          <div class="card w-100">
           <div class="card-body"> 
           <h5 class="card-title"><b>Grupo al que Pertenece</b></h5>
           <b class="card-text"> </b>
          </div>
          </div>
       
          </div>
      )
    })
  }


 

  EditarUsuario(){
    return this.state.consultas.map(consulta=>{
      return(
        <div>
        <form action="#" method="Post">
              <div className="form-group">
              <label  htmlFor="email">Nombre de Usuario:</label>
                <input type="text" value={consulta.name} className="form-control"  name="name"/>
               </div>
               <div>
               <label htmlFor="email">Email:</label>
                <input type="email" value={consulta.email} className="form-control"  name="email"/>
               </div>
                 <div className="form-group">
               <label htmlFor="pwd">Contraseña:</label>
                <input type="password"  className="form-control"  name="password"/>
               </div>
               <div className="form-group">
               <label  htmlFor="email">Asignar a Grupo:</label>
               <select name="GrupoId" class="browser-default custom-select">
               <option value={consulta.Grupo_id}>{consulta.ng}</option>
               {this.mostrar()}               
               </select>              
               </div>
               <div className="form-group">
              <label  htmlFor="text">Nombre:</label>
                <input type="text" value={consulta.Nombre}className="form-control"  name="Nombre"/>
               </div>
               <div className="form-group">
              <label  htmlFor="text">Apellido:</label>
                <input type="text" value={consulta.Apellido} className="form-control"  name="Apellido"/>
               </div>
               <div className="form-group">
              <label  htmlFor="text">Cedula de Identidad:</label>
                <input type="text" value={consulta.CI} className="form-control"  name="CI"/>
               </div>
               <div className="form-group">
              <label  htmlFor="date">Fecha Nacimiento:</label>
                <input type="date" value={consulta.Fecha_Nacimiento} className="form-control"  name="FN"/>
               </div>
                <button type="submit" className="btn btn-success btn-block">Submit</button>
                </form>
             </div>
      )
    })
 

  }

  
  Cargar(){
    return this.state.usuarios.map(usuario =>{
      return (
                <tr>
                   <td>{usuario.id}</td>
                   <td>{usuario.name}</td>
                   <td>{usuario.email}</td>
                   <td> 
                  <button className="btn btn-info btn-sm"  data-toggle="modal" data-target="#perfil" onClick={this.onPerfil.bind(this,usuario.id)}>Perfil</button>
                   <div class="modal" id="perfil">
                        <div class="modal-dialog">
                        <div class="modal-content">
                        
                          <div class="modal-header">
                            <h4 class="modal-title">Perfil de Usuario</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>

                          <div class="modal-body">
                          { this.state.perfils!="" ? this.CargarPerfil() : null }
                          </div>
                          
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                   <button className="btn btn-success btn-sm"  data-toggle="modal" data-target="#editar" onClick={this.CargarEditar.bind(this,usuario.id)}>Editar</button>
                   <div class="modal" id="editar">
                        <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                        
                          <div class="modal-header">
                            <h4 class="modal-title">Editar Usuario</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>

                          <div class="modal-body">
                          {this.state.consultas!="" ? this.EditarUsuario():null}

                          </div>
                          
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                   <button className="btn btn-danger btn-sm" onClick={this.onDelete.bind(this,usuario.id)}>Eliminar</button>
                   </td>
                 </tr>
          
      );
  })
  } 



  handleAddProduct(product) {
     
    axios.post('crear',product)
    .then(res=>Console.log(res.data));
    this.setState({estado:true,mensaje:"Se ah Creado un Nuevo Usuario"});
    this.Cargar();

  }
  render(){


    return(  
      <div className="indexU">
         { this.state.estado==true?this.Bitacora():console.log("No hay accion detectada")}
            <div className="card-body d-flex">
            <button type="button" className="btn btn-primary ml-auto" data-toggle="modal" data-target="#myModal" >
              Añadir
            </button>
            </div>
              <AddUsuarioComponent grupos={this.state.grupos} onAdd={this.handleAddProduct}></AddUsuarioComponent>
            <br></br>
        
        <h3>Administracion de Usuarios</h3>  
      <table className="table table-bordered">
       <thead><tr> 
           <th>Id </th>
           <th>Username</th>
           <th>email</th>
           <th>Opciones</th></tr>
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