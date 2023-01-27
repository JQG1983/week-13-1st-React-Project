
import React from "react";


const LoginForm = () => {
    return (
       <body>
            <div className= "cover">
              <h3>Login</h3>
              <input id="userName" type = "text"  placeholder= "username" />
              <input id="passWord" type = "password"  placeholder= "password" />
              <button >Submit</button>
            </div>
       </body>
    )
};

export default LoginForm;