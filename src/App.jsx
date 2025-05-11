import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Header from './Components/Header/Header'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import { FaGraduationCap } from "react-icons/fa6";
import About from './Components/About/About'
import { GrUserManager } from "react-icons/gr";
import AOS from "aos";  
import "aos/dist/aos.css";
import Testimonials from './Components/Testimonials/Testimonals'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact.jsx'
import Facilities from './Components/Facilities/Facilities'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx'




function App() {

  useEffect(() => {  //initialize AOS library 
    AOS.init({
      duration: 100,
      easing: "ease-in-sine",
      offset: 101,
      delay: 101,
    });
  
    AOS.refresh();
  }, []);

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <div className='container'>

        <Title title="College Information" icon={<FaGraduationCap className="title-icon sm:text-2xl"  />} />
        <About setPlayState={setPlayState} />

        <Title subTitle="Our Program " title="What We Offer" icon={<GrUserManager
          className="title-icon" />} />
        <Program />

        <Title subTitle="Facilities" title="Our Services & Facilities" />
        <Facilities />

        <Title subTitle="Testimoinal " title="Students say about Triton ?" />
        <Testimonials />

        <Title subTitle="contact us" title="Get in Touch" id='contact'/>
        <Contact  />

        <Title />
      </div>
        <Footer />
       
       <VideoPlayer playState={playState} setPlayState={setPlayState} />

    </div>
  )
}

export default App
