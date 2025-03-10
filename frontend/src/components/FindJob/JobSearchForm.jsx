import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineAddLocation } from 'react-icons/md';
import { FiSearch } from "react-icons/fi";

const JobSearchForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            jobTitle,
            location,
            category,
        });
    };

    return (
        <div className=" px-32 py-24 ">
            <div className='border border-gray-100 rounded-lg shadow-lg p-12'>
                <form onSubmit={handleSubmit} className='flex justify-start items-center gap-4 '>
                    <div className="w-full relative">
                        <input
                            type="text"
                            id="jobTitle"
                            placeholder='Job Title or Keyword'
                            className="mt-1 px-4 py-4 w-full border border-gray-300 rounded-md"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            required
                        />
                        <BiSearchAlt className='absolute top-6 right-3 text-2xl text-gray-400' />
                    </div>

                    <div className="w-full relative">
                        <input
                            type="text"
                            id="location"
                            className="mt-1 px-4 py-4 w-full border border-gray-300 rounded-md"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                        <MdOutlineAddLocation className='absolute top-6 right-3 text-2xl text-gray-400' />
                    </div>

                    <div className="w-full">
                        <select
                            id="category"
                            className="mt-1 px-4 py-4 w-full text-gray-400 border border-gray-300 rounded-md"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="" className='pr-3'>Select a Category</option>
                            <option value="Technology">Technology</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="Finance">Finance</option>
                        </select>
                    </div>

                    <div className="flex justify-center items-center w-full relative">
                        <button
                            type="submit"
                            className="bg-[#fd1616] text-white px-4 py-4 w-full font-medium rounded-md hover:bg-[#010c29]"
                        >
                            Find a Job
                        </button>
                        <FiSearch className='absolute top-5 right-16 text-lg text-white' />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default JobSearchForm;
