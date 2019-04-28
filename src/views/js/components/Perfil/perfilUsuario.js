import React,{Component} from 'react';


class Perfil extends Component{
  constructor(props){
      super(props);
      this.state={
          perfiles:"",
      }
  }

  componentDidMount(){
    const { idLog }=this.props.location.state;
    axios.get('/usuarios/edit/'+idLog)
    .then(response=>{
          this.setState({perfiles:response.data})
    });
  }

  onCargar(){
    return this.state.perfiles.map(perfil=>{
     
        return(
            <div>
            <div class="card border-primary mb-15" >
            <div class="card-header">DATOS PERSONALES</div>
            <div class="card-body text-dark">
                 <h5 class="card-title">Cedula de Identidad : <b>{perfil.CI}</b></h5>
                 <h5 class="card-title">Nombre y Apellido   : <b>{perfil.Nombre}   {perfil.Apellido}</b> </h5>
                 <h5 class="card-title"> Direccion          : <b>{perfil.Direccion}</b></h5>
                 <h5 class="card-title">Fecha de Nacimiento : <b>{perfil.Fecha_Nacimiento}</b></h5>
                 <h5 class="card-title">Telefono o Celular  : <b>{perfil.Celular}</b></h5>
                 <h5 class="card-title">Sexo                : <b>{perfil.Sexo}</b></h5>
                <p class="card-text"></p>
            </div>
            </div>
           
            <div class="card border-secondary mb-15" >
            <div class="card-header">DATOS DE USUARIO</div>
            <div class="card-body text-dark">
                <h5 class="card-title">Nombre de Usuario   : <b>{perfil.name}</b></h5>
                <h5 class="card-title">Correo Electronico  : <b>{perfil.email}</b></h5>
                <h5 class="card-title">Fecha de creacion   : <b>{perfil.email_verified_at}</b></h5>
            </div>
            </div>
            
            <div class="card border-info mb-15" >
            <div class="card-header">GRUPOS A LOS QUE PERTENESCO</div>
            <div class="card-body text-dark">
                <h5 class="card-title">Nombre del Grupo    :<b>{perfil.ng}</b></h5>
                <h5 class="card-title">Descripcion del Grupo : <b>{perfil.gd}</b></h5>
    
            </div>
            </div>
            </div>
        )
    })


  }
 
 render(){
  return(
      <div>
      {this.state.perfiles!=""?this.onCargar():console.log("rayos")}
      </div>
    )                 
  

 }   


 

}


export default Perfil;