import React from 'react'

const Members = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-6 bg-[#010c29] px-32 py-24'>
                <div>
                    <div className='flex justify-center items-center'>
                        <img src="./selection-process.png" alt="" className='w-16 h-16' />
                    </div>
                    <div className='text-center mt-6'>
                        <h1 className='text-4xl font-bold text-white pb-1'>1225</h1>
                        <p className='text-[16px] text-white font-medium'>Job Posted</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <img src="./recruitment.png" alt="" className='w-16 h-16' />
                    </div>
                    <div className='text-center mt-6'>
                        <h1 className='text-4xl font-bold text-white pb-1'>154</h1>
                        <p className='text-[16px] text-white font-medium'>Job Filed</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <img src="./portfolio.png" alt="" className='w-16 h-16' />
                    </div>
                    <div className='text-center mt-6'>
                        <h1 className='text-4xl font-bold text-white pb-1'>170</h1>
                        <p className='text-[16px] text-white font-medium'>Company</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <img src="./user.png" alt="" className='w-16 h-16' />
                    </div>
                    <div className='text-center mt-6'>
                        <h1 className='text-4xl font-bold text-white pb-1'>125</h1>
                        <p className='text-[16px] text-white font-medium'>Members</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members