import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
    <div className="bg-transparent pb-20">
      <section
        id="contact"
        className="bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10"
      >

        {/* left Side Content */}
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1 data-aos="zoom-in" data-aos-delay="200" className="text-red-500 font-semibold">
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[40px] font-semibold leading-10"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, a?
          </h1>
          <button className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black cursor-pointer">
            Contact
          </button>
        </div>

        {/* right Side Form */}
        <div
          data-aos="zoom-in"
          className=" p-10 flex flex-col justify-center items-start gap-6 rounded-xl"
        >
          <h1 className="text-2xl text-black font-semibold">
            Send a message today
          </h1>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-full px-6 py-3 border-2 border-gray-500 rounded-[5px]"
          />

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-6 py-3 border-2 border-gray-500 rounded-[5px]"
          />

          <input
            type="number"
            placeholder="Enter your number"
            className="w-full px-6 py-3 border-2 border-gray-500 rounded-[5px]"
          />
          
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter your message here..."
            className="w-full px-6 py-3 border-2 border-gray-500 rounded-[5px]"
          ></textarea>
          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black cursor-pointer">
            SEND EMAIL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
