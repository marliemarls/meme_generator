import React from 'react'
import Header from './Components/Header.jsx'
import Meme from './Components/Meme.jsx'
import './App.css'

export default function App() {
  const [user, setUser] = React.useState("Joe")

  return (

    <div>
      <Header />
      <Meme />
    </div>

  )
}

