import React from "react";


export default function PhotoExplanation(props){
    return(
        <div className="PhotoExplanation">
        <p>{props.imgText}</p>
        </div>
    );
}