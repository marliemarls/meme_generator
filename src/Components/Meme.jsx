import React from "react"
import memesData from "../memesData.jsx"

export default function Meme() {

    function getMemeImg(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
    }
 
    return (
        <main>
            <form className="form">
                <div>
                    <label className="form--label">Top text</label>
                    <input
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                    />
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input
                        type="text"
                        placeholder="and take my money"
                        className="form--input"
                    />
                </div>
                <button
                    className="form--button" 
                    onClick={getMemeImg}
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}