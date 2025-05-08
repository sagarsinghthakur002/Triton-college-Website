import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import cslap from '../../assets/images/cslap.png'
import hmlap from '../../assets/images/hmlap.png'
import lap from '../../assets/images/lap.png'
import lib from '../../assets/images/lib.png'
import { title } from 'framer-motion/client'


// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    img: lib,
    title: 'Libarary',
    description: 'Triton serves as a vibrant hub of learning and research, offering a comprehensive collection of...',
  },
  {
    img: hmlap,
    title: 'Hotel Management',
    description: 'We provide a hands-on real-world environment to our students who take Hotel Management subject under...',
  },
  {
    img: lap,
    title: 'Science Laboratory',
    description: 'Advanced instrumentation and cutting-edge technology, our labs support research, experimentation, and practical application across various...',
  },

  {
    img: cslap,
    title: 'Computer Lab',
    description: 'Students have access to modern workstations, high-speed internet, and industry-standard software, enabling them to develop...',
  },
]

function card() {
  useEffect(() => {
    gsap.utils.toArray('.card').forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: 'top 15%',
          end: 'bottom 15%',
          scrub: true,
        },
      })
    })
  }, [])

  return (
    <div className=' container' id='services'>
      <div className='sticky text-white flex flex-col items-center gap-10 py-[22vh]  '>
        {cards.map((card, index) => (
          <div
            key={index}
            className='card sticky top-[15vh] w-full max-w-4xl h-[60vh] rounded-2xl  flex flex-col items-center justify-center py-4  px-6 md:px-24 container bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'
            style={{ transform: `translateY(${index * 20}px)` }}
          >
            <div className='flex  items-center justify-center container relative '>
              <img src={card.img} alt={`Card image ${index + 1}`} className='w-[full] mb-4 shadow-lg' />
              <div className='absolute w-[28em] bg-white text-black top-[70%] -right-6 py-5 rounded-2xl shadow-lg flex flex-col items-start justify-start container h-[11em]'>
                <h1 className='text-2xl font-`semibold mb-4 text-blue-700 font-bold'>{card.title}</h1>

                <h3 className=' font-mono text-gray-500 text-[18px]'>
                  {card.description}
                </h3>


                {/* <button className= '  bg-blue-600 hover:bg-orange-600 transition-colors duration-300 text-white font-medium rounded-lg pl- py-2 mt-6'>
            Read More
          </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default card
