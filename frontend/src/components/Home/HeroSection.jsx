import React from 'react'
import { FaSearch } from 'react-icons/fa'

const HeroSection = () => {
    return (
        <div>
            <div className='relative w-full h-screen'>
                {/* Background Image */}
                <img src="./1.jpg" alt="Background" className='w-full h-full object-cover rounded-b-[300px]' />

                {/* Overlay */}
                <div className='absolute inset-0 bg-black/50 flex justify-center rounded-b-[300px] items-center'>
                    {/* Text Content */}
                    <div className='w-full px-28'>
                        <p className='text-white text-xl font-medium text-center'>Find Jobs, Employment & Career Opportunities</p>
                        <h1 className='text-6xl font-bold text-white text-center py-6'>Drop Resume & Get <br /> Your Desire Job!</h1>
                        <form action="" className='flex justify-start items-end gap-4 bg-gray-100 rounded-lg bg-opacity-70 p-6 w-full mt-6'>
                            <label htmlFor="" className='w-full space-y-3'>
                                <span className='font-medium'>Keyword:</span><br />
                                <input type="text" name="" id="" placeholder='Job Title' className='bg-white w-full px-4 py-4 rounded-lg placeholder:text-black placeholder:font-medium' />
                            </label>
                            <label htmlFor="" className='w-full space-y-3'>
                                <span className='font-medium'>Location:</span><br />
                                <input type="text" name="" id="" placeholder='City or State' className='bg-white w-full px-4 py-4 rounded-lg placeholder:text-black placeholder:font-medium' />
                            </label>
                            <button className='flex justify-center items-center font-bold gap-4 w-full bg-[#fd1616] px-4 py-4 rounded-lg text-white'>FIND A JOB <FaSearch className='text-sm' /></button>
                        </form>
                        <p className='font-medium text-white text-center pt-6'>Trending Keywords: Automotive, Education, Health and Care Engineering</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection