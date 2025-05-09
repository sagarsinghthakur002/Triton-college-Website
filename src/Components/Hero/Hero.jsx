import React from 'react'
import './Hero.css'
import { HiArrowNarrowRight } from "react-icons/hi";
function Hero() {
  return (
    <div className='hero container ' id='hero'>
      <div className='hero-text'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p className='font-mono'>Our cutting-edge curriculum is designed to empower students with the knowledge,
  skills, and experiences needed to excel in the dynamic field of education.</p>
        <button className='btn'>Get Started <HiArrowNarrowRight className='arrow' />
        </button>
      </div>
      
    </div>
  )
}

export default Hero
