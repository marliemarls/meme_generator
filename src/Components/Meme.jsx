import React from "react"
import memesData from "../memesData.jsx"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"}
    )
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange () {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
            
        }))
    }

    return (
        
        <main>
            <div className="form">
                <div>
                    <label className="form--label">Top text</label>
                    <input
                        type="text"
                        placeholder="Top Text"
                        className="form--input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                
                <button
                    className="form--button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}