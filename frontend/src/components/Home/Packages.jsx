import React from 'react'
import { FaRegUser, FaUser } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';

const Packages = () => {
    const plans = [
        {
            id: 1,
            title: "Free Forever",
            price: "0",
            features: [
                "Appear in results",
                "Accept mobile app",
                "Manage candidates directly",
            ],
        },
        {
            id: 2,
            title: "Sponsor",
            price: "10",
            features: [
                "Premium placement",
                "PPC on your job",
                "Reach more candidates",
                "Desktop, mobile job alerts",
            ],
        },
        {
            id: 3,
            title: "Premium Plan",
            price: "30",
            features: [
                "Job ad live for six weeks",
                "Premium placement",
                "Desktop, mobile job alerts",
            ],
        },
    ];
    return (
        <div>
            <h1 className='text-4xl font-bold text-[#010c29] text-center'>Buy Our Plans & Packages</h1>
            <p className='text-gray-500 py-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.</p>
            <div className="container mx-auto px-32 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-12">
                    {plans.map((plan) => (
                        <div key={plan.id} className="bg-gray-50 shadow-lg rounded-lg p-6 text-center relative group">
                            <h3 className="text-2xl font-bold py-4">{plan.title}</h3>
                            <div className='flex justify-center items-center pt-2'>
                                <div className='border-2 border-[#fd1616] group-hover:bg-[#fd1616] group-hover:text-white rounded-full border-dashed p-4'>
                                    <FaRegUser className='text-3xl' />
                                </div>
                            </div>
                            <p className="text-gray-800 text-4xl font-semibold my-3 py-3">${plan.price}<span className='text-sm font-medium text-gray-600'>/Month</span></p>
                            <ul className="text-gray-500 text-lg space-y-2 pl-12">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center justify-start gap-2">
                                        <FaCheck className='text-sm' /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="my-8 px-6 py-3 bg-[#fd1616] text-white transition group-hover:bg-[#010c29] group-hover:text-white">
                                Choose Plan
                            </button>
                            <div className='absolute bottom-0'>
                                <img src="./price.png" alt="" className='w-full h-1/2 object-contain' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Packages