import React, {useState} from "react";


export default function Headers(){

    const [date] = useState(Date)

    return(
        <div>
            <h1>NASA Photo of the Day!</h1>
            <h3>{date}</h3>
        </div>
    );
}