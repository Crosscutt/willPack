import React, { Component } from 'react';
import "./style.css";
import Tablex from './GestionarUsuario/Herramientas/tableComponent';

class ComponentUsuario extends Component{
    
    constructor(props){
        super(props);
        this.state={
            usuarios:[],
            idLog:"",
            username:"",
        }
    }

       componentDidMount(){
            this.setState({
                 idLog:this.props.location.state.idLog,
                 username:this.props.location.state.username
            })
        }


    render(){

       return(
      
        <div > 
            <ul >
            <Tablex  idLog={this.state.idLog} username={this.state.username} ></Tablex>
            </ul>         

        </div>

       );
   }


}


export default ComponentUsuario;