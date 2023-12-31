import React from 'react'

const thirdHomepageData = [
    {
        image: "../images/homepageServices/hs1.png",
        title: "ACADEMIC",
        text: "From Maths and English to Physics and Reasoning, we provide tutoring in most subjects from Primary to A Level",
    },
    {
        image: "../images/homepageServices/hs2.png",
        title: "NATIVE LANGUAGE",
        text: "“Kaabo”, “Barka da zuwa”, “Ndewo” Whether you’re starting from scratch or dusting off your language skills, we’ve got you covered!",
    },
    {
        image: "../images/homepageServices/hs3.png",
        title: "EXAM PREP",
        text: "We stay on top of the latest exam skills and strategies so you don’t have to. We cover GCSE, IGCSE, SATs, IB, NECO, WAEC & JAMB.",
    },
];

function ThirdHomepageProps(props) {
    return (
        <div className='flex flex-col gap-5 bg-white p-5 shadow-lg rounded-xl'>
            <div>
                <img src={props.image} alt="" className='rounded-full' />
            </div>
            <p className='lg:text-xl md:text-lg text-base font-bold'>{props.title}</p>
            <p className='lg:text-lg md:text-base text-sm'>{props.text}</p>
        </div>
    );
}

export default function SecondAbout() {
    const myThirdHomepage = thirdHomepageData.map(item => (
        <div key={item.title} className="">
            <ThirdHomepageProps
                image={item.image}
                title={item.title}
                text={item.text}
            />
        </div>
    ));

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5 bg-[#F8F5FC]'>
            <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl'>
                OUR TEAM
            </p>
            <div className='flex md:flex-row flex-col gap-10'>
                
            </div>
        </div>
    );
}
