import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutHero = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('./ab1.jpg')", // Replace with your image URL
                }}
            >
                <div className="absolute inset-0 bg-[#010C29D9] bg-opacity-50">
                </div>
            </div>

            {/* Lines Overlay */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="relative w-full h-full">
                    {/* First Line (Shifted Left) */}
                    <div className="absolute w-[3px] h-full bg-white bg-opacity-10 left-[25%] top-0">
                        <div className="absolute w-full h-[10px] bg-red-600 left-0 top-[-5px] animate-lineMove"></div>
                    </div>

                    {/* Center Line */}
                    <div className="absolute w-[3px] h-full bg-white bg-opacity-10 left-1/2 top-0">
                        <div className="absolute w-full h-[10px] bg-red-600 left-0 top-[-5px] animate-lineMove"></div>
                    </div>
                    {/* Center Line */}
                    <div className="absolute w-[3px] h-full bg-white bg-opacity-10 left-[75%] top-0">
                        <div className="absolute w-full h-[10px] bg-red-600 left-0 top-[-5px] animate-lineMove"></div>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-center items-center w-full h-full">
                <div className="">
                    <h1 className="text-4xl font-bold text-center text-white mb-4">About Us</h1>
                    <div className="flex justify-center items-center gap-4 border border-gray-400 rounded-full px-4 py-2">
                        <Link to='/' className="text-white text-[16px] font-medium hover:text-[#fd1616]">Home</Link>
                        <FaAngleRight className="text-white text-[16px] font-medium" />
                        <p className="text-white text-[16px] font-medium">About Us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
