import React from 'react'
import { BiFilterAlt } from 'react-icons/bi'
import { MdOutlineAddLocation } from 'react-icons/md'
import { PiSuitcaseSimpleLight } from 'react-icons/pi'
import { LiaTelegramPlane } from "react-icons/lia";
import { FaCheck } from 'react-icons/fa6';

const DetailLeft = () => {
    return (
        <div>
            <div className='grid grid-cols-6 gap-6'>
                <div>
                    <div className='bg-gray-200 flex justify-center items-center py-7'>
                        <img src="./1.png" alt="" className='w-12 h-12 object-fill' />
                    </div>
                </div>
                <div className='col-span-5'>
                    <h1 className='text-2xl font-bold'>Web Designer, Graphic Designer, UI/UX Designer</h1>
                    <div className='flex justify-start items-center gap-6 py-3'>
                        <p className="text-gray-600 flex justify-start items-center gap-2 font-medium text-[16px]"><MdOutlineAddLocation />Wellesley Rd, London</p>
                        <p className="text-gray-600 flex justify-start items-center gap-2 font-medium text-[16px]"><BiFilterAlt /> Accountancy</p>
                        <p className="text-gray-600 flex justify-start items-center gap-2 font-medium text-[16px]"><PiSuitcaseSimpleLight />Freelance</p>
                    </div>
                    <p className='text-[#fd1616] flex justify-start pt-1 items-center gap-2 font-medium text-[16px]'><LiaTelegramPlane />Apply Before: June 01,2024</p>
                </div>
            </div>
            <div className='pt-12'>
                <h1 className='text-2xl font-bold'>Description</h1>
                <p className='text-gray-600 text-[17px] pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries,but also the leap into essentially unchanged.</p>
                <p className='text-gray-600 text-[17px] pt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='py-8'>
                <h1 className='text-2xl font-bold'>Requirements</h1>
                <p className='text-gray-600 text-[17px] pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.</p>
                <ul className='list-item'>
                    <li className='text-gray-600 text-[17px] pt-4 flex justify-start items-center gap-2'><FaCheck />Work experience</li>
                    <li className='text-gray-600 text-[17px] pt-4 flex justify-start items-center gap-2'><FaCheck />Skills (soft skills and/or technical skills)</li>
                    <li className='text-gray-600 text-[17px] pt-4 flex justify-start items-center gap-2'><FaCheck />WPersonal qualities and attributes.</li>
                    <li className='text-gray-600 text-[17px] pt-4 flex justify-start items-center gap-2'><FaCheck />Support software roll-outs to production.</li>
                    <li className='text-gray-600 text-[17px] pt-4 flex justify-start items-center gap-2'><FaCheck />Guide and mentor junior engineers. Serve as team lead if appropriate.</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Job Details</h1>
                <div className='grid grid-cols-2 gap-60 pt-4'>
                    <div>
                        <ul className='space-y-6'>
                            <li><p className='text-[17px] font-medium border-b border-gray-300 pb-3'>Company<span className='text-gray-500'>Tourt Design LTD</span></p></li>
                            <li><p className='text-[17px] font-medium border-b border-gray-300 pb-3'>Location<span className='text-gray-500'>Wellesley Rd, London</span></p></li>
                            <li><p className='text-[17px] font-medium border-b border-gray-300 pb-3'>Job Type<span className='text-gray-500'>Full Time</span></p></li>
                            <li><p className='text-[17px] font-medium border-b border-gray-300 pb-3'>Email<span className='text-gray-500'>hello@company.com</span></p></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-6'>
                            <li><p className='text-[17px] font-medium border-b border-gray-300 pb-3'>Experince<span className='text-gray-500'>2 Years</span></p></li>
                            <li><p className='text-[17px] font-medium border-b border-gray-300 pb-3'>Language<span className='text-gray-500'>English</span></p></li>
                            <li><p className='text-[17px] font-medium border-b border-gray-300 pb-3'>Salary<span className='text-gray-500'>$10,000</span></p></li>
                            <li><p className='text-[17px] font-medium border-b border-gray-300 pb-3'>Website<span className='text-gray-500'>www.company.com</span></p></li>
                        </ul>
                    </div>
                </div>
                <button className='px-6 py-3 bg-[#fd1616] text-white mt-12'>Apply Now</button>
            </div>
        </div>
    )
}

export default DetailLeft