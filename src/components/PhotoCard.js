import React, {useState, useEffect} from "react";
import axios from "axios";
import Photo from "./Photo";
import PhotoExplanation from "./PhotoExplanation";

export default function PhotoCard(){

    const [photo, setPhoto] = useState([]);
    const [photoText, setPhotoText] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(results => {
            console.log(results.data);
            setPhoto(results.data.url);
            setPhotoText(results.data.explanation);
            setTitle(results.data.title);
            
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="PhotoCard">
            <h1 className="title">{title}</h1>
            <Photo imgURL={photo}/>
            <PhotoExplanation imgText={photoText} />
        </div>    

    );


}