import React from "react";

const Category = () => {
    const categories = [
        {
            title: "Accountancy",
            openPositions: "301 open positions",
            image: "./accounting.png"
        },
        {
            title: "Education",
            openPositions: "210 open positions",
            image: "./education.png"
        },
        {
            title: "Automotive Jobs",
            openPositions: "281 open positions",
            image: "./automotive.png"
        },
        {
            title: "Business",
            openPositions: "122 open positions",
            image: "./meeting.png"
        },
        {
            title: "Health Care",
            openPositions: "335 open positions",
            image: "./patient.png"
        },
        {
            title: "IT & Agency",
            openPositions: "401 open positions",
            image: "./it-services.png"
        },
        {
            title: "Engineering",
            openPositions: "100 open positions",
            image: "./engineers.png"
        },
        {
            title: "Legal",
            openPositions: "201 open positions",
            image: "./law.png"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800">Choose Your Category</h2>
            <p className="text-center py-5 font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-28 pt-10">
                {categories.map((category, index) => (
                    <div key={index} className="bg-gray-50 p-7 rounded-lg overflow-hidden hover:shadow-sm transition cursor-pointer hover:border hover:border-red-600 group">
                        <div className="flex justify-center">
                            <img src={category.image} alt={category.title} className="w-20 h-20 object-fill" />
                        </div>
                        <div className="p-2 text-center">
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600">{category.title}</h3>
                            <p className="text-gray-500 font-medium pt-2 group-hover:text-red-600">{category.openPositions}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
