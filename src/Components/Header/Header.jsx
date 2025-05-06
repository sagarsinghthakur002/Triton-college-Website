import React from 'react'
import './Header.css'
import { IoMdCall } from "react-icons/io";
import { LuMail } from "react-icons/lu";

function Header() {
  return (
    <div className='header container'>
        <h2 className='text-amber-300'><LuMail className='mail'/>info@triton</h2>
        <h2 className='text-amber-300'><IoMdCall className='call'/> +977 01-5104450</h2>
    </div>
  )
}

export default Header
