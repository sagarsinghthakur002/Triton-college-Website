import React from 'react'
import './Title.css'
import { FaGraduationCap } from "react-icons/fa6";


function Title({subTitle, title, icon}) {
  return (
    <div className='title'>
        <p>{subTitle} </p>
        <h2> {title} {icon} </h2>
        
    </div>
  )
}

export default Title
