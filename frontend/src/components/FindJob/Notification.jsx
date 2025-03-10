import React from 'react'

const Notification = () => {
    return (
        <div className='bg-[#fd1616] px-32 py-24 mt-12'>
            <div className='grid grid-cols-2 gap-12'>
                <div>
                    <h1 className='text-4xl pb-3 font-bold text-white'>Get New Job Notifications</h1>
                    <p className='text-lg font-medium text-white'>Subscribe & get all related jobs notification</p>
                </div>
                <div className='relative'>
                    <input type="text" placeholder='Enter your email' name="" id="" className='px-4 py-5 rounded-lg bg-white w-full' />
                    <button className='bg-[#010c29] text-white font-medium rounded-lg px-10 py-5 absolute top-0 right-0'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Notification