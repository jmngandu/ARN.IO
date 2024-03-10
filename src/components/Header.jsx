import React from "react";
import App from "../App";

export default  function Header(){
    return(
        <>
        <div className="header-section">
        <h3>ARN.IO</h3>
        <ul className="header-list">
            <li> Home </li>
            <li> Workspace</li>
            <li className="get-started">Get started</li>
        </ul>
        </div>
        
        </>
    )
}