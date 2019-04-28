import React,{Component} from 'react';



class PermisosAll extends Component{
    constructor(props){
        super(props);
        this.state={
            permisos:[],
        }
    }

    Actualizar(){
      const url=`/buscar/${this.props.idGrupo}`;
      fetch(url)
      .then(response =>{
          return response.json();
      })
      .then(permisos => {
         this.setState({permisos});
      });
  }
    
    buscar(){
      this.Actualizar();
        return this.state.permisos.map(permiso =>{
            return (
                <div>
                <li key={permiso.id}>
                {permiso.Nombre}
                </li>
                </div>

            )
        })
    }


    render(){
        return(
            <div class="modal fade" id="myModa" >
                          <div class="modal-dialog">
                            <div class="modal-content">
                            
                              <div class="modal-header">
                                <h4 class="modal-title">Permisos de Este Grupo</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                              </div>
                              
                              <div class="modal-body">
                              <ul>
                                Hola
                              {this.buscar()}
                              </ul>
                              </div>
                              
                              <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                              </div>
                              
                            </div>
                          </div>
                        </div>
        )
    }
}

export default PermisosAll;