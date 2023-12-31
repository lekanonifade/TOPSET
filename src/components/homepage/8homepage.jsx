import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const eighthHomepageData = [
    {
        image: "../images/homepageTestimonial/test1.svg",
        note: "“This was the best decision we made for our 2 children. Their grades very quickly went from Bs and Cs to As and A+s!”",
    },
    {
        image: "../images/homepageTestimonial/test2.svg",
        note: "“TopSet Tutoring is a very professional educational platform. My experience was very topnotch and pleasant.”",
    },
    {
        image: "../images/homepageTestimonial/test3.svg",
        note: "“Excellent teachers and great customer service. The classes are extremely engaging for the kids, will use them again!”",
    },
];

function EighthHomepageProps({ image, note }) {
    return (
        <div className='flex flex-col items-center gap-10 p-5 lg:w-96 md:w-80 w-72'> 
            <div className="flex justify-center"> 
                <img src={image} alt="" className='rounded-full' />
            </div>
            <p className='lg:text-lg md:text-base text-sm text-center h-20'>{note}</p> 
            <div className='flex flex-row justify-center w-10'>
                {Array(5).fill(null).map((_, index) => (
                    <img key={index} src="../images/star.svg" alt="star" />
                ))}
            </div>
        </div>
    );
}

export default function EighthHomepage() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const servicesAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: {
            delay: inView ? 0 : 1500,
        },
    });

    const myEighthHomepage = eighthHomepageData.map((item, index) => (
        <div key={item.note}>
            <EighthHomepageProps
                image={item.image}
                note={item.note}
            />
        </div>
    ));

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            {/* <animated.p
                ref={ref}
                className='text-center font-bold lg:text-4xl md:text-2xl text-xl'
                style={servicesAnimation}
            >
                TESTIMONIALS
            </animated.p> */}
            <p
                className='text-center font-bold lg:text-4xl md:text-2xl text-xl'
                data-aos="fade-up"
            >
                TESTIMONIALS
            </p>
            <div className='flex flex-row lg:gap-20 md:gap-10 overflow-x-auto hide-scroll'>
                {myEighthHomepage}
            </div>
            <div className='text-center'>
                <a href="#" className='text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-lg px-6 py-3'>BOOK A LESSON</a>
            </div>
        </div>
    );
}
