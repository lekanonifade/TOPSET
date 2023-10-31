import React from 'react';

export default function FifthHomepage() {
    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl'>
                STUDENT-CENTERED LEARNING. EXCELLENT RESULTS.
            </p>
            <div className='text-center lg:px-32 md:px-24 px-16 lg:text-lg md:text-base text-sm'>
                <p>Here at TopSet, we believe each student is gifted, but certain learning problems often get in their way. Teaching methods are boring and outdated, class sizes are too large for individual attention, or the curriculum is archaic.</p>
                <br />
                <p>These symptoms combine to create an unhealthy relationship with learning, which leads to disengaged students and underperformance.</p>
                <br />
                <p>But we do things differently here. We help each student get better results by rebuilding their love for learning and customizing learning plans to their specific needs.</p>
            </div>
        </div>
    );
}