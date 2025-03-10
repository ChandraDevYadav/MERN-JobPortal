import React from "react";
import { MdOutlineAddLocation } from "react-icons/md";
import { BiBriefcase, BiFilterAlt } from "react-icons/bi";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { LuAlarmClockCheck } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const MoreJob = () => {
    const jobs = [
        {
            name: "Website Developer & Software Developer",
            companyLogo: "./1.png",
            jobTitle: "Post-Room Operate",
            salary: "$3000-$4000",
            companyName: "Via Tourt Design LTD",
            location: "Wellesley Rd, London",
            jobLocation: "On Site",
            category: "Web Developer",
            type: "Freelance",
            typeTime: "Full Time",
            postedTime: "1 Hr Ago"
        },
        {
            name: "Application Developer & Web Designer",
            companyLogo: "./2.png",
            jobTitle: "App Developer",
            salary: "$2000-$5000",
            companyName: "Via Techno Inc.",
            location: "Street 40/A, London",
            jobLocation: "Hybrid",
            category: "Data Entry",
            type: "Freelance",
            typeTime: "Part Time",
            postedTime: "3 Hr Ago"
        },
        {
            name: "Frontend & Backend Developer",
            companyLogo: "./3.png",
            jobTitle: "Web Developer",
            salary: "$5000-$6000",
            companyName: "Via Devon Design",
            location: "West Sight, USA",
            jobLocation: "Remote",
            category: "Graphics",
            type: "Freelance",
            typeTime: "Full Time",
            postedTime: "4 Hr Ago"
        },
        {
            name: "Data Science & AI Specialist",
            companyLogo: "./4.png",
            jobTitle: "Data Scientist",
            salary: "$1000-$3000",
            companyName: "Via MegaNews",
            location: "San Francisco, California",
            jobLocation: "Onsite",
            category: "Development",
            type: "Freelance",
            typeTime: "Part Time",
            postedTime: "5 Hr Ago"
        },
        {
            name: "Cybersecurity & Ethical Hacking",
            companyLogo: "./5.png",
            jobTitle: "Cybersecurity Analyst",
            salary: "$1500-$4000",
            companyName: "Via AB Marketer LTD",
            location: "Wellesley Rd, London",
            jobLocation: "Remote",
            category: "Marketing",
            type: "Freelance",
            typeTime: "Full Time",
            postedTime: "6 Hr Ago"
        },
        {
            name: "Blockchain & Web3 Developer",
            companyLogo: "./6.png",
            jobTitle: "Blockchain Engineer",
            salary: "$4500-$7000",
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
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Jobs You May Be Interested In
            </h2>
            <p className="text-gray-500 text-lg text-center pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {jobs.map((job, index) => (
                    <div key={index} className="bg-[#FDE7E7] border border-gray-300 border-dashed px-6 py-8 grid grid-cols-8 justify-start items-center hover:shadow-lg hover:border-[#fd1616] transition">
                        {/* Company Logo */}
                        <div className="col-span-1">
                            <div className="bg-white w-28 h-28 flex justify-center items-center hover:bg-[#972828] rounded-full border border-gray-300 border-dashed">
                                <img src={job.companyLogo} alt={job.companyName} className="w-12 h-12 object-contain" />
                            </div>
                        </div>

                        {/* Job Details */}
                        <div className="col-span-6 w-full">
                            <h3 className="text-2xl font-bold text-gray-800">{job.name}</h3>
                            <div className="flex justify-start items-center gap-4">
                                <p className="text-gray-500 pt-2 pb-1 flex justify-start items-center gap-2"><BiBriefcase />{job.jobTitle}</p>
                                <p className="text-gray-500 pt-2 pb-1 flex justify-start items-center gap-2"><GiMoneyStack />{job.salary}</p>
                                <p className="text-gray-500 pt-2 flex justify-start pb-1 items-center gap-2"><MdOutlineAddLocation />{job.location}</p>
                                <p className="text-gray-500 pt-2 flex justify-start pb-1 items-center gap-2"><LuAlarmClockCheck />{job.postedTime}</p>
                            </div>
                            <button className="text-[#fd1616] border border-[#fd1616] border-dashed px-2 py-1 mt-4">{job.typeTime}</button>
                        </div>
                        <div className="col-span-1">
                            <button className="bg-[#fd1616] text-white px-4 w-full font-medium py-3">Browse Job</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreJob;
