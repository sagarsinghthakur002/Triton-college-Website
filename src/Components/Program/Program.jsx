import React from 'react'
import './Program.css'
import program_1 from '../../assets/images/program1.png'
import program_2 from '../../assets/images/program2.png'
import program_3 from '../../assets/images/program3.png'
import { FaGraduationCap } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { GiMaterialsScience } from "react-icons/gi";
import { HiArrowNarrowRight } from "react-icons/hi";

function Program() {
  return (
    <div className='programs '>
      <div className='program'>
        <img src={program_1} alt='program' />
        <div className='caption'>
        <GiMaterialsScience className='img' />
        <p>Science</p>
        <p>Know more <HiArrowNarrowRight className='arrow' /></p>
        </div>
      </div>


      <div className='program'>
        <img src={program_2} alt='program' />
        <div className='caption'>
        <FaGraduationCap className='img' />
        <p>Management</p>
        <p>Know more <HiArrowNarrowRight className='arrow' /></p>
        </div>
      </div>

      <div className='program'>
        <img src={program_3} alt='program' />
        <div className='caption'>
        <GoLaw className='img' />
        <p>Law</p>
        <p>Know more <HiArrowNarrowRight className='arrow' /></p>
        </div>
      </div>
    </div>
  )
}

export default Program
