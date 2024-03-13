import React from "react";
import App from "../App";

export default  function Header(){
    return(
        <>
        <div className="header-section">
        <h3><img src="src/assets/images/progress.jpg" className="logo"/>ARN.IO</h3>
        <ul className="header-list">
            <li> Home </li>
            <li> Workspace</li>
            <button className="get-started"><a link="aunthentication" href="https://duckduckgo.com/">Get started</a></button>
            
        </ul>
        </div>
        
        </>
    )
}