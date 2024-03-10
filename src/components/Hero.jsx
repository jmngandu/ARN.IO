import React from "react";
import heroData from "./heroData";

export default function Hero(props){
 
    return(
        <>
        <div className="hero-section"> 
            <div className="hero-pages">
                <div className="hero-single">
                <h1>{props.title}</h1>
                <div className="inner-page">
                <h2>{props.source}</h2>
                <p>{props.firstDescription}</p>
                <p>{props.secondDescription} </p>
                </div>
                </div>
                <hr/>
            </div>            
        </div>
        </>
    )
}