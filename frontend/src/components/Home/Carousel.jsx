import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const slides = [
    {
        id: 1,
        background: "./ba1.jpg",
        image: "./tm1.jpg",
        name: "Chan Dra Dev",
        position: "Frontend Developer",
        title: "Innovate Your Business",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
        id: 2,
        background: "./ba1.jpg",
        image: "./tm2.jpg",
        name: "In Dra Dev",
        position: "Backend Developer",
        title: "Explore New Horizons",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
        id: 3,
        background: "./ba1.jpg",
        image: "./tm1.jpg",
        name: "Ghay Dra Dev",
        position: "SEO Developer",
        title: "Empower Your Team",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[900px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 bg-[rgba(1,12,41,0.85)]"
                style={{ backgroundImage: `url(${slides[currentIndex].background})` }}
            ></div>

            {/* Overlay for Darker Effect */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Fixed Text at the Top */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center text-white w-3/4 md:w-1/2">
                <h2 className="text-4xl font-bold mt-16">What Client’s Say About Us</h2>
                <p className="mt-4 text-sm md:text-[16px] text-white pb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.
                </p>
            </div>

            {/* Content Wrapper */}
            <div className="relative grid grid-cols-5 items-center px-32 pt-64">
                {/* Left Image */}
                <div className="col-span-2 flex-row justify-center w-full">
                    <div className="flex justify-center">
                        <img src={slides[currentIndex].image} alt="Slide Image" className="w-full h-[500px] rounded-lg shadow-lg" />
                    </div>
                    <h1 className="text-white text-center text-xl font-bold mt-4">{slides[currentIndex].name}</h1>
                    <p className="text-gray-400 text-center text-[16px] font-medium">{slides[currentIndex].position}</p>
                </div>

                {/* Right Text Content */}
                <div className="col-span-3 text-[#010c29] bg-white w-full px-12 py-12">
                    {/* <h2 className="text-4xl font-bold">{slides[currentIndex].title}</h2> */}
                    <div>
                        <FaQuoteLeft className="text-4xl text-[#fd1616]" />
                    </div>
                    <p className="mt-4 text-[16px] font-medium">{slides[currentIndex].description}</p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-[24%] right-28 transform -translate-x-1/2 flex gap-4">
                {/* <button onClick={prevSlide} className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                    <FaArrowLeft size={20} />
                </button> */}
                <button onClick={nextSlide} className="p-3 bg-[#fd1616] text-white rounded-full hover:bg-gray-700">
                    <FaArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
