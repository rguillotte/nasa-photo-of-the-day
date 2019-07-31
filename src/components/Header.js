import React, {useState} from "react";


export default function Header(){

    const [date] = useState(Date)

    return(
        <div className="Header">
            <h1>NASA Photo of the Day!</h1>
            <h3>{date}</h3>
        </div>
    );
}