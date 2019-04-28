import React,{Component} from 'react';
import '../style.css';



class AddUsuarioComponent extends Component {
        constructor(props){
          super(props);
          this.state={
            grupos:[],
            newUsuario:{
              name:'',
              email:'',
              password:'',
              GrupoId:'',
              Nombre:'',
              Apellido:'',
              CI:'',
              FN:'',
              direccion:'',
            }
          }

          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleInput = this.handleInput.bind(this);
        }
   
                /* This method dynamically accepts inputs and stores it in the state */
                handleInput(key, e) {
                  
                  /*Duplicating and updating the state */
                  var state = Object.assign({}, this.state.newUsuario); 
                  state[key] = e.target.value;
                  this.setState({newUsuario: state });
                }
                handleSubmit(e) {
                  //preventDefault prevents page reload   
                  e.preventDefault();
                  /*A call back to the onAdd props. The current
                   *state is passed as a param
                   */
                  this.props.onAdd(this.state.newUsuario);
                }

        mostrar(){
          return this.props.grupos.map(grupo =>{
            return (
              <option value={grupo.id}>{grupo.Nombre_Grupo}</option>
            );
        })
        }

 render(){
    return(
        <div>
        <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
          
            <div className="modal-header">
              <h4 className="modal-title">Nuevo Usuario</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            
            <div className="modal-body">
              <form  onSubmit={this.handleSubmit}>
             <div className="form-group">
             <label  htmlFor="email">Nombre de Usuario:</label>
               <input type="text" className="form-control"  onChange={(e)=>this.handleInput('name',e)} name="name"/>
              </div>
              <div>
              <label htmlFor="email">Email:</label>
               <input type="email" className="form-control"   onChange={(e)=>this.handleInput('email',e)} name="email"/>
              </div>
                <div className="form-group">
              <label htmlFor="pwd">Contraseña:</label>
               <input type="password" className="form-control"  onChange={(e)=>this.handleInput('password',e)} name="password"/>
              </div>
              <div className="form-group">
              <label  htmlFor="email">Asignar a Grupo:</label>
              <select name="GrupoId" class="browser-default custom-select"  onChange={(e)=>this.handleInput('GrupoId',e)}>
                {this.mostrar()}              
                </select> 
              </div>
              <div className="form-group">
              <label  htmlFor="text">Nombre:</label>
                <input type="text" className="form-control"  onChange={(e)=>this.handleInput('Nombre',e)} name="Nombre"/>
               </div>
               <div className="form-group">
              <label  htmlFor="text">Apellido:</label>
                <input type="text"  className="form-control"  onChange={(e)=>this.handleInput('Apellido',e)}   name="Apellido"/>
               </div>
               <div className="form-group">
              <label  htmlFor="text">Cedula de Identidad:</label>
                <input type="text"  className="form-control"   onChange={(e)=>this.handleInput('CI',e)} name="CI"/>
               </div>
               <div className="form-group">
              <label  htmlFor="date">Fecha Nacimiento:</label>
                <input type="date"  className="form-control"   onChange={(e)=>this.handleInput('FN',e)} name="FN"/>
               </div>
               <div className="form-group">
              <label  htmlFor="date">Direccion:</label>
                <input type="text"  className="form-control"   onChange={(e)=>this.handleInput('direccion',e)} name="direccion"/>
               </div>
               <input type="submit" preventDefault="true" value="Submit" />         
                 </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>)
  }
 
}

 



export default AddUsuarioComponent;