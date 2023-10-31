import React from 'react';
import Marquee from 'react-fast-marquee';

const imageUrls = [
  '../images/marquee/uni1.png',
  '../images/marquee/uni2.png',
  '../images/marquee/uni3.png',
  '../images/marquee/uni4.png',
  '../images/marquee/uni5.png',
  '../images/marquee/uni6.png',
];

const MarqueeComponent = () => {
  return (
    <div className="marquee-container">
      <Marquee direction="left" speed={100} containerClassName="marquee">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} />
        ))}
      </Marquee>
    </div>
  );
};

export default function SecondHomepage() {
  return (
    <div className='flex flex-col lg:gap-10 md:gap-8 gap-5 text-center bg-[#957FBE80] text-white font-bold lg:py-8 md:py-6 py-3'>
      <p className='lg:text-xl md:text-lg text-sm'>WHERE OUR STUDENTS HAVE PLACED</p>
      <MarqueeComponent />
    </div>
  );
}
