import React,{Component} from 'react';
import navbar from 'bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";

const helloStyles = {
    display:  'none' //camelCase property
  }
               

class ComponentNavbar extends Component{
   constructor(props){
       super(props);
       this.state={
           permisos: ""
       }
   }
    
    
   Verificar(Nombre) {
       if(this.props.Can!=""){
    for(var i=0;i<this.props.Can.length;i++){
        if(this.props.Can[i].Nombre==Nombre){
            return true;
        }
   }
   return false;
   }
}
   
   componentWillMount(){
    this.setState({permisos:this.props.Can});
    
   }
   render(){
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return(
           <div>
              <navbar className="navbar navbar-expand-md bg-primary navbar-dark">
                    
                       <a className="nav-link" href="#" >
                         <Link to="/home" >
                        <h4 className="home">Cross-HomeS</h4>
                        </Link>
                         </a>
                            
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        { this.Verificar("verAdminUsuarios")==true?
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Administracion de Usuarios</a>
                            <div className="dropdown-menu">
                             { this.Verificar("verUsuarios")==true?
                             <a className="dropdown-item" >
                             <Link to={{ pathname:'/usuario',state:{idLog:this.props.idLog,username:this.props.username}}}>usuario</Link>
                             </a>:
                              null
                             }
                             { this.Verificar("verPermisos")==true?
                            <a className="dropdown-item" >
                            <Link to="/permiso">permiso</Link>
                            </a>:null}
                            
                            { this.Verificar("verGrupos")==true?
                            <a className="dropdown-item" >
                            <Link to="/grupo">grupo</Link>
                            </a>:null}
                        </div>
                        </li>:null}
                        { this.Verificar("Log")==true?
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="   drop" data-toggle="dropdown">
                            Log-Bitacora
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                             <Link to={{ pathname:'/Log',state:{idLog:this.props.idLog,username:this.props.username}}}>Log</Link>
                            </a>
                            
                        </div>
                        </li>:null}
                        <li>
                        <a className="nav-link" href="#" >
                         <Link to={{ pathname:'/Perfil',state:{idLog:this.props.idLog}}} >
                        <h6 className="home">PERFIL</h6>
                        </Link>
                         </a>
                        </li>

                        <li>
                       <div className="float-right">
                       <form method="POST" action="/logout">
                        <button className="btn btn-success  float-right" >Cerrar Sesion</button>
                        </form> 
                       </div>
                      
                        </li>
                        <li>
                         <a className="nav-link" href="#" >
                        <b>Identificado como: </b>{this.props.username}
                        </a>
                        </li>
                       
                        </ul>
                    </div> 
              </navbar>


           </div>
    );
   }
}

export default ComponentNavbar;