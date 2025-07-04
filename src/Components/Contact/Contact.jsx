import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FcVoicePresentation } from "react-icons/fc";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  
} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";


const Contact = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return (
    <div className="container h-[90%] bg-gray-200 pb-20 rounded-xl" id='contact'>
  <div className="w-full h-auto lg:h-[30rem] m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center py-10 lg:py-20 gap-10 px-4">
  
    {/* Left Side */}
    <div className="flex flex-col justify-center items-start gap-5 lg:p-20 p-4 sm:p-6 ml-[5px]">
      <h1 data-aos="zoom-in" data-aos-delay="200" className="text-[#212EA0] font-semibold flex items-center text-xl sm:text-2xl">
        Send us a message <FcVoicePresentation className='text-3xl sm:text-4xl gap-2' />
      </h1>
      <h1 data-aos="zoom-in" data-aos-delay="400" className="text-black text-[15px] sm:text-[17px] font-mono leading-5">
        Feel free to reach out through the contact form or find our contact information below...
      </h1>
      <h1 className='text-[18px] sm:text-[20px] font-semibold flex items-center justify-center' data-aos="zoom-in">
        Follow us.. <FcAbout className='text-xl sm:text-2xl' />
      </h1>
      <div className="flex justify-start items-center gap-3 mt-2 flex-wrap" data-aos="zoom-in">
        <div className="p-2 sm:p-3 rounded-xl text-[#1d67de] hover:text-blue-600 cursor-pointer transform hover:scale-110 transition duration-300 ">
          <FaFacebookF className="size-6 sm:size-8" />
        </div>
        <div className="p-2 sm:p-3 rounded-xl text-[#1d67de] hover:text-pink-600 cursor-pointer transform hover:scale-110 transition duration-300">
          <FaInstagram className="size-6 sm:size-8" />
        </div>
        <div className="p-2 sm:p-3 rounded-xl text-[#1d67de] hover:text-blue-500 cursor-pointer transform hover:scale-110 transition duration-300">
          <FaTwitter className="size-6 sm:size-8" />
        </div>
        <div className="p-2 sm:p-3 rounded-xl text-[#1d67de] hover:text-red-600 cursor-pointer transform hover:scale-110 transition duration-300">
          <FaYoutube className="size-6 sm:size-8" />
        </div>
      </div>
    </div>

    {/* Right Side Form */}
    <div data-aos="zoom-in" className="p-6 sm:p-10 flex flex-col justify-center items-start gap-4 sm:gap-6 rounded-xl">
      <h1 className="text-xl sm:text-2xl text-black font-semibold">Send a message today</h1>
      <input type="text" placeholder="Enter your full name here" className="w-full px-4 py-2 border-2 border-gray-400 rounded-[5px] bg-blue-100 text-sm" />
      <input type="email" placeholder="Enter your Email" className="w-full px-4 py-2 border-2 border-gray-400 rounded-[5px] bg-blue-100 text-sm" />
      <input type="number" placeholder="Enter your number" className="w-full px-4 py-2 border-2 border-gray-400 rounded-[5px] bg-blue-100 text-sm" />
      <textarea cols="30" rows="5" placeholder="Enter your message here..." className="w-full px-4 py-2 border-2 border-gray-400 rounded-[5px] bg-blue-100 text-sm"></textarea>
      <button className="bg-blue-600 w-full text-md px-6 py-2 sm:px-8 sm:py-3 text-white font-semibold rounded-xl cursor-pointer hover:bg-[#25A4E5]">
        SEND EMAIL
      </button>
    </div>
  </div>
</div>
  );
};

export default Contact;
