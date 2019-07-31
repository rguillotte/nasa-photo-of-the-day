import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Header(){

    const [date, setDate] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(results => {      
            setDate(results.data.date);  
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <div className="Header">
            <h1>NASA Photo of the Day!</h1>
            <h3>{date}</h3>
        </div>
    );
}