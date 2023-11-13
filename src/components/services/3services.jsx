import React from 'react';

const thirdServicesData = [
    {
        
    },
];

function ThirdServicesProps(props) {
    return (
        <div className='flex flex-col items-center gap-10 p-5 lg:w-96 md:w-80 w-72'> 
            
        </div>
    );
}

export default function ThirdServices() {

    const myThirdServices = thirdServicesData.map((item, index) => (
        <div key={item.note}>
            <ThirdServicesProps
                image={item.image}
                note={item.note}
            />
        </div>
    ));

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl text-[#2F1A60]'>
                TUTORING FOR ALL GRADE LEVELS
            </p>
            <div className='flex flex-row lg:gap-20 md:gap-10 overflow-x-auto hide-scroll'>
                {/* {myThirdServices} */}
            </div>
            <div className='text-center'>
                <a href="#" className='text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-3xl px-6 py-3'>BOOK A LESSON</a>
            </div>
        </div>
    );
}
