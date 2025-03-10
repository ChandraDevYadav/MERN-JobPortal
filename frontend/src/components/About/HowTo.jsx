import React from 'react'

const HowTo = () => {
    return (
        <div>
            <div className='grid grid-cols-2 justify-center items-center gap-6 px-32 py-24'>
                <div className=' '>
                    <h1 className='text-4xl font-bold'>How We Started</h1>
                    <p className='text-gray-500 font-medium text-[16px] py-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                        here, content here', making it look like readable English.</p>
                    <p className='text-gray-500 font-medium text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.</p>
                </div>
                <div>
                    <img src="./about.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HowTo