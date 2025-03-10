import React from "react";
import { FaAngleDoubleRight, FaPinterest } from "react-icons/fa";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa6";
import { MdOutlineAddLocation } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#060f24] text-white relative">
            <div className="container mx-auto px-32 py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1">
                        <img
                            src="./logo1.png"
                            alt="Logo"
                            className="h-12 mb-4"
                        />
                        <p className="text-[16px] leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna. Sed eiusmod tempor incididunt ut.
                        </p>
                        <div className="flex justify-start items-center gap-3 pt-6">
                            <div className="bg-white hover:bg-[#fd1616] text-blue-900 p-2 hover:text-white rounded-full">
                                <FaFacebookF />
                            </div>
                            <div className="bg-white hover:bg-[#fd1616] text-blue-900 p-2 hover:text-white rounded-full">
                                <FaTwitter />
                            </div>
                            <div className="bg-white hover:bg-[#fd1616] text-blue-900 p-2 hover:text-white rounded-full">
                                <FaPinterest />
                            </div>
                            <div className="bg-white hover:bg-[#fd1616] text-blue-900 p-2 hover:text-white rounded-full">
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>

                    {/* For Candidate */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-2xl mb-4">For Candidate</h3>
                        <ul className="text-sm space-y-2">
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />Browse Jobs</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />Account</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />Browse Categories</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />Resume</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />Job List</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />Sign Up</Link>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-2xl mb-4">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />Home</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />About</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />FAQ</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />Pricing</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight className="text-[#fd1616]" />Privacy</Link>
                            <Link to="" className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaAngleDoubleRight />Contact</Link>
                        </ul>
                    </div>

                    {/* Information */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-2xl mb-4">Information</h3>
                        <ul className="text-[16px] space-y-4">
                            <Link className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaPhone className="text-[#fd1616]" />Phone: +101 984 754</Link>
                            <Link className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><FaEnvelope className="text-[#fd1616]" />Email: info@jovie.com</Link>
                            <Link className="flex justify-start items-center gap-2 font-medium hover:text-[#fd1616] text-white"><MdOutlineAddLocation className="text-[#fd1616] text-lg" />Address: 123, Denver, USA</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="absolute top-8 right-8">
                <img
                    src="./footer.png"
                    alt="Rotating Logo"
                    className="w-[130px] h-[130px] animate-spin bg-black opacity-30"
                    style={{ animationDuration: '5s' }} // Adjust the speed here (5s for slower)
                />
            </div>
            <div className="flex justify-center bg-[#03143b] py-6">
                <p className="text-[16px] text-white font-medium">© Jovie is Proudly Owned by Chan Dra Dev</p>
            </div>
        </footer>
    );
};

export default Footer;
