import React from "react";
import App from "../App";
import { Link, NavLink } from "react-router-dom";

export default  function Header(){
    return(
        <>
        <div className="header-section">
        <h3><Link to="/"><img src="src/assets/images/progress.jpg" className="logo"/></Link>ARN.IO</h3>
        <ul className="header-list">
            <li><NavLink to="/" id="nav-sect">Home</NavLink> </li>
            <li> <NavLink to="/Dashboard" id="nav-sect">Workspace</NavLink>
            </li>
            <NavLink to="/Authenticate"id="nav-sect" className="hide" >Get started</NavLink>
            
        </ul>
        </div>
        
        </>
    )
}