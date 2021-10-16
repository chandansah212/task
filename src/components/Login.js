import React from 'react'
import "./login.css"
const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
            <div className="login-left">
            <h1>Login</h1>
           <div className="login-icon">
            <a href="https://www.facebook.com"> <i class="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com"><i class="fab fa-twitter"></i>  </a>
            </div> 
            <h4>or use your account</h4>
            <div className="details">
                <form>
                <input placeholder="Email" required type="email"/>
                <input placeholder="Password" required type="password"/>
                <h3>Forgot your Password?</h3>
                <button>Log in</button>
                </form>
            </div>
            
            </div>
            
            <div className="login-info">
              <div  className="top-info"><h4>HTML CSS LOGIN Form</h4></div> 
             <div className="bottom-info">
                 <h4 >This login form is created using pure HTML and CSS.For social icons,FontAwesome is used.</h4>
             </div>
            </div>
            </div>
        </div>
    )
}

export default Login
