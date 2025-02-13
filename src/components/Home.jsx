import React from 'react'
import Portfolio from './Portfolio'
import About from './About'

import manLaptop from '/public/manLaptop.webp'
import keyboardDown from '/public/keyboard-down.svg'
const Home = () => {
  return (
    <div>
      <div className="hero" id="home">
       <div className="hero-image">
       <img src={manLaptop} alt="man with laptop" />
       <div className="hero-text">
        <h1>V Pavan Kumar</h1>
        <p>Software Engineer & Web Developer </p>
       </div>
       <div className="drop-down-arrow">
       
       <img src={keyboardDown} alt="" />
       </div>
       </div>
      </div>
    
      <div className="about">
        <About/>
      </div>
      <div className="portfolio">
        <h1>Portfolio</h1>
        <Portfolio/>
      </div>
    </div>
  )
}

export default Home
