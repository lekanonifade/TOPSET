import React from 'react';
import Marquee from 'react-fast-marquee';

const imageUrls = [
  '../images/about/about-marquee-1.png',
  '../images/about/about-marquee-2.png',
  '../images/about/about-marquee-3.png',
  '../images/about/about-marquee-4.png',
  '../images/about/about-marquee-5.png',
  '../images/about/about-marquee-6.png',
];

const MarqueeComponent = () => {
  return (
    <div className="marquee-container">
      <Marquee direction="left" speed={100} containerClassName="marquee">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            className='w-40 mr-10 md:mr-20' // Add margin-right to create a gap between images
          />
        ))}
      </Marquee>
    </div>
  );
};

export default function SecondHomepage() {
  return (
    <div className='flex flex-col lg:gap-10 md:gap-8 gap-5 text-center bg-[#957FBE80] text-white font-bold lg:py-8 md:py-6 py-3'>
      <p className='lg:text-xl md:text-lg text-sm text-[#957FBE]'>BACKED BY</p>
      <MarqueeComponent />
    </div>
  );
}
