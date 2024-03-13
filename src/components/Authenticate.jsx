import React from "react";

export default function Authenticate(){
    return(
        <>
        <div className="authenticate">
            <img src="src/assets/images/login.jpg" id="login-img"/>
            <form className="form-section">
            <input type="email" placeholder="Gmail account" name="email"className="input" id="input-email"/>
            <input type="password" placeholder="password" name="password" className="input"id="input-password"/>
            <button id="login-btn">login</button>
            <div className="lower-input">
                <p>Don't have an account?</p>
                <p><a href="#" className="signup-con">signup</a></p>
            </div>
        
            </form>
        
        </div>
        
        </>
    )
}