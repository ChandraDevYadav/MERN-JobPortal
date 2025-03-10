import React from 'react'

const ChooseUs = () => {
    const chooseUsData = [
        {
            id: 1,
            title: "Best Talented People",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "./team.png", // You can replace this with an actual icon or image
        },
        {
            id: 2,
            title: "Easy To Find Canditate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "./selection-process.png",
        },
        {
            id: 3,
            title: "Easy To Communicate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "./conversation.png",
        },
        {
            id: 4,
            title: "Global Recruitment Option",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "./recruitment.png",
        },
    ];
    return (
        <div>
            <div className='grid grid-cols-5 gap-4 bg-[#010c29] '>
                <div className='col-span-3 relative'>
                    <div className='w-[25%]'>
                        <img src="./why-choose.png" alt="" className='w-full h-[700px] object-cover' />
                    </div>
                    <div className="container mx-auto p-6 absolute top-0">
                        <h2 className="text-4xl font-bold text-center text-white pt-20 pb-4">Why Choose Us?</h2>
                        <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolorei.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-12 pt-16 pl-6">
                            {chooseUsData.map((item) => (
                                <div key={item.id} className="flex justify-start items-center gap-4">
                                    <img src={item.icon} alt="" className='w-12 h-12' />
                                    <div>
                                        <h3 className="text-xl text-white font-bold">{item.title}</h3>
                                        <p className="text-white pr-20 pt-2 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-around items-center pt-16'>
                            <div>
                                <h1 className='text-5xl font-bold text-[#fd1616]'>127</h1>
                                <p className='text-white font-bold text-[16px] pt-2'>Job Posted</p>
                            </div>
                            <div>
                                <h1 className='text-5xl font-bold text-[#fd1616]'>137</h1>
                                <p className='text-white font-bold text-[16px] pt-2'>Job Filed</p>
                            </div>
                            <div>
                                <h1 className='text-5xl font-bold text-[#fd1616]'>180</h1>
                                <p className='text-white font-bold text-[16px] pt-2'>Company</p>
                            </div>
                            <div>
                                <h1 className='text-5xl font-bold text-[#fd1616]'>144</h1>
                                <p className='text-white font-bold text-[16px] pt-2'>Members</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <img src="./why.choose.jpg" alt="" className='w-full h-full object-fill' />
                </div>
            </div>
        </div>
    )
}

export default ChooseUs