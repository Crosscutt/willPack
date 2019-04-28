import React, { Component } from 'react';
import firebase from 'firebase';

class App extends Component {
  constructor () {
    super();
    this.state = {
      user: null,
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
    this.añadir=this.añadir.bind(this);
  }

  componentWillMount () {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });

  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha Cerrado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  

  fecha(){
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
      return (`${day}-0${month}-${year}`);
    }else{
      return (`${day}-${month}-${year}`);
    }
}
  añadir(){
    const { idLog }=this.props.location.state;
    const { username }=this.props.location.state;

    const record = {
       UserName:username,
       idUser:idLog,
       Url:location.href,
       Accion:"Hola men caca",
       Fecha : Date(Date.now()).toString(),
       dispositivo:navigator.userAgent || navigator.vendor || window.opera,

    }
    const dbRef = firebase.database().ref('Bitacora/Usuario/'+idLog);
    const newPicture = dbRef.push();
    newPicture.set(record);
  }
  renderLoginButton () {
    if (!this.state.user) {
      return (
        <div>
      

           <div class="card text-center">
          <div class="card-header">
            Log-Bitacora
          </div>
          <div class="card-body">
            <h5 class="card-title"><b>Bienvenido A ala Bitacora</b></h5>
            <div class="alert alert-primary" role="alert">
            Debe logearse con una cuenta de Google para ver el contenido        
            </div>   
            <div class="alert alert-danger" role="alert">
              Solo Personal Autorizado
             </div>                  
            <button onClick={this.handleAuth}  class="btn btn-success btn-block">
                    Iniciar sesión con Google
                  </button>      
            </div>
          <div class="card-footer text-muted">
          {Date(Date.now())}
          </div>
        </div>
        </div>

      );
    } else  {
      return (
        <div >

              <div class="card text-center">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title">¡Hola, { this.state.user.displayName }!</h5>
                  <button onClick={this.añadir}>Añadir</button>
                <button onClick={this.handleLogout} >Salir </button>
                </div>
                <div class="card-footer text-muted">
                   {
                     Date(Date.now())
                    
                   }
                </div>
              </div>
              </div>
      

      );
    }
  }

  render() {
    return (
      <div >
        <div >
        </div>
        { this.renderLoginButton() }
      </div>
    );
  }
}

export default App;