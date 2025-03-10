import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCalendarDays, FaUser } from 'react-icons/fa6'

const BlogMain = () => {
    return (
        <div>
            <div className='grid grid-cols-6 gap-6 px-28 pt-24'>
                <div className='col-span-2'>
                    <div className='bg-white border border-gray-100 shadow p-6'>
                        <div className='relative'>
                            <input type="text" name="" id="" placeholder='Search' className='border border-gray-300 bg-[#fdf5f5] px-4 py-3 w-full placeholder:text-gray-600' />
                            <div className='absolute top-[1px] right-0 bg-[#001935] px-4 py-4'>
                                <FaSearch className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border border-gray-100 shadow mt-6 pb-4'>
                        <div className='border-l-2 border-[#001935] pl-6 mt-6'>
                            <h1 className='text-2xl font-bold'>Popular Post</h1>
                        </div>
                        <div className='grid grid-cols-4 gap-4 border-t border-gray-300 border-dashed mx-6 py-4 mt-6'>
                            <div className='col-span-1'>
                                <img src="./n2.jpg" alt="" className='w-full h-full object-fill' />
                            </div>
                            <div className='col-span-3'>
                                <div>
                                    <p className='text-gray-500'>May 8, 2024</p>
                                    <h1 className='text-[#001935] text-[16px] font-bold'>Looking for Highly Motivated Product to Build</h1>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-4 border-t border-gray-300 border-dashed mx-6 py-4'>
                            <div className='col-span-1'>
                                <img src="./n1.jpg" alt="" className='w-full h-full object-fill' />
                            </div>
                            <div className='col-span-3'>
                                <div>
                                    <p className='text-gray-500'>May 5, 2024</p>
                                    <h1 className='text-[#001935] text-[16px] font-bold'>How to Indroduce in Yourself in Job Interview?</h1>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-4 border-t border-gray-300 border-dashed mx-6 py-4'>
                            <div className='col-span-1'>
                                <img src="./n3.jpg" alt="" className='w-full h-full object-fill' />
                            </div>
                            <div className='col-span-3'>
                                <div>
                                    <p className='text-gray-500'>April 12, 2024</p>
                                    <h1 className='text-[#001935] text-[16px] font-bold'>Economy Growth is Being Increased by IT Sectors</h1>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-4 border-t border-gray-300 border-dashed mx-6 py-4'>
                            <div className='col-span-1'>
                                <img src="./n4.jpg" alt="" className='w-full h-full object-fill' />
                            </div>
                            <div className='col-span-3'>
                                <div>
                                    <p className='text-gray-500'>April 24, 2024</p>
                                    <h1 className='text-[#001935] text-[16px] font-bold'>10 Things You Should Know Before Apply</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border border-gray-100 shadow mt-6 pb-4'>
                        <div className='border-l-2 border-[#001935] pl-6 mt-6'>
                            <h1 className='text-2xl font-bold'>Category</h1>
                        </div>
                        <div className=''>
                            <ul className='list-disc space-y-2 mx-6 border-t border-gray-300 mt-4 py-4 border-dashed'>
                                <li className='flex justify-between items-center text-[#001935] font-medium'>Web Design <span className='text-gray-600'>(10)</span></li>
                                <li className='flex justify-between items-center text-[#001935] font-medium'>Job Tips<span className='text-gray-600'>(5)</span></li>
                                <li className='flex justify-between items-center text-[#001935] font-medium'>UX Design<span className='text-gray-600'>(8)</span></li>
                                <li className='flex justify-between items-center text-[#001935] font-medium'>Tips & Tricks<span className='text-gray-600'>(4)</span></li>
                                <li className='flex justify-between items-center text-[#001935] font-medium'>Writting<span className='text-gray-600'>(12)</span></li>
                                <li className='flex justify-between items-center text-[#001935] font-medium'>Business<span className='text-gray-600'>(7)</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-white border border-gray-100 shadow mt-6 pb-4'>
                        <div className='border-l-2 border-[#001935] pl-6 mt-6'>
                            <h1 className='text-2xl font-bold'>Tags</h1>
                        </div>
                        <div className='grid grid-cols-3 gap-2 justify-start items-center mx-6 py-6 border-t border-gray-300 mt-4 border-dashed'>
                            <button className='font-medium py-1 text-[15px] border border-[#001935] border-dashed hover:bg-[#fd1616] hover:text-white'>Web Design</button>
                            <button className='font-medium py-1 text-[15px] border border-[#001935] border-dashed hover:bg-[#fd1616] hover:text-white'>Job Tips</button>
                            <button className='font-medium py-1 text-[15px] border border-[#001935] border-dashed hover:bg-[#fd1616] hover:text-white'>UX Design</button>
                            <button className='font-medium py-1 text-[15px] border border-[#001935] border-dashed hover:bg-[#fd1616] hover:text-white'>Tips & Tricks</button>
                            <button className='font-medium py-1 text-[15px] border border-[#001935] border-dashed hover:bg-[#fd1616] hover:text-white'>Writting</button>
                            <button className='font-medium py-1 text-[15px] border border-[#001935] border-dashed hover:bg-[#fd1616] hover:text-white'>Business</button>
                            <button className='font-medium py-1 text-[15px] border border-[#001935] border-dashed hover:bg-[#fd1616] hover:text-white'>Resume</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className=''>
                        <div>
                            <img src="./blog-details.jpg" alt="" className='w-full object-fill' />
                        </div>
                        <div className="flex justify-start items-center gap-10 text-sm text-gray-500 pt-6 pb-4">
                            <p className="font-semibold flex justify-start items-center gap-2"><FaUser className="text-[#fd1616]" />Admin</p>
                            <p className="font-semibold flex justify-start items-center gap-2"><FaCalendarDays className="text-[#fd1616]" />7 Feb, 2024</p>
                        </div>
                        <h3 className="text-xl font-bold  hover:text-[#fd1616]">Tips for Making Your Resume Stand Out</h3>
                        <p className="text-gray-500 text-[17px] leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p className="text-gray-500 text-[17px] leading-loose mt-2">There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
                            don't look even slightly believable.</p>
                        <div className='flex justify-start items-center gap-4 pt-8'>
                            <div>
                                <img src="./n3.jpg" alt="" className='w-full object-fill' />
                            </div>
                            <div>
                                <img src="./n5.jpg" alt="" className='w-full object-fill' />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <p className="text-gray-500 text-[17px] leading-loose mt-2">It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                                it look like readable English.</p>
                            <p className="text-gray-500 text-[17px] leading-loose mt-2">Contrary to popular belief, Lorem Ipsum is not simply
                                random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                Richard McClintock.</p>
                            <p className="text-gray-500 text-[17px] leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book</p>
                            <p className="text-gray-500 text-[17px] leading-loose mt-2">There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable.</p>
                        </div>
                        <div className='flex justify-start items-center gap-4 mt-6 bg-[#f3eeee] py-5 px-4 rounded-lg shadow'>
                            <h1 className='text-[16px] font-medium'>Tags:</h1>
                            <button className='border border-gray-700 rounded-full px-4 py-[2px] text-[14px] font-medium bg-white'>Business</button>
                            <button className='border border-gray-700 rounded-full px-4 py-[2px] text-[14px] font-medium bg-white'>Resume</button>
                            <button className='border border-gray-700 rounded-full px-4 py-[2px] text-[14px] font-medium bg-white'>Develpment</button>
                        </div>
                        <div className='bg-white border border-gray-100 shadow mt-6 pb-4'>
                            <div className='border-l-2 border-[#001935] pl-6 mt-6'>
                                <h1 className='text-2xl font-bold'>Leave a Reply</h1>
                            </div>
                            <div className='py-4 border-t border-gray-300 border-dashed mx-6 mt-4'>
                                <form action="">
                                    <div className='flex justify-start items-center gap-4'>
                                        <div className='w-full'>
                                            <label htmlFor="">Name</label>
                                            <input type="text" name="" id="" placeholder='Your Name' className='px-4 py-3 mt-2 rounded w-full border border-gray-300 bg-[#fff1f1]' />
                                        </div>
                                        <div className='w-full'>
                                            <label htmlFor="">Email</label>
                                            <input type="email" name="" id="" placeholder='Your Email' className='px-4 py-3 rounded mt-2 w-full border border-gray-300 bg-[#fff1f1]' />
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor="">Comment</label>
                                        <textarea rows={6} name="" id="" placeholder='Your Comment' className='px-4 py-3 rounded mt-2 w-full border border-gray-300 bg-[#fff1f1]' />
                                    </div>
                                    <div className='py-6'>
                                        <button className='px-4 py-3 rounded bg-[#fd1616] text-white font-medium hover:bg-[#001935]'>Post A Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogMain