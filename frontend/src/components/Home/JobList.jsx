import React from "react";
import { MdOutlineAddLocation } from "react-icons/md";
import { BiFilterAlt } from "react-icons/bi";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { LuAlarmClockCheck } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const JobList = () => {
    const jobs = [
        {
            companyLogo: "./1.png",
            jobTitle: "Post-Room Operate",
            companyName: "Via Tourt Design LTD",
            location: "Wellesley Rd, London",
            jobLocation: "On Site",
            category: "Accountancy",
            type: "Freelance",
            typeTime: "Full Time",
            postedTime: "1 Hr Ago"
        },
        {
            companyLogo: "./2.png",
            jobTitle: "Data Entry",
            companyName: "Via Techno Inc.",
            location: "Street 40/A, London",
            jobLocation: "Hybrid",
            category: "Data Entry",
            type: "Freelance",
            typeTime: "Part Time",
            postedTime: "3 Hr Ago"
        },
        {
            companyLogo: "./3.png",
            jobTitle: "Graphic Designer",
            companyName: "Via Devon Design",
            location: "West Sight, USA",
            jobLocation: "Remote",
            category: "Graphics",
            type: "Freelance",
            typeTime: "Full Time",
            postedTime: "4 Hr Ago"
        },
        {
            companyLogo: "./4.png",
            jobTitle: "Web Developer",
            companyName: "Via MegaNews",
            location: "San Francisco, California",
            jobLocation: "Onsite",
            category: "Development",
            type: "Freelance",
            typeTime: "Part Time",
            postedTime: "5 Hr Ago"
        },
        {
            companyLogo: "./5.png",
            jobTitle: "Digital Marketer",
            companyName: "Via AB Marketer LTD",
            location: "Wellesley Rd, London",
            jobLocation: "Remote",
            category: "Marketing",
            type: "Freelance",
            typeTime: "Full Time",
            postedTime: "6 Hr Ago"
        },
        {
            companyLogo: "./6.png",
            jobTitle: "UI/UX Designer",
            companyName: "Via Design Hunter",
            location: "Zoo Rd, London",
            jobLocation: "Hybrid",
            category: "Design",
            type: "Freelance",
            typeTime: "Part Time",
            postedTime: "7 Hr Ago"
        }
    ];

    return (
        <div className="container mx-auto px-32 py-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Latest Job Listings
            </h2>
            <p className="text-gray-500 text-lg text-center pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {jobs.map((job, index) => (
                    <div key={index} className="bg-[#FDE7E7] border border-gray-300 border-dashed px-6 py-8 flex justify-start items-center gap-4 hover:shadow-lg hover:border-[#fd1616] transition">
                        {/* Company Logo */}
                        <div className="bg-white flex justify-center py-5 border border-gray-300 border-dashed w-[60%]">
                            <img src={job.companyLogo} alt={job.companyName} className="w-10 h-10 object-contain" />
                        </div>

                        {/* Job Details */}
                        <div className=" w-full">
                            <h3 className="text-lg font-bold text-gray-800">{job.jobTitle}</h3>
                            <p className="text-[#fd1616] font-medium pt-2 pb-1 flex justify-start items-center gap-2">{job.companyName}</p>
                            <p className="text-gray-600 flex justify-start pb-1 items-center gap-2"><MdOutlineAddLocation />{job.location}</p>
                            <p className="text-gray-600 flex justify-start pb-1 items-center gap-2"><BiFilterAlt />{job.category}</p>
                            <p className="text-gray-600 flex justify-start items-center gap-2"><PiSuitcaseSimpleLight />{job.type}</p>
                        </div>
                        <div className="flex justify-end items-center w-full">
                            <div>
                                <p className={`px-8 py-2 text-sm font-medium rounded-lg ${job.type === "Full Time" ? "bg-white text-[#fd1616]" : "bg-green-500 text-white"
                                    }`}>
                                    {job.typeTime}
                                </p>
                                <div className="flex justify-center items-center">
                                    <div className="bg-white text-gray-500 p-2 rounded-full my-3 border border-gray-400 border-dashed"><FaRegHeart /></div>
                                </div>
                                <p className="text-gray-600 text-sm flex justify-center items-center gap-2"><LuAlarmClockCheck />{job.postedTime}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
