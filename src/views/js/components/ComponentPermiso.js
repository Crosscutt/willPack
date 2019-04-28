import React,{Component} from 'react';

import "./style.css";
import Tablex from './GestionarPermiso/Herramientas/tableComponent';



class ComponentPermiso extends  Component{
    constructor(props){
        super(props);
        this.state={
            permisos:[],
        }

    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
            <Tablex ping={this.state.permisos} ></Tablex>
            </div>
        )
    }

}

export default ComponentPermiso;