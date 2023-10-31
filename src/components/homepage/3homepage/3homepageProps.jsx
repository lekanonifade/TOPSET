import React from 'react';

export default function ThirdHomepageProps(props) {
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
