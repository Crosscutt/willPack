import React,{Component} from 'react';
import './style.css';
import axios from 'axios';


class AddGrupoComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      Permisos:"",
      newUsuario:{
        Nombre:'',
        Descripcion:'',
        checkedItems:{},
      },
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  componentDidMount(){
    axios.get('permisos/')
    .then(response=>{
          this.setState({Permisos:response.data})
    });

  }
  handleInput(key, e) {
    var state = Object.assign({}, this.state.newUsuario); 
    state[key] = e.target.value;
    this.setState({newUsuario: state });
  }
  handleSubmit(e) {
    e.preventDefault();
      this.props.onAdd(this.state.newUsuario);

     
  }
  onPerfil(){
     let myMap = new Map().set('a', 1).set('b', 2).set(983, true)
     let  keys = [...this.state.checkedItems.keys()]
    var state = Object.assign({}, this.state.newUsuario); 
    state['checkedItems'] = keys;
    this.setState({newUsuario: state });
  
  }
  All(){
    return this.state.Permisos.map(permiso=>{
      return(
        <div>
           <label><input type="checkbox" name={permiso.id} onChange={this.handleChange}/>  {permiso.Nombre} </label>
        </div>
      )
    })
  }


 render(){
    return(
        <div>
        <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
          
            <div class="modal-header">
              <h4 class="modal-title">Nuevo Grupo</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <div class="modal-body">
              <form onSubmit={this.handleSubmit}>
             <div class="form-group">
             <label for="email">Nombre del Grupo:</label>
               <input type="text" class="form-control"  onChange={(e)=>this.handleInput('Nombre',e)} name="Nombre"/>
              </div>
              <div class="form-group">
             <label for="text">Descripcion del Grupo:</label>
               <input type="text" class="form-control" onChange={(e)=>this.handleInput('Descripcion',e)} name="Descripcion"/>
              </div>
                    <div class="card ">
                    <div class="card-header">
                      Lista de Permisos Disponibles
                      <button type="button" class="btn btn-success float-right" onClick={this.onPerfil.bind(this)}>Cargar</button>

                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">  <div class="checkbox">
                      {
                         this.state.Permisos!=""?this.All():null 
                      }
                    </div></li>
                     
                    </ul>
                  </div>


               <button type="submit" class="btn btn-primary btn-block">Submit</button>
               </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>)
  }
 
}

 



export default AddGrupoComponent;