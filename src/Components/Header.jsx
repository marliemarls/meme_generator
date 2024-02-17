import React from "react";


export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/trollface.png" 
                className="header--image"
            />
            <h1 className="header--title">Header Component</h1>
            <h4 className="header--project">Meme Generator</h4>
        </header>
    )
}