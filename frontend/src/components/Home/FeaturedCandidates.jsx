import React from "react";
import Slider from "react-slick";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuAlarmClockCheck } from "react-icons/lu";
import { BiFilterAlt } from "react-icons/bi";
import { MdOutlineAddLocation } from "react-icons/md";


const FeaturedCandidates = () => {
    // Featured Candidates Data
    const candidates = [
        {
            id: 1,
            name: "John Doe",
            category: "Software Engineer",
            address: "San Francisco, USA",
            time: "2 Days Ago",
            image: "./c1.jpg",
        },
        {
            id: 2,
            name: "Emma Smith",
            category: "Graphic Designer",
            address: "London, UK",
            time: "5 Days Ago",
            image: "./c2.jpg",
        },
        {
            id: 3,
            name: "Michael Brown",
            category: "Marketing Manager",
            address: "New York, USA",
            time: "9 Day Ago",
            image: "./c3.jpg",
        },
        {
            id: 4,
            name: "Sophia Davis",
            category: "UI/UX Designer",
            address: "Toronto, Canada",
            time: "3 Days Ago",
            image: "./c1.jpg",
        },
        {
            id: 5,
            name: "David Johnson",
            category: "Data Scientist",
            address: "Berlin, Germany",
            time: "6 Days Ago",
            image: "./c2.jpg",
        },
        {
            id: 6,
            name: "Lily Wilson",
            category: "Product Manager",
            address: "Sydney, Australia",
            time: "12 Days Ago",
            image: "./c3.jpg",
        },
        {
            id: 7,
            name: "Ethan Martinez",
            category: "Cyber Security Analyst",
            address: "Dubai, UAE",
            time: "2 Days Ago",
            image: "./c1.jpg",
        },
        {
            id: 8,
            name: "Ava Thomas",
            category: "AI Engineer",
            address: "Tokyo, Japan",
            time: "5 Days Ago",
            image: "./c2.jpg",
        },
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <div className="container mx-auto px-32 py-16">
            <h2 className="text-5xl font-bold text-center mb-4">Featured Candidates</h2>
            <p className="text-[16px] text-gray-500 text-center mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
            {/* Slider Wrapper */}
            <Slider {...settings}>
                {candidates.map((candidate) => (
                    <div key={candidate.id} className="p-4">
                        <div className="relative rounded-lg text-center">
                            {/* Image Wrapper with Hover Effect */}
                            <div className="relative w-full h-[420px] overflow-hidden rounded-t-lg group">
                                <img
                                    src={candidate.image}
                                    alt={candidate.name}
                                    className="w-full h-[80%] object-cover transition duration-300"
                                />
                                {/* Social Icons (Appear on Hover) */}
                                <div className="absolute inset-0 top-[45%] flex items-start justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <div className="flex gap-3 text-white text-lg">
                                        <a href="#" className="bg-[#fd1616] hover:text-white hover:bg-[#010c29] p-2 rounded-full transition">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="bg-[#fd1616] hover:text-white hover:bg-[#010c29] p-2 rounded-full transition">
                                            <FaTwitter />
                                        </a>
                                        <a href="#" className="bg-[#fd1616] hover:text-white hover:bg-[#010c29] p-2 rounded-full transition">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Candidate Info */}
                            <div className="p-4 absolute -bottom-5 w-full">
                                <div className="bg-white shadow-lg rounded-lg w-full p-4">
                                    <h3 className="text-xl font-bold hover:text-[#fd1616]">{candidate.name}</h3>
                                    <p className="text-gray-500 font-medium text-[16px] pt-2 flex justify-center items-center gap-2"><BiFilterAlt />{candidate.category}</p>
                                    <p className="text-gray-500 text-[16px] font-medium pt-2 pb-5 flex justify-center items-center gap-2"><MdOutlineAddLocation />{candidate.address}</p>
                                    <div className="flex justify-between items-center border-t border-dashed border-gray-500 pt-3">
                                        <p className="text-gray-400 text-sm flex justify-start items-center font-medium gap-1"><LuAlarmClockCheck />{candidate.time}</p>

                                        <button className="p-[6px] border border-[#fd1616] border-dashed rounded-full text-[#fd1616] hover:bg-[#fd1616] hover:text-white transition">
                                            <IoMdHeartEmpty className="text-[17px]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeaturedCandidates;
