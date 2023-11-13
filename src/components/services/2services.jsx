import React from 'react';

const secondServicesData = [
    {
        image: "../images/servicesSubjects/math.svg",
        title: "Math",
    },
    {
        image: "../images/servicesSubjects/english.svg",
        title: "English",
    },
    {
        image: "../images/servicesSubjects/biology.svg",
        title: "Biology",
    },
    {
        image: "../images/servicesSubjects/chemistry.svg",
        title: "Chemistry",
    },
    {
        image: "../images/servicesSubjects/elocution.svg",
        title: "Elocution",
    },
    {
        image: "../images/servicesSubjects/entrance.svg",
        title: "Entrance Exam Prep",
    },
    {
        image: "../images/servicesSubjects/infotech.svg",
        title: "Information Teachnology",
    },
    {
        image: "../images/servicesSubjects/literacy.svg",
        title: "Literacy",
    },
    {
        image: "../images/servicesSubjects/nonverbal.svg",
        title: "Non-Verbal Reasoning",
    },
    {
        image: "../images/servicesSubjects/numeracy.svg",
        title: "Numeracy",
    },
    {
        image: "../images/servicesSubjects/physics.svg",
        title: "Physics",
    },
    {
        image: "../images/servicesSubjects/verbal.svg",
        title: "Verbal Reasoning",
    },
];

function SecondServicesProps(props) {
    const divStyle = {
        backgroundImage: `url(${props.image})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '526px',
        width: '200px', 
    };

    return (
        <div className="bg-no-repeat" style={divStyle}>
            <p className='text-xs text-[#2F1A60] font-bold flex-wrap'>{props.title}</p>
        </div>
    );
}

export default function SecondServices() {
    const mySecondServices = secondServicesData.map(item => (
        <div key={item.title} className="">
            <SecondServicesProps
                image={item.image}
                title={item.title}
            />
        </div>
    ));

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <div className='md:w-1/2 text-center md:text-left flex flex-col gap-5'>
                <p className='font-bold lg:text-4xl md:text-2xl text-xl text-[#2F1A60]'>SUBJECTS WE OFFER</p>
                <p className='text-[#957EBE] lg:text-lg md:text-base text-sm'>Our team of experienced, passionate, and qualified tutors from well-known schools such as Harvard University, backed by big companies like Google For Startups, use innovative teaching methods to engage students, making learning more enjoyable and impactful. By offering personalized attention and adapting our teaching style to suit individual learning preferences, we ensure that students grasp complex concepts with ease and develop a deep understanding of the subject matter.</p>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-10'>
                {/* {mySecondServices} */}
            </div>
        </div>
    );
}
