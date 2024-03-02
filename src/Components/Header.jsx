import React from "react";
import IMAGES from '../images/Image1.jsx'


export default function Header() {
    return (
        <header className="header">
            <img 
                src={IMAGES.image1}
                className="header--image"
            />
            <h1 className="header--title">Header Component</h1>
            <h4 className="header--project">Meme Generator</h4>
        </header>
    )
}