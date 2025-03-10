import React from "react";
import { MdOutlineAddLocation } from "react-icons/md";

const TopCompanies = () => {

    const topCompanies = [
        {
            id: 1,
            logo: "./1.png", // Replace with actual image paths
            name: "Trophy & Sans",
            location: "Green Lanes, London",
            openPositions: 25,
        },
        {
            id: 2,
            logo: "./2.png",
            name: "Trout Design",
            location: "Park Avenue, Mumbai",
            openPositions: 35,
        },
        {
            id: 3,
            logo: "./3.png",
            name: "Resland LTD",
            location: "Betas Quence, London",
            openPositions: 20,
        },
        {
            id: 4,
            logo: "./4.png",
            name: "Lawn Hopper",
            location: "Wellesley Rd, London",
            openPositions: 45,
        },
    ];

    return (
        <div className="container mx-auto px-32 py-24">
            <h2 className="text-4xl font-bold text-center mb-6">Top Companies</h2>
            <p className="text-center text-gray-500 pb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {topCompanies.map((company) => (
                    <div key={company.id} className="bg-white shadow-lg px-4 pt-12 pb-10 text-center border border-[#fd1616] border-dashed">
                        <img src={company.logo} alt={company.name} className="w-14 h-14 mx-auto object-fill" />
                        <h3 className="text-2xl font-bold pt-6">{company.name}</h3>
                        <p className="text-gray-600 flex justify-center items-center gap-2 py-4"><MdOutlineAddLocation />{company.location}</p>
                        <div className="flex justify-center items-center">
                            <button className="text-white bg-[#fd1616] py-3 px-6 text-sm font-medium">{company.openPositions} Open Position{company.openPositions > 1 ? "s" : ""}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCompanies;
