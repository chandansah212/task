import React from 'react'

const Register = () => {
    return (
        <div className="login">
        <div className="login-container">
        <div className="login-left">
        <h1>Register</h1>
       
        <div className="details">
            <form>
            <input placeholder="First Name" required type="text"/>
            <input placeholder="Last Name" required type="text"/>
            <input placeholder="Email" required type="email"/>
            <input placeholder="Password" required type="password"/>
            <input placeholder="Phone Number" required type="tel"/>
            <div> <button>Register</button></div>
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

export default Register

