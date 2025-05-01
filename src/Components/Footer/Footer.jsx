import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaArrowUp,
} from "react-icons/fa";
import { FaFax } from "react-icons/fa6";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
import logo from "../../assets/images/logo2.png";


const Footer = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="footer-container">
      <footer
        className="w-full h-[40vh] grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10 p-10 lg:p-20 container  footer">
       

        {/* Logo Section */}
        {/* <div
          className="flex flex-col justify-center items-start gap-5"
          data-aos="fade-right"
        >
          <img
            src={logo}
            alt="logo"
            className=" h-[150px] "
          /> 
        </div> */}
        
          
           



        {/* About Us Section */}
        <div className="flex flex-row justify-center items-center gap-20  ">
        <img
            src={logo}
            alt="logo"
            className=" h-[150px] "
          /> 


        <div
          className="flex flex-col justify-center items-start gap-5 mr-10"
          data-aos="fade-right"
        >
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <h2 className="text-white text-justify">
          We are dedicated unconditionally to provide quality education to the 21st century generation while keeping pace with our traditional culture and values.
          </h2>


          <div className="flex justify-start items-center gap-4 mt-2">
            <div className="p-3 rounded-xl text-gray-300   hover:text-blue-600 cursor-pointer transform hover:scale-110 transition duration-300 ">
              <FaFacebookF className="size-8" />
            </div>
            <div className="p-3 rounded-xl text-gray-300  hover:text-pink-600 cursor-pointer transform hover:scale-110 transition duration-300">
              <FaInstagram className="size-8" />
            </div>
            <div className="p-3 rounded-xl text-gray-300  hover:text-blue-500 cursor-pointer transform hover:scale-110 transition duration-300">
              <FaTwitter className="size-8" />
            </div>
            <div className="p-3 rounded-xl text-gray-300  hover:text-red-600 cursor-pointer transform hover:scale-110 transition duration-300">
              <FaYoutube className="size-8" />
            </div>
          </div>


          
        </div>
        </div>



        {/* Contact Us Section */}
        <div
          className="flex flex-col justify-center items-start gap-5"
          data-aos="fade-left"
        >
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <h2 className="text-slate-200">
            Seti Opi Marga, Koteshwor-32, Kathmandu, Nepal
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <FaMobile className=" size-5 text-gray-300 " />
            <h2 className="text-slate-200">+977 9823405745</h2>
          </div>
          <div className="flex items-center gap-3">
            <FaFax className=" size-5 text-gray-300 " />
            <h2 className="text-slate-200">+977-01-5104450</h2>
          </div>
          <div className="flex items-center gap-3">
            <IoMdMail className=" size-5 text-gray-300 " />
            <h2 className="text-slate-200">info@triton.edu.np</h2>
          </div>


        </div>
          <div className="flex items-center   ">
          <h1 className="text-white mb-6  font-semibold">
            Copyright &copy; Sagar Thakur. All Rights Reserved.
          </h1>
            </div>
      </footer>
      {/* Scroll to top button */}
      <div className="bg-blue-600  rounded-3xl hover:bg-[#25A4E5] cursor-pointer fixed lg:bottom-12 bottom-6 right-6 h-11 w-11 flex justify-center items-center shadow-lg shadow-blue-500/50 z-10">

        <Link to="hero" spy={true} offset={-100} smooth={true} >
          <FaArrowUp className="size-7 text-white " />
        </Link>

      </div>
    </div>
  );
};

export default Footer;
