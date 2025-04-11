import React from 'react'
import './Title.css'
import { FaGraduationCap } from "react-icons/fa6";
function Title() {
  return (
    <div className='title'>
        <p>Our Program</p>
        <h2>What We Offer  <FaGraduationCap className='title-icon' /></h2>
        
    </div>
  )
}

export default Title
