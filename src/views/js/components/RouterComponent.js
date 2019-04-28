import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import ComponentNavbar from './ComponentNavbar';
import ComponentUsuario from './ComponentUsuario';
import ComponentGrupo from './ComponentGrupo';
import ComponentPermiso from './ComponentPermiso';
import Perfil from './Perfil/perfilUsuario';
import Log from './Bitacora/Log';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      permisos:"",
    }
  }

  componentDidMount(){
    fetch('Allpermisos/'+this.props.idLog)
    .then(response =>{
        return response.json();
    })
    .then(permisos => {
       this.setState({permisos});
    });
  }

  render(){
    return (
      <Router>
        <div> 
          <ComponentNavbar idLog={this.props.idLog} Can={this.state.permisos} username={this.props.data1} />
          <Route exact path="/home"  component={Home}/>
          <Route path="/Perfil"  component={Perfil}/>
          <Route path="/usuario"  component={ComponentUsuario}/>
          <Route path="/permiso" component={ComponentPermiso}/>
          <Route path="/grupo"  component={ComponentGrupo}/>
          <Route path="/log" component={Log}></Route>
        </div>
      </Router>
    );
  }

}


export default App;
