import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Header from './Components/Header/Header'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import { FaGraduationCap } from "react-icons/fa6";
import About from './Components/About/About'
import { GrUserManager } from "react-icons/gr";


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <div className='container'>
      <Title  title="College Information" icon={<FaGraduationCap className="title-icon" />} />  
      <About />
        <Title subTitle="Our Program " title="What We Offer" icon={<GrUserManager
 className="title-icon" />} />  
      <Program />
      
      <Title subTitle="Gallery " title="Collage Photo"  />  
      </div>
    </div>
  )
}

export default App
