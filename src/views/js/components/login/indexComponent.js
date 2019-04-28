import React,{Component} from 'react';
import './style.css';
import {PostData} from './PostData';

class LoginComponent extends Component {

   constructor(props){
      super(props);
      this.state={
         username:'',
         password:''
      }

       this.login=this.login.bind(this);
       this.onChange=this.onChange.bind(this);
   }
 
   
   login(){
      PostData('',this.state).then((result)=>{
         let responseJSON = result;
      });
   }

   onChange(e){
    
      this.setState({[e.target.name]: e.target.value});
      console.log(this.state);
   }
    render(){
        return(
         <div>
          <div class="sidenav">
         <div class="login-main-text">
            <h1>Welcome to Cross-Home </h1>
            <h3>The solution in your software.</h3>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
         <div class="login-form">
               <form>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name"/>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
                  <button type="submit" class="btn btn-secondary">Register</button>
               </form>
            </div>
         </div>
      </div>
         </div>
        );
    }
}

export default LoginComponent;