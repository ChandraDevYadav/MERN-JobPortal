import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <div className='px-32'>
                <form action="" className='w-full bg-white p-12 border border-gray-100 shadow rounded-2xl'>
                    <h1 className='text-3xl font-bold text-center pb-8'>Lets' Talk With Us</h1>
                    <div className='flex justify-start items-center gap-4 pb-8 w-full'>
                        <input type="text" placeholder='Your Name' className='px-4 py-3 rounded-lg border border-gray-400 w-full' required />
                        <input type="text" placeholder='Your Email' className='px-4 py-3 rounded-lg border border-gray-400 w-full' required />
                    </div>
                    <div className='flex justify-start items-center gap-4 pb-8'>
                        <input type="text" placeholder='Your Phone' className='px-4 py-3 rounded-lg border border-gray-400 w-full' required />
                        <input type="text" placeholder='Your Subject' className='px-4 py-3 rounded-lg border border-gray-400 w-full' required />
                    </div>
                    <div>
                        <textarea name="" id="" placeholder='Write Message' rows={6} className='px-4 py-4 rounded-lg border border-gray-400 w-full' required />
                    </div>
                    <div className='flex justify-center pt-12'>
                        <button className='bg-[#fd1616] px-6 py-3 text-white hover:text-white font-medium text-lg hover:bg-[#001935]'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm