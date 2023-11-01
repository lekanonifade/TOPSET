import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SeventhHomepage = () => {
    return (
        <div className='flex justify-center items-center bg-[#F8F5FC]'>
            <div className=' grid grid-cols-2 md:grid-cols-4 justify-center p-10 px-20 lg:gap-28 md:gap-20 gap-10 text-center'>
                <div className='flex flex-col gap-4'>
                    <CircularProgressbar className='font-bold'
                        value={95}
                        text="95%"
                        styles={buildStyles({
                            textColor: '#000',
                            pathColor: '#C24278',
                            trailColor: '#F8F5FC',
                        })}
                    />
                    <div className='text-xs md:text-sm lg:text-base'>
                        of our students saw an improvement of 1 - 3 grades
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <CircularProgressbar className='font-bold'
                        value={100}
                        text="100%"
                        styles={buildStyles({
                            textColor: '#000',
                            pathColor: '#C24278',
                            trailColor: '#F8F5FC',
                        })}
                    />
                    <div className='text-xs md:text-sm lg:text-base'>
                        of our students got into the school of their choice
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <CircularProgressbar className='font-bold'
                        value={80}
                        text="80%"
                        styles={buildStyles({
                            textColor: '#000',
                            pathColor: '#C24278',
                            trailColor: '#F8F5FC',
                        })}
                    />
                    <div className='text-xs md:text-sm lg:text-base'>
                        of our students achieved an A or A+
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <CircularProgressbar className='font-bold'
                        value={100}
                        text="100%"
                        styles={buildStyles({
                            textColor: '#000',
                            pathColor: '#C24278',
                            trailColor: '#F8F5FC',
                        })}
                    />
                    <div className='text-xs md:text-sm lg:text-base'>
                        of our students
                        would refer us to
                        their family and friends
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeventhHomepage;
