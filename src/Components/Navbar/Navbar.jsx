import React, { use, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

function Navbar() {

  const [sticky, setSticky] = React.useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }
  , [])
  
  return (
    <nav className={`container  ${sticky ? 'dark-nav': ''}`}>

        <a href='/' ><img  src={logo}
        alt="logo" className='logo' /> </a>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#services">About</a></li>
            <li><a href="#contact">Gallery</a></li>
            <button className='btn' >contact</button>
        </ul>
        
    </nav> 
  )
}

export default Navbar
