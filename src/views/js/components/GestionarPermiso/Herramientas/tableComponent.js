import React ,{Component} from 'react';
import AddUsuarioComponent from '../AddPermisoComponent';



const helloStyles = {
  color: 'red',
  fontSize: '16px',
  display:  'none' //camelCase property
}
class Tablex extends Component{
     constructor(props){
       super(props);
       this.state={
         permisos:[],
         estado:"",
         mensaje:""
       }

       this.onDelete=this.onDelete.bind(this);
       this.handleAddProduct = this.handleAddProduct.bind (this);

     }  
     

  Cargar(){
    return this.state.permisos.map(permiso =>{
      return (
                <tr>
                   <td>
                   {permiso.id}
                   </td>
                   <td> 
                   {permiso.Nombre}
                   </td>
                   <td>
                   {permiso.Descripcion}
                   </td>
                   <td>
                   <button class="btn btn-success" >Editar</button>
                   <button className="btn btn-danger btn-sm" onClick={this.onDelete.bind(this,permiso.id)}>Eliminar</button>
                   </td>
                 </tr>
          
      );
  })
  } 
  componentWillMount(){

    fetch('/permisos')
    .then(response =>{
        return response.json();
    })
    .then(permisos => {
       this.setState({permisos});
    });
  }


  onDelete(usuario_id){
    axios.delete('/permisos/delete/'+usuario_id)
    .then(response=>{
     var permisos=this.state.permisos;
     for(var i=0;i<permisos.length;i++){
          if(permisos[i].id==usuario_id){
            permisos.splice(i,1);
            this.setState({permisos:permisos});
          }
     }
    })
   
 
   }

   handleAddProduct(product) {
     
    axios.post('addPermisos',product)
    .then(res=>Console.log(res.data));
    this.setState({estado:true,mensaje:"Se ah Creado un Nuevo Usuario"});
    this.Cargar();

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

  <AddUsuarioComponent onAdd={this.handleAddProduct}></AddUsuarioComponent>
         <br></br>
        
        <h3>Gestionar Permisos</h3>  
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