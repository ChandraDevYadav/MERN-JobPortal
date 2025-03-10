import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
    {
        name: "John Doe",
        position: "CEO, TechCorp",
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
        name: "Jane Smith",
        position: "Marketing Manager, BrandX",
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
        name: "Michael Johnson",
        position: "CTO, Innovatech",
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
        name: "Emily Davis",
        position: "HR Manager, PeopleFirst",
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
];

const ClientTestimonials = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="py-24 px-32 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-4">What Client’s Say About Us</h2>
            <p className="text-gray-500 text-lg text-center pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.</p>
            <div className="relative">


                {/* Testimonials */}
                <div className="grid grid-cols-2 gap-6">
                    {testimonials.slice(index, index + 2).map((testimonial, idx) => (
                        <div key={idx} className="">
                            <div className="bg-[#feebe6] hover:bg-[#fd1616] py-8 px-12 rounded shadow-md group">
                                <RiDoubleQuotesL className="text-4xl my-4 mt-3 text-[#fd987f] group-hover:text-white" />
                                <p className="text-gray-600 italic font-medium mb-4 text-[17px] group-hover:text-white">{testimonial.feedback}</p>
                            </div>
                            <div className="">
                                <h4 className="text-lg font-bold text-gray-800 pt-6 pb-1">{testimonial.name}</h4>
                                <p className="text-[16px] font-medium text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-[46%] -bottom-20 transform -translate-y-1/2 bg-[#fd987f] text-white p-3 rounded-full hover:bg-gray-900"
                >
                    <FaChevronLeft />
                </button>
                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-[46%] -bottom-20 transform -translate-y-1/2 bg-[#fd987f] text-white p-3 rounded-full hover:bg-gray-900"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default ClientTestimonials;
