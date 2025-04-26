import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";
import img5 from "../../assets/images/image5.png";

const testimonialData = [
    {
        id: 1,
        name: "Anish",
        text: "Triton College gave me a great start to my academic journey. The supportive professors and small class sizes made learning easier and more personal.",
        img: img1,
        rating: 5,
    },
    {
        id: 2,
        name: "Alisha",
        text: "Transferring to Triton was the best decision I made. The advisors helped me stay on track and plan for a smooth transfer to a university.",
        img: img2,
        rating: 4,
    },
    {
        id: 3,
        name: "Kritan",
        text: "I loved being part of student life at Triton. From clubs to events, it made my college experience fun and meaningful.",
        img: img3,
        rating: 5,
    },
    {
        id: 4,
        name: "Samir",
        text: "As a first-generation student, I was nervous at first. But Triton gave me the support and confidence to keep going and succeed.",
        img: img4,
        rating: 4,
    },
    {
        id: 5,
        name: "Suman",
        text: "As a Science student, I appreciated the hands-on training and modern labs. Triton really prepared me for a career in healthcare.",
        img: img5,
        rating: 5,
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2, slidesToScroll: 1 },
        },
        {
            breakpoint: 600,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
    ],
};

function renderStars(rating) {
    return [...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-400"}>
            ★
        </span>
    ));
}

function Testimonials() {
    return (
        <div className="container mx-auto py-10 px-4">
            <Slider {...settings}>
                {testimonialData.map((data, index) => (
                    <motion.div
                        key={data.id}
                        className="my-6 px-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="flex  flex-row   rounded-xl bg-blue-600 relative h-[300px] w-[50%] md:w-[97%]   z-10  ">
                            <div className=" flex flex-col items-center justify-center ">
                                
                            <img
                                src={data.img}
                                alt={data.name}
                                className="rounded-full size-[7em] object-cover"
                            />
                           
                            <div className="flex flex-col justify-center  w-[70%] ">
                                <h2 className="  text-white  text-center  text-[15px] ">
                                    {data.text}
                                </h2>
                                <div className="flex justify-center mb-2">
                                    {renderStars(data.rating)}
                                </div>
                                <h1 className="text-base font-bold text-shadow-white text-center">
                                    {data.name}
                                </h1>
                            </div>

                            
                        </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
}

export default Testimonials;
