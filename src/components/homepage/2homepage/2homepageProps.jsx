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

export default MarqueeComponent;
