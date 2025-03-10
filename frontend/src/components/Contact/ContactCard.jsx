import React from 'react'
import { PiPhoneCallBold } from 'react-icons/pi'
import { BsEnvelopeAt } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";

const ContactCard = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-4 py-16'>
                <div className='bg-white py-6 px-24 shadow border border-gray-100 rounded-lg'>
                    <div className='flex justify-center items-center mt-4'>
                        <div className='border border-gray-600 border-dashed hover:bg-[#fd1616] group rounded-full p-3'>
                            <PiPhoneCallBold className='text-3xl text-gray-700 group-hover:text-white' />
                        </div>
                    </div>
                    <p className='py-2 text-gray-600 text-center mt-3 hover:text-[#fd1616] cursor-pointer'>+977-9805912060</p>
                    <p className='text-gray-600 text-center hover:text-[#fd1616] cursor-pointer'>+977-9805912060</p>
                </div>
                <div className='bg-white py-6 px-24 shadow border border-gray-100 rounded-lg'>
                    <div className='flex justify-center items-center mt-4'>
                        <div className='border border-gray-600 border-dashed hover:bg-[#fd1616] group rounded-full p-3'>
                            <BsEnvelopeAt className='text-3xl text-gray-700 group-hover:text-white' />
                        </div>
                    </div>
                    <p className='py-2 text-gray-600 text-center mt-3 hover:text-[#fd1616] cursor-pointer'>chandradev@4</p>
                    <p className='text-gray-600 text-center hover:text-[#fd1616] cursor-pointer'>codehustler@2</p>
                </div>
                <div className='bg-white py-6 px-24 shadow border border-gray-100 rounded-lg'>
                    <div className='flex justify-center items-center mt-4'>
                        <div className='border border-gray-600 border-dashed hover:bg-[#fd1616] group rounded-full p-3'>
                            <BiLocationPlus className='text-3xl text-gray-700 group-hover:text-white' />
                        </div>
                    </div>
                    <p className='py-2 text-gray-600 text-center mt-3 hover:text-[#fd1616] cursor-pointer'>Hanumannagar</p>
                    <p className='text-gray-600 text-center hover:text-[#fd1616] cursor-pointer'>Biratnagar</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard