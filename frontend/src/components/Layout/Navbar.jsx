import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Check if any of the job, candidate, or blog-related routes are active
    const isJobActive = location.pathname.includes('/job');
    const isCandidateActive = location.pathname.includes('/candidates');
    const isBlogActive = location.pathname.includes('/blog');

    return (
        <div>
            <div className='flex justify-between items-center px-24 py-4 bg-[#010C29]'>
                {/* Logo */}
                <div>
                    <img src="./logo1.png" alt="Logo" className='w-12 h-12 object-fill' />
                </div>

                {/* Dropdown Navigation */}
                <div className='flex justify-start items-center gap-8 z-50'>
                    <Link to="/" className={`text-white font-medium ${location.pathname === '/' ? 'border-b-2 border-[#fd1616] text-[#fd1616]' : ''}`}>Home</Link>
                    <Link to="/about" className={`text-white font-medium ${location.pathname === '/about' ? 'border-b-2 border-[#fd1616] text-[#fd1616]' : ''}`}>About</Link>

                    {/* Job Dropdown */}
                    <div className="relative group inline-block">
                        <p className={`text-white font-semibold py-2 px-4 inline-flex items-center ${isJobActive ? 'border-b-2 border-[#fd1616] text-[#fd1616]' : ''}`}>
                            Job
                        </p>
                        <ul className={`absolute hidden group-hover:block bg-white text-gray-700 w-52 py-6 px-4 rounded-b-lg z-10`}>
                            <li className={location.pathname === '/jobfind' ? 'bg-[#fd1616] text-white' : ''}>
                                <Link className="rounded-t hover:bg-[#fd1616] hover:text-white py-2 px-4 block whitespace-no-wrap" to="/jobfind">
                                    Find A Job
                                </Link>
                            </li>
                            <li className={location.pathname === '/jobpost' ? 'bg-[#fd1616] text-white' : ''}>
                                <Link className="rounded-t hover:bg-[#fd1616] hover:text-white py-2 px-4 block whitespace-no-wrap" to="/jobpost">
                                    Post A Job
                                </Link>
                            </li>
                            <li className={location.pathname === '/joblist' ? 'bg-[#fd1616] text-white' : ''}>
                                <Link className="rounded-t hover:bg-[#fd1616] hover:text-white py-2 px-4 block whitespace-no-wrap" to="/joblist">
                                    Job List
                                </Link>
                            </li>
                            <li className={location.pathname === '/jobgrid' ? 'bg-[#fd1616] text-white' : ''}>
                                <Link className="rounded-t hover:bg-[#fd1616] hover:text-white py-2 px-4 block whitespace-no-wrap" to="/jobgrid">
                                    Job Grid
                                </Link>
                            </li>
                            <li className={location.pathname === '/jobdetail' ? 'bg-[#fd1616] text-white' : ''}>
                                <Link className="rounded-t hover:bg-[#fd1616] hover:text-white py-2 px-4 block whitespace-no-wrap" to="/jobdetail">
                                    Job Detail
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Candidates Dropdown */}
                    <div className="relative group inline-block">
                        <p className={`text-white font-semibold py-2 px-4 inline-flex items-center ${isCandidateActive ? 'border-b-2 border-[#fd1616] text-[#fd1616]' : ''}`}>
                            Candidates
                        </p>
                        <ul className={`absolute hidden group-hover:block bg-white text-gray-700 w-52 py-6 px-4 rounded-b-lg z-10`}>
                            <li className={location.pathname === '/candidates' ? 'bg-[#fd1616] text-white' : ''}>
                                <Link className="rounded-t hover:bg-[#fd1616] hover:text-white py-2 px-4 block whitespace-no-wrap" to="/candidates">
                                    Candidates
                                </Link>
                            </li>
                            <li className={location.pathname === '/candidatesdetail' ? 'bg-[#fd1616] text-white' : ''}>
                                <Link className="rounded-t hover:bg-[#fd1616] hover:text-white py-2 px-4 block whitespace-no-wrap" to="/candidatesdetail">
                                    Candidates Detail
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Blogs Dropdown */}
                    <div className="relative group inline-block">
                        <p className={`text-white font-semibold py-2 px-4 inline-flex items-center ${isBlogActive ? 'border-b-2 border-[#fd1616] text-[#fd1616]' : ''}`}>
                            Blog
                        </p>
                        <ul className={`absolute hidden group-hover:block bg-white text-gray-700 w-52 py-6 px-4 rounded-b-lg z-10`}>
                            <li className={location.pathname === '/blog' ? 'bg-[#fd1616] text-white' : ''}>
                                <Link className="rounded-t hover:bg-[#fd1616] hover:text-white py-2 px-4 block whitespace-no-wrap" to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className={location.pathname === '/blogdetail' ? 'bg-[#fd1616] text-white' : ''}>
                                <Link className="rounded-t hover:bg-[#fd1616] hover:text-white py-2 px-4 block whitespace-no-wrap" to="/blogdetail">
                                    Blog Detail
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link to="/contact" className={`text-white font-medium ${location.pathname === '/contact' ? 'border-b-2 border-[#fd1616] text-[#fd1616]' : ''}`}>
                        Contact Us
                    </Link>
                </div>

                {/* Sign In/Sign Up */}
                <div className='flex justify-start items-center gap-3'>
                    <button className='text-white font-medium'>Sign Up</button>
                    <button className='text-white font-medium bg-[#fd1616] px-4 py-2 rounded'>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
