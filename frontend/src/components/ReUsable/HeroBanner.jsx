import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroBanner = ({ title, backgroundImage, breadcrumbs }) => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div className="absolute inset-0 bg-[#010C29D9] bg-opacity-50"></div>
            </div>

            {/* Lines Overlay */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="relative w-full h-full">
                    {[25, 50, 75].map((position, index) => (
                        <div key={index} className={`absolute w-[3px] h-full bg-white bg-opacity-10 left-[${position}%] top-0`}>
                            <div className="absolute w-full h-[10px] bg-red-600 left-0 top-[-5px] animate-lineMove"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Title & Breadcrumbs */}
            <div className="absolute flex justify-center items-center w-full h-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
                    <div className="flex justify-center items-center gap-4 border border-gray-400 rounded-full px-4 py-2">
                        {breadcrumbs.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.link ? (
                                    <Link to={item.link} className="text-white text-[16px] font-medium hover:text-[#fd1616]">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <p className="text-white text-[16px] font-medium">{item.label}</p>
                                )}
                                {index < breadcrumbs.length - 1 && <FaAngleRight className="text-white text-[16px]" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
