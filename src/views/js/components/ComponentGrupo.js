import React,{Component} from 'react';

import "./style.css";
import Tablex from './GestionarGrupo/Herramientas/tableComponent';



class ComponentGrupo extends  Component{
    constructor(props){
        super(props);
        this.state={
            grupos:[],
        }
    }

    render(){
        return (
            <div>
            <Tablex  ></Tablex>
            </div>
        )
    }

}

export default ComponentGrupo;