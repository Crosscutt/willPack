import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './RouterComponent';
import firebase from 'firebase';

class Main extends Component {
    render() {
        return (
           <div>
             <App idLog={this.props.data} data1={this.props.data1}></App>
           </div>
        );
    }
}
 
export default Main;
 

firebase.initializeApp({
    apiKey: "AIzaSyAZYuBtz8dT72PkGHQrdVpiG5Wq3NdzlBI",
    authDomain: "swpp-6e4aa.firebaseapp.com",
    databaseURL: "https://swpp-6e4aa.firebaseio.com",
    projectId: "swpp-6e4aa",
    storageBucket: "swpp-6e4aa.appspot.com",
    messagingSenderId: "938682023696"
});

if (document.getElementById('root')) {
    var data=document.getElementById('root').getAttribute('data');
    var data1=document.getElementById('root').getAttribute('data1');
    ReactDOM.render(<Main  data1={data1} data={data}/>, document.getElementById('root'));
}