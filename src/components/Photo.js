import React from "react";


export default function Photo(props){
    return(
        <img className="Photo" src={props.imgURL} alt="NASA photo of the day"/>
    );

}