import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa6'

const DetailRight = () => {
    return (
        <div>
            <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h1 className='text-2xl font-bold text-center'>Posted By</h1>
                <div className='flex justify-center pt-3 pb-2'>
                    <img src="./client-1.png" alt="" className='w-24 h-24 rounded-full object-fill' />
                </div>
                <h1 className='text-xl font-bold text-center'>John Doe</h1>
                <p className='text-gray-500 text-[16px] text-center'>CEO of Tourt Design LTD</p>
            </div>
            <div className='bg-white p-4 border border-gray-200 rounded-lg mt-6'>
                <h1 className='text-2xl text-center font-bold pb-4'>Location</h1>
                <div className="w-full max-w-4xl h-96 border border-gray-300 overflow-hidden shadow-lg">
                    <iframe
                        title="Google Map - Biratnagar"
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14237.598960929586!2d87.27079684101128!3d26.452474606479682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5b922fffffff7%3A0x2e285f44b62a7b78!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1643207964921!5m2!1sen!2snp"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className='bg-white p-4 border border-gray-200 rounded-lg mt-6'>
                <h1 className='text-2xl text-center font-bold pb-4'>Keywords</h1>
                <div className='grid grid-cols-3 gap-2'>
                    <button className='py-2 border border-gray-300 border-dashed hover:bg-[#fd1616] hover:text-white'>Web Design</button>
                    <button className='py-2 border border-gray-300 border-dashed hover:bg-[#fd1616] hover:text-white'>Data Sceince</button>
                    <button className='py-2 border border-gray-300 border-dashed hover:bg-[#fd1616] hover:text-white'>SEO</button>
                    <button className='py-2 border border-gray-300 border-dashed hover:bg-[#fd1616] hover:text-white'>Content Writter</button>
                    <button className='py-2 border border-gray-300 border-dashed hover:bg-[#fd1616] hover:text-white'>Finance</button>
                    <button className='py-2 border border-gray-300 border-dashed hover:bg-[#fd1616] hover:text-white'>Business</button>
                    <button className='py-2 border border-gray-300 border-dashed hover:bg-[#fd1616] hover:text-white'>Education</button>
                    <button className='py-2 border border-gray-300 border-dashed hover:bg-[#fd1616] hover:text-white'>Graphics</button>
                    <button className='py-2 border border-gray-300 border-dashed hover:bg-[#fd1616] hover:text-white'>Video</button>
                </div>
            </div>
            <div className='bg-white p-4 border border-gray-200 rounded-lg mt-6'>
                <h1 className='text-2xl text-center font-bold pb-4'>Share In</h1>
                <div className='flex justify-center items-center gap-2 pb-2'>
                    <button className='p-2 border border-gray-300 rounded-lg text-[#fd1616] hover:bg-[#fd1616] hover:text-white'><FaFacebookF /></button>
                    <button className='p-2 border border-gray-300 rounded-lg text-[#fd1616] hover:bg-[#fd1616] hover:text-white'><FaTwitter /></button>
                    <button className='p-2 border border-gray-300 rounded-lg text-[#fd1616] hover:bg-[#fd1616] hover:text-white'><FaPinterestP /></button>
                    <button className='p-2 border border-gray-300 rounded-lg text-[#fd1616] hover:bg-[#fd1616] hover:text-white'><FaLinkedinIn /></button>
                </div>
            </div>
        </div>
    )
}

export default DetailRight