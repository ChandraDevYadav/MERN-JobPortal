import React from 'react'

const WhyUs = () => {
    return (
        <div className='px-32 py-24'>
            <h1 className='text-4xl font-bold text-center'>Why You Choose Us Among <br /> Other Job Site?</h1>
            <p className='text-[17px] text-gray-500 text-center pt-6 pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
            <div className='grid grid-cols-3 gap-4'>
                <div className='bg-white border border-[#fd1616] border-dashed rounded-lg hover:bg-[#fd1616] group py-10 px-8'>
                    <div className='flex justify-center'>
                        <img src="./job.png" alt="" className='w-12 h-12' />
                    </div>
                    <h1 className='text-2xl font-bold text-center group-hover:text-white py-6'>Advertise Job</h1>
                    <p className='text-[16px] text-gray-600 font-medium text-center group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
                <div className='bg-white border border-[#fd1616] border-dashed rounded-lg hover:bg-[#fd1616] group py-10 px-8'>
                    <div className='flex justify-center'>
                        <img src="./recruitment.png" alt="" className='w-12 h-12' />
                    </div>
                    <h1 className='text-2xl font-bold text-center group-hover:text-white py-6'>Advertise Job</h1>
                    <p className='text-[16px] text-gray-600 font-medium text-center group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
                <div className='bg-white border border-[#fd1616] border-dashed rounded-lg hover:bg-[#fd1616] group py-10 px-8'>
                    <div className='flex justify-center'>
                        <img src="./user.png" alt="" className='w-12 h-12' />
                    </div>
                    <h1 className='text-2xl font-bold text-center group-hover:text-white py-6'>Advertise Job</h1>
                    <p className='text-[16px] text-gray-600 font-medium text-center group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs