import React from "react";
import App from "../App";
import Authenticate from "./Authenticate";

export default  function Header(){
    return(
        <>
        <div className="header-section">
        <h3>ARN.IO</h3>
        <ul className="header-list">
            <li> Home </li>
            <li> Workspace</li>
            <li className="get-started"><a link="aunthentication" href="authenticate">Get started</a></li>
            
        </ul>
        </div>
        
        </>
    )
}