import React from 'react';
import MarqueeComponent from './2homepageProps';

export default function SecondHomepage() {
    return (
        <div className='flex flex-col lg:gap-10 md:gap-8 gap-5 text-center bg-[#957FBE80] text-white font-bold lg:py-8 md:py-6 py-3'>
            <p className='lg:text-xl md:text-lg text-sm'>WHERE OUR STUDENTS HAVE PLACED</p>
            <MarqueeComponent />
        </div>
    );
}
