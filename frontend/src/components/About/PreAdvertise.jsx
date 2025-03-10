import React from 'react'

const PreAdvertise = () => {
    return (
        <div className='px-32 pb-24'>
            <div className='grid grid-cols-5 justify-center items-center gap-4'>
                <div className='col-span-3'>
                    <h1 className='text-4xl font-bold'>Grow Your Business Faster <br /> With Premium Advertising</h1>
                    <p className='text-[17px] pt-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    <p className='text-[17px] py-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        Consectetur adipiscing elit.</p>
                    <button className='bg-[#fd1616] px-6 py-3 text-white font-semibold'>Checkout More</button>
                </div>
                <div className='col-span-2'>
                    <img src="./grow-img.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PreAdvertise