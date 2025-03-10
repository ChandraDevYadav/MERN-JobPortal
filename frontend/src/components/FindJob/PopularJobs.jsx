import React from 'react';

const popularJobs = [
    {
        category: 'Construction',
        newJobs: 6,
        image: './helmet.png', // Add your image URL here
    },
    {
        category: 'Finance',
        newJobs: 8,
        image: './accounting.png', // Add your image URL here
    },
    {
        category: 'Healthcare',
        newJobs: 9,
        image: './health-check.png', // Add your image URL here
    },
    {
        category: 'Graphic Design',
        newJobs: 6,
        image: './graphic-design.png', // Add your image URL here
    },
    {
        category: 'Banking Jobs',
        newJobs: 5,
        image: './bank-account.png', // Add your image URL here
    },
    {
        category: 'Automotive',
        newJobs: 12,
        image: './automotive.png', // Add your image URL here
    },
    {
        category: 'Education',
        newJobs: 15,
        image: './education.png', // Add your image URL here
    },
    {
        category: 'Data Analysis',
        newJobs: 5,
        image: './data-analysis.png', // Add your image URL here
    },
];

const PopularJobs = () => {
    return (
        <div className='px-32 pb-10'>
            <h2 className="text-4xl font-bold text-center mb-4">Popular Jobs Category</h2>
            <p className="text-gray-500 text-lg text-center pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularJobs.map((job, index) => (
                    <div
                        key={index}
                        className="bg-white border border-[#fd1616] border-dashed overflow-hidden flex justify-start items-center gap-4 p-6 hover:bg-[#fd1616] group"
                    >
                        <div className='border border-[#fd1616] rounded-full border-dashed p-3 bg-white'>
                            <img
                                src={job.image}
                                alt={job.category}
                                className="w-12 h-12 object-fill"
                            />
                        </div>
                        <div className="">
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">{job.category}</h3>
                            <p className="text-gray-600 group-hover:text-white font-medium">{job.newJobs} new Jobs</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularJobs;
