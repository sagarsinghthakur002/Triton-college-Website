import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import cslap from '../../assets/images/cslap.png'
import hmlap from '../../assets/images/hmlap.png'
import lap from '../../assets/images/lap.png'
import lib from '../../assets/images/lib.png'

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
    <div className='container mx-auto px-4' id='services'>
      <div className='text-white flex flex-col items-center gap-10 py-[10vh] md:py-[22vh]'>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card sticky md:top-[15vh] w-full max-w-4xl rounded-2xl flex flex-col items-center justify-center py-4 px-4 md:px-24 bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${
              index === 0 ? 'mt-0' : 'mt-12'
            } ${index !== 0 ? 'md:h-[60vh]' : 'md:h-[60vh]'} h-auto`}
            style={{ transform: `translateY(${index * 20}px)` }}
          >
            <div className='flex flex-col md:flex-row items-center justify-center w-full relative'>
              <img
                src={card.img}
                alt={`Card image ${index + 1}`}
                className='w-full md:w-[50%] mb-4 md:mb-0 shadow-lg'
              />

              
              <div className='w-full md:w-[28em] md:absolute md:top-[70%] md:-right-6 bg-white text-black py-5 rounded-xl shadow-lg flex flex-col items-center justify-center px-4 mt-4 md:mt-0 md:h-[11em]'>
                <h1 className='text-xl md:text-2xl font-bold mb-3 pl-4 text-blue-700'>
                  {card.title}
                </h1>
                <h3 className='text-sm md:text-[18px] font-mono text-gray-600 place-items-center container'>
                  {card.description}
                </h3>
              </div>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  )
}

export default card
