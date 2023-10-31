import React from 'react';
import thirdHomepageData from './3homepageData';
import ThirdHomepageProps from './3HomepageProps';

export default function ThirdHomepage() {

    const myThirdHomepage = thirdHomepageData.map(item => {
        return (
            <div className="">
                <ThirdHomepageProps
                    image={item.image}
                    title={item.title}
                    text={item.text}
                />
            </div>
        )
    })

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <p className='text-center font-bold text-4xl'>OUR SERVICES</p>
            <div className='flex md:flex-row flex-col gap-10'>
                {myThirdHomepage}
            </div>
            <div className='text-center'>
                <a href="" className='text-white font-bold bg-[#C24278] py-3 px-4 rounded-3xl text-xl'>LEARN MORE</a>
            </div>
        </div>
    );
}
