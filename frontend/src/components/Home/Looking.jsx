import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Looking = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4 px-32 py-24'>
                <div className='bg-[#fd1616] rounded-lg px-8 py-10 flex justify-start items-start gap-4'>
                    <div>
                        <img src="./team.png" alt="" className='w-12 h-12 object-fill' />
                    </div>
                    <div>
                        <h1 className='text-white text-2xl font-bold'>Looking For a Job</h1>
                        <p className='text-white font-medium text-[16px] py-2'>Your next role could be with one of these top leading organizations</p>
                        <button className='flex justify-start items-center gap-2 text-white'>Apply Now <FaAngleDoubleRight /> </button>
                    </div>
                </div>
                <div className='bg-[#010c29] rounded-lg px-8 py-10 flex justify-start items-start gap-4'>
                    <div>
                        <img src="./selection-process.png" alt="" className='w-12 h-12 object-fill' />
                    </div>
                    <div>
                        <h1 className='text-white text-2xl font-bold'>Are You Recruiting?</h1>
                        <p className='text-white font-medium text-[16px] py-2'>Your next role could be with one of these top leading organizations</p>
                        <button className='flex justify-start items-center gap-2 text-white'>Apply Now <FaAngleDoubleRight /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Looking