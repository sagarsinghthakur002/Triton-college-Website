import React from 'react'
import about from "../../assets/images/about.jpg"
import play from "../../assets/images/play.png"
import './About.css'

function About({setPlayState}) {
  return (
    <div className="container containers mx-auto bg-gray-200 py-10 px-4" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        <div className="relative" data-aos="fade-right">
          <img src={about} alt="about" className="  sm:h-[400px] object-cover rounded-lg" />
          <img src={play} alt="play" className="play-icon" onClick={()=>
            {setPlayState(true)}} />
        </div>

        <div className="" data-aos="zoom-in">
          <h3 className="text-blue-700 text-lg font-semibold">About Triton International College</h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">We Transform You</h2>
          <h3 className="text-gray-600 mb-4 ">
            Embark on a transformative educational journey with our college’s comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
          </h3>
          <h3 className="text-gray-600 mb-4 text-sm sm:text-base">
            With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
          </h3>
          <h3 className="text-gray-600 text-sm sm:text-base">
            Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default About
