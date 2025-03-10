import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import Notification from '../components/FindJob/Notification'
import HeroBanner from '../components/ReUsable/HeroBanner'

const PostJob = () => {
    const [formData, setFormData] = useState({
        jobTitle: "",
        jobCategory: "",
        companyName: "",
        companyEmail: "",
        companyWebsite: "",
        location: "",
        jobType: "",
        jobTags: "",
        salary: "",
        experience: "",
        jobDescription: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Job Posted:", formData);
        alert("Job Posted Successfully! Check the console for details.");
    };
    return (
        <Layout title={'Post - A Job'}>
            <div>
                <HeroBanner
                    title="Post a Job"
                    backgroundImage="./ab1.jpg"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                        { label: "Post A Job" },
                    ]}
                />
            </div>
            <div className='px-32 py-16'>
                <div className="bg-white shadow-lg rounded-lg p-10 border border-gray-200">
                    <h2 className="text-4xl font-bold text-center text-gray-800 pb-12">Fill Up Your Job information</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className='flex justify-start items-center gap-6'>
                            {/* Job Title */}
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Job Title</label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    placeholder="Job Title or Keyword"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Job Category */}
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Job Category</label>
                                <select
                                    name="jobCategory"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.jobCategory}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Education">Education</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex justify-start items-center gap-6'>
                            {/* Company Name */}
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Company Name"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Company Email */}
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Company Email</label>
                                <input
                                    type="email"
                                    name="companyEmail"
                                    placeholder="e.g. hello@company.com"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.companyEmail}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Company Website (Optional) */}
                        <div className='flex justify-start items-center gap-6'>
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Company Website (Optional)</label>
                                <input
                                    type="text"
                                    name="companyWebsite"
                                    placeholder="e.g. www.companyname.com"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.companyWebsite}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Location */}
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="e.g. London"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex justify-start items-center gap-6'>
                            {/* Job Type */}
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Job Type</label>
                                <select
                                    name="jobType"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.jobType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Type</option>
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            {/* Job Tags */}
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Job Tags</label>
                                <input
                                    type="text"
                                    name="jobTags"
                                    placeholder="e.g. web design, graphics design, video editing"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.jobTags}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex justify-start items-center gap-6'>
                            {/* Salary (Optional) */}
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Salary (Optional)</label>
                                <input
                                    type="text"
                                    name="salary"
                                    placeholder="e.g. $20,000"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.salary}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Experience */}
                            <div className='w-full'>
                                <label className="block font-medium text-gray-700 pb-2">Experience</label>
                                <input
                                    type="text"
                                    name="experience"
                                    placeholder="e.g. 1 year"
                                    className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>



                        {/* Job Description */}
                        <div className='w-full'>
                            <label className="block font-medium text-gray-700 pb-2">Job Description</label>
                            <textarea
                                name="jobDescription"
                                rows="4"
                                placeholder="Job Description"
                                className="mt-1 px-4 py-3 w-full border rounded-md focus:ring focus:ring-blue-300"
                                value={formData.jobDescription}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='flex justify-center items-center'>
                            <button
                                type="submit"
                                className="bg-[#fd1616] text-white font-medium py-3 px-6 rounded-md hover:bg-[#010c29] transition"
                            >
                                Post A Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Notification />
        </Layout>
    )
}

export default PostJob