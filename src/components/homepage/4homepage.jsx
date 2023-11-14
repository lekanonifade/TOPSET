import React from 'react';

export default function FourthHomepage() {
    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <div className='flex flex-row gap-10 items-center'>
                <div>
                    <img src="../images/ellipse2.png" alt="" className='rounded-full' />
                </div>
                <div className='flex flex-col gap-5 lg:text-xl md:text-lg text-sm'>
                    <p className='font-bold'>“Bs and Cs to As and A+s!”</p>
                    <p>"This was the best decision we made for our 2 children. Their grades very quickly went from Bs and Cs to As and A+s!"</p>
                </div>
            </div>
            <div className='text-center'>
                <a href="/book-a-lesson" className='text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-lg px-6 py-3'>GET STARTED</a>
            </div>
        </div>
    );
}