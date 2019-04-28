import React,{Component} from 'react';
import '../style.css';


class AddPermisoComponent extends Component {
        constructor(props){
          super(props);
          this.state={
            newUsuario:{
              Nombre:'',
              Descripcion:'',
            }
          }

          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleInput = this.handleInput.bind(this);
        }


        handleInput(key, e) {
                  
          var state = Object.assign({}, this.state.newUsuario); 
          state[key] = e.target.value;
          this.setState({newUsuario: state });
        }
        handleSubmit(e) {
          e.preventDefault();
          console.log(e + "Sera que paso por aqui");
          this.props.onAdd(this.state.newUsuario);
        }

 render(){
    return(
        <div>
        <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
          
            <div class="modal-header">
              <h4 class="modal-title">Nuevo Permiso</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <div class="modal-body">
              <form onSubmit={this.handleSubmit}>
             <div class="form-group">
             <label for="email">Nombre del Permiso:</label>
               <input type="text" class="form-control" onChange={(e)=>this.handleInput('Nombre',e)} name="Nombre"/>
              </div>
              <div class="form-group">
             <label for="email">Descripcion del Permiso:</label>
               <input type="text" class="form-control" onChange={(e)=>this.handleInput('Descripcion',e)} name="Descripcion"/>
              </div>
             

               <button type="submit" class="btn btn-primary btn-block" >Submit</button>
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

 



export default AddPermisoComponent;