import React from "react";

const EasySteps = () => {
    const steps = [
        {
            id: 1,
            title: "Browse Job",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: "./web-apps.png"
        },
        {
            id: 2,
            title: "Find Your Vacancy",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: "./recruitment.png"
        },
        {
            id: 3,
            title: "Submit Resume",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: "./account-login.png"
        }
    ];

    return (
        <section className="bg-[url('./back.jpg')] bg-cover bg-center bg-no-repeat relative">
            <div className="container mx-auto px-6 py-12 bg-[#010C29D8] bg-opacity-40">
                <h2 className="text-4xl font-bold text-center text-white py-16">
                    Easiest Way To Use
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-24">
                    {steps.map((step) => (
                        <div key={step.id} className="rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                            {/* Step Number */}

                            {/* Image */}
                            <div className="flex justify-center items-center relative">
                                <div className="bg-white p-10 rounded-full border-[3px] hover:bg-[#fd1616] border-[#fd1616] hover:border-white border-dashed">
                                    <img src={step.image} alt={step.title} className="w-16 h-16" />
                                </div>
                                <div className="w-8 h-8 bg-[#FDC7C7] text-[#fd1616] text-sm font-medium flex items-center justify-center rounded-full absolute top-0 right-[33%]">
                                    {step.id}
                                </div>
                            </div>
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white pb-4 pt-8">{step.title}</h3>
                            {/* Description */}
                            <p className="text-white text-[17px] px-6 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EasySteps;
