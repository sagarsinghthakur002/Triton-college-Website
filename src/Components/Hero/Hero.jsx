import React from 'react'
import './Hero.css'
import { HiArrowNarrowRight } from "react-icons/hi";
function Hero() {
  return (
    <div className='hero container '>
      <div className='hero-text'>
        <h1>We Ensure better educetion for a better worls</h1>
        <p>our cutting-edge curriculum is designed to empower studestd with the knowlegge ,  skill abnd expriences neede to excel in the dynamic field of education</p>
  -      <button className='btn'>Get Started <HiArrowNarrowRight className='arrow' />
        </button>
      </div>
      
    </div>
  )
}

export default Hero
