import React from 'react'
import cslap from "../../assets/images/cslap.png"
import hmlap from "../../assets/images/hmlap.png"
import lap from "../../assets/images/lap.png"
import lib from "../../assets/images/program2.png"

function Facilities() {
  return (
    <div className=' h-[70vh] flex flex-col justify-center bg-gray-200 '>  
      <div className='container flex relative '>
        <img src={cslap} alt="CS Lab" className='w-[40%]  object-cover' />
        <div className='w-[27%] pl-4 absolute bg-gray-400 top-[19rem] left-[24%] rounded-lg shadow-lg '>
          <h2 className='text-center text-2xl font-bold'>Computer Science Lab</h2>
          <h3 className='font-mono text-[10px]  text-center'>Our computer science lab is equipped with the latest technology and software to provide students with hands-on experience in programming, networking, and cybersecurity.</h3>
        </div>
      </div>
    </div>
  )
}

export default Facilities
