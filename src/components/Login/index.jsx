import React from  'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const  Login = () => {

   return (

    <div className="container">
        
     <div className="wrapper fadeInDown">
        <div id="formContent" style={{background: "none", float:"right"}}>
        <br/>
          
          <form action="api/login" method="post">
            <input type="text" id="login" className="fadeIn second" name="email" placeholder="Email" />
            <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" />
            <input type="submit" className="fadeIn fourth"  defaultValue="Log In" />
            
          </form>
         
        </div>
      </div>

    </div>
        
      
    );
  
}

export default Login;

