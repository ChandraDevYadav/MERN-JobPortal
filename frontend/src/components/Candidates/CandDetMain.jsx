import React from 'react'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const CandDetMain = () => {
    return (
        <div>
            <div className='grid grid-cols-6 gap-4 px-32 py-16'>
                <div className='col-span-2'>
                    <div className='bg-white py-6 px-8 border border-gray-100 shadow rounded-lg'>
                        <div className='flex justify-center items-center'>
                            <img src="./client-1.png" alt="" className='w-24 h-24 rounded-full' />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl font-bold pt-4'>John Smith</h1>
                            <p className='text-[16px] text-gray-600 pt-2 font-medium'>Web Developer</p>
                            <Link to='' className='flex justify-center items-center gap-2 text-gray-600 py-2'><FaPhone className='text-[#fd1616]' />+977-9805912060</Link>
                            <Link to='' className='flex justify-center items-center gap-2 text-gray-600'><FaEnvelope className='text-[#fd1616]' />chandradev4@.com</Link>
                        </div>
                        <div className="flex justify-center items-center gap-2 mt-2">
                            <button className="mt-4 bg-white text-[#fd1616] border border-[#fd1616] p-2 rounded hover:bg-[#fd1616] hover:text-white transition">
                                <FaFacebookF />
                            </button>
                            <button className="mt-4 bg-white text-[#fd1616] border border-[#fd1616] p-2 rounded hover:bg-[#fd1616] hover:text-white transition">
                                <FaTwitter />
                            </button>
                            <button className="mt-4 bg-white text-[#fd1616] border border-[#fd1616] p-2 rounded hover:bg-[#fd1616] hover:text-white transition">
                                <FaLinkedinIn />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='bg-white p-6 border border-gray-100 shadow rounded-lg'>
                        <h1 className='text-2xl font-bold text-[#001935]'>About Me</h1>
                        <p className='text-gray-500 text-[17px] leading-relaxed mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className='bg-white p-6 border border-gray-100 shadow rounded-lg mt-6'>
                        <h1 className='text-2xl font-bold text-[#001935]'>Education</h1>
                        <h1 className='text-xl font-bold text-[#001935] mt-3'>School</h1>
                        <p className='text-gray-500 text-[17px] leading-relaxed mt-2'>Everest Residential, Nepal</p>
                        <p className='text-gray-500 text-[17px] leading-relaxed mt-1'>2004-2016</p>
                        <h1 className='text-xl font-bold text-[#001935] mt-4'>College</h1>
                        <p className='text-gray-500 text-[17px] leading-relaxed mt-2'>World Vision College, Nepal</p>
                        <p className='text-gray-500 text-[17px] leading-relaxed mt-1'>2017-2019</p>
                        <h1 className='text-xl font-bold text-[#001935] mt-4'>University</h1>
                        <p className='text-gray-500 text-[17px] leading-relaxed mt-2'>Purwanchal University, Nepal</p>
                        <p className='text-gray-500 text-[17px] leading-relaxed mt-1'>2017-2019</p>
                    </div>
                    <div className='bg-white p-6 border border-gray-100 shadow rounded-lg mt-6'>
                        <h1 className='text-2xl font-bold text-[#001935]'>Experience</h1>
                        <ul className='list-disc pl-5 mt-4'>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1'>Proficient in HTML, CSS, Server-Scripting, C/C++, and Oracle</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1'>Experience with SEO</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1'>Experience Teaching Web Development</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1'>Knowledgeable in Online Advertising</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1'>Expert in LAMP Web Service Stacks</li>
                        </ul>
                    </div>
                    <div className='bg-white p-6 border border-gray-100 shadow rounded-lg mt-6'>
                        <h1 className='text-2xl font-bold text-[#001935]'>Skills</h1>
                        <ul className='mt-4 flex justify-start items-center gap-3'>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1 border border-gray-400 px-4'>HTMl</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1 border border-gray-400 px-4'>CSS</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1 border border-gray-400 px-4'>JS</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1 border border-gray-400 px-4'>PHP</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1 border border-gray-400 px-4'>Oracle</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1 border border-gray-400 px-4'>C/C++</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1 border border-gray-400 px-4'>SQL</li>
                            <li className='text-gray-500 text-[17px] leading-relaxed mt-1 border border-gray-400 px-4'>Ruby</li>
                        </ul>
                    </div>
                    <div className='bg-white p-6 flex justify-center items-center gap-4 border border-gray-100 shadow rounded-lg mt-6'>
                        <Link to='/contact' className='px-6 py-3 bg-[#fd1616] hover:bg-[#001935] hover:text-white font-medium text-white'>Hire Me</Link>
                        <Link to="/resume.jpg" download="resume.jpg" className='px-6 py-3 bg-[#fd1616] hover:bg-[#001935] hover:text-white font-medium text-white'>Download CV</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandDetMain