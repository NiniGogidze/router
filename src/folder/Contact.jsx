import React from "react";
import './style.css';
import { useState } from "react";


function Contact() {
    const[IsLoggedIn, setIsLoggedIn ] = useState(false);
    const[userName, setUsarName  ] = useState("");


    return (
        <div>
            <h2 className="h2">contact</h2>
            <div className="input">
                <label>Name</label>
                <input type="Name" placeholder="Name" />
                <label>Email</label>
                <input type="Email" placeholder="Email" />
                <label>Message</label>
                <input type="Message" placeholder="Message" />
            </div>
            <button className="send-button" onClick={() => setIsLoggedIn(true)}>Send</button>
        </div>
    )
}


export default Contact;  