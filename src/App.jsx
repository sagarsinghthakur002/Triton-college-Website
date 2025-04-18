import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Header from './Components/Header/Header'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import { FaGraduationCap } from "react-icons/fa6";
import About from './Components/About/About'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle="Our Program " title="What We Offer" icon={<FaGraduationCap className="title-icon" />} />  
      <Program />
      <About />
      </div>
    </div>
  )
}

export default App
