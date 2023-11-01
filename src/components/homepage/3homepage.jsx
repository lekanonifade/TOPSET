import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

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

export default function ThirdHomepage() {

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
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <animated.p
                ref={ref}
                className='text-center font-bold lg:text-4xl md:text-2xl text-xl'
                style={servicesAnimation}
            >
                OUR SERVICES
            </animated.p>
            <div className='flex md:flex-row flex-col gap-10'>
                {myThirdHomepage}
            </div>
            <div className='text-center'>
                <a href="" className='text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-3xl px-6 py-3'>LEARN MORE</a>
            </div>
        </div>
    );
}
