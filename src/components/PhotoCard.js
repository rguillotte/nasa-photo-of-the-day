import React, {useState, useEffect} from "react";
import axios from "axios";
import Photo from "./Photo";

export default function PhotoCard(){

    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(results => {
            console.log(results.data.url);
            setPhoto(results.data.url);
            
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="PhotoCard">
            <Photo imgURL={photo}/>
        </div>    

    );


}