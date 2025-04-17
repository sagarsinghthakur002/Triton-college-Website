import React from 'react'
import './About.css'
import about from '../../assets/images/about1.png'
import video from '../../assets/images/video.mp4'

function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} alt='about' />
            <img src={video} alt='about' />
        </div>

        <div className="about-right">
            <h3>About Triton International College </h3>
            <h2>We Transform You</h2>
            <p>Embark on a transformative educational journey with our college comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
      
    </div>
  )
}

export default About
