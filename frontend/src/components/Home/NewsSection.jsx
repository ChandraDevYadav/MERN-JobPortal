import React from "react";
import { FaCalendarDays, FaUser } from "react-icons/fa6";

const newsArticles = [
    {
        id: 1,
        author: "Admin",
        date: "7 Feb, 2024",
        title: "How to Introduce Yourself in a Job Interview?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: "./n1.jpg",
    },
    {
        id: 2,
        author: "Admin",
        date: "7 Feb, 2024",
        title: "Looking for Highly Motivated Product to Build",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: "./n2.jpg",
    },
    {
        id: 3,
        author: "Admin",
        date: "7 Feb, 2024",
        title: "The Reason Why Software Development is the Best Job",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        image: "./n3.jpg",
    },
];

const NewsSection = () => {
    return (
        <div className="container mx-auto px-32 py-20">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-4">News, Tips & Articles</h2>
            <p className="text-center text-[17px] text-gray-500 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                    <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-52 object-cover transform transition-transform duration-300 hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex justify-start items-center gap-10 text-sm text-gray-500">
                                <p className="font-semibold flex justify-start items-center gap-2"><FaUser className="text-[#fd1616]" />{article.author}</p>
                                <p className="font-semibold flex justify-start items-center gap-2"><FaCalendarDays className="text-[#fd1616]" />{article.date}</p>
                            </div>
                            <h3 className="text-xl font-bold mt-2 hover:text-[#fd1616]">{article.title}</h3>
                            <p className="text-gray-500 text-[17px] leading-relaxed mt-2">{article.description}</p>

                            {/* Read More Button */}
                            <button className="mt-4 text-blue-600 font-semibold hover:underline">
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
