import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const candidates = [
  {
    id: 1,
    image: "./can1.jpg",
    title: "John Doe",
    position: "Frontend Developer",
  },
  {
    id: 2,
    image: "./can2.jpg",
    title: "Jane Smith",
    position: "Backend Developer",
  },
  {
    id: 3,
    image: "./can3.jpg",
    title: "Michael Johnson",
    position: "Full Stack Developer",
  },
  {
    id: 4,
    image: "./can4.jpg",
    title: "Emily Davis",
    position: "UI/UX Designer",
  },
  {
    id: 5,
    image: "./can5.jpg",
    title: "David Wilson",
    position: "Software Engineer",
  },
  {
    id: 6,
    image: "./can6.jpg",
    title: "Olivia Taylor",
    position: "React Developer",
  },
  {
    id: 6,
    image: "./can7.jpg",
    title: "Chan Dra Dev",
    position: "MERN Developer",
  },
  {
    id: 6,
    image: "./can8.jpg",
    title: "Kode Hustler",
    position: "App Developer",
  }
];

const CandidateList = () => {
  return (
    <div className="container mx-auto px-32 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white border h-[410px] border-gray-200 shadow-md text-center hover:shadow-lg transition-all"
          >
            <div className="overflow-hidden pb-4">
              <img
                src={candidate.image}
                alt={candidate.title}
                className="w-full h-[250px] object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <Link to='' className="text-2xl font-bold mt-4 text-gray-800 hover:text-[#fd1616]">{candidate.title}</Link>
            <p className="text-[16px] py-2 text-gray-500">{candidate.position}</p>
            <div className="flex justify-center items-center gap-2 border-t border-gray-300 border-dashed">
              <button className="mt-4 bg-white text-[#fd1616] border border-[#fd1616] p-2 rounded hover:bg-[#fd1616] hover:text-white transition">
                <FaFacebookF />
              </button>
              <button className="mt-4 bg-white text-[#fd1616] border border-[#fd1616] p-2 rounded hover:bg-[#fd1616] hover:text-white transition">
                <FaTwitter />
              </button>
              <button className="mt-4 bg-white text-[#fd1616] border border-[#fd1616] p-2 rounded hover:bg-[#fd1616] hover:text-white transition">
                <FaLinkedinIn />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
