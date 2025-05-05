import React from 'react'
import './About.css'

import about from "../../assets/images/about.jpg"
import play from "../../assets/images/play.png"

function About() {
  return (
    <div className='container h-[90%] bg-gray-200 pb-20'>
    <div className='about h-[70vh]  flex justify-center items-center gap-10'>
      <div className="about-left">
        <img src={about} alt="about"  className='about-img'/>
        <img src={play} alt="about" className='play-icon'/>
        {/* <video src="/about.mp4" controls autoPlay muted loop className='play-icon' />  */}
        
      </div>

      <div className="about-right">

        <h3>About Triton International College </h3>
        <h2>We Transform You</h2>
        <p>Embark on a transformative educational journey with our college comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>

      </div>

    </div>
    </div>
  )
}

export default About
