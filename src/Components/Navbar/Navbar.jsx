import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <nav className='container'>
        <img  src={logo}
        alt="logo" className='logo' />

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Progrem</a></li>
            <li><a href="#services">About</a></li>
            <li><a href="#contact">Gallery</a></li>
            <button className='btn' >contact</button>
           
        </ul>
       
           

    </nav> 
  )
}

export default Navbar
