import React from 'react';

const sixthHomepageData = [
    {
        image: "../images/homepageTreatment/rec1.svg",
        title: "STUDENT-CENTERED LEARNING",
        text: "We meet every student where they are with fun and engaging lessons. Rather than memorisation and cramming, we emphasise the critical thinking and reasoning skills your child will need in the real world.",
        color: "#2F1A60"
    },
    {
        image: "../images/homepageTreatment/rec2.svg",
        title: "WORLD CLASS TUTORS",
        text: "Our global network of tutors is rigorously screened and uniquely positioned to teach your child. With several years of experience and expertise in the British & US curriculum, our students truly learn from the best.",
        color: "#C24278"
    },
    {
        image: "../images/homepageTreatment/rec3.svg",
        title: "1-ON-1 OR SMALL GROUP LESSONS",
        text: "Whatever your circumstance, we have something for you. Our small group online lessons build confidence and networking skills through a group. Classes are small enough to be personalised but big enough for the social skill-building effect.",
        color: "#DDA74F"
    },
];

function SixthHomepageProps(props) {

    const titleStyle = {
        color: props.color
    };
    
    return (
        <div className='flex flex-row gap-5 bg-white p-5'>
            <div>
                <img src={props.image} alt="" className='rounded-full' />
            </div>
            <div className='flex flex-col gap-5'>
                <p className='lg:text-xl md:text-lg text-base font-bold' style={titleStyle}>{props.title}</p>
                <p className='lg:text-lg md:text-base text-sm'>{props.text}</p>
            </div>
        </div>

    );
}

export default function SixthHomepage() {
    const mySixthHomepage = sixthHomepageData.map(item => (
        <div key={item.title} className="">
            <SixthHomepageProps
                image={item.image}
                title={item.title}
                text={item.text}
                color={item.color}
            />
        </div>
    ));

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <div className='flex flex-col gap-5'>
                <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl'>THE TOPSET TREATMENT</p>
                <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl text-[#957FBE]'>Why We’re Different</p>
            </div>
            <div className='flex flex-row gap-10'>
                <div className='flex flex-col gap-10 py-5 w-[30%]'>
                    <img src="../images/homepageTreatment/ellipse3.svg" alt="" className='rounded-full' />
                    <div className='text-center'>
                        <a href="" className='text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-3xl md:px-6 md:py-3 px-2 py-2'>LEARN MORE</a>
                    </div>
                </div>
                <div className='flex md:flex-col flex-col w-[70%]'>
                    {mySixthHomepage}
                </div>
            </div>
        </div>
    );
}
