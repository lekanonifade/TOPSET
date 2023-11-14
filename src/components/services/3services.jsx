import React from 'react';

const thirdServicesData = [
    {
        id: "1",
        image: "../images/services-ellipse.svg",
        title: "PRIMARY",
        text1: "KS1",
        text2: "KS2",
        note: "Entrance Exam",
    },
    {
        id: "2",
        image: "../images/services-ellipse.svg",
        title: "SECONDARY",
        text1: "KS3",
        text2: "IGCSE, IB, SATs",
        note: "WAEC, NECO, JAMB",
    },
    {
        id: "3",
        image: "../images/services-ellipse.svg",
        title: "FURTHER EDUCATION",
        text1: "A Level",
        text2: "AP Exam",
        note: "Personal Statements",
    },
];

function ThirdServicesProps(props) {
    return (
        <div className='flex flex-col items-center gap-5 p-5 lg:w-96 md:w-80 w-72 rounded-xl shadow-xl lg:text-2xl md:text-lg text-sm'> 
            <img src={props.image} alt="" />
            <p className='font-extrabold'>{props.title}</p>
            <p className='shadow-xl p-2'>{props.text1}</p>
            <p className='shadow-xl p-2'>{props.text2}</p>
            <p>{props.note}</p>
        </div>
    );
}

export default function ThirdServices() {

    const myThirdServices = thirdServicesData.map((item, index) => (
        <div key={item.id}>
            <ThirdServicesProps
                id={item.id}
                image={item.image}
                title={item.title}
                text1={item.text1}
                text2={item.text2}
                note={item.note}
            />
        </div>
    ));

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl text-[#2F1A60]'>
                TUTORING FOR ALL GRADE LEVELS
            </p>
            <div className='flex flex-row lg:gap-20 md:gap-10 gap-10 overflow-x-auto hide-scroll px-3 py-10'>
                {myThirdServices}
            </div>
            <div className='text-center'>
                <a href="#" className='text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-lg px-6 py-3'>BOOK A LESSON</a>
            </div>
        </div>
    );
}
