import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function FifthHomepage() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const servicesAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: {
            delay: inView ? 0 : 1500,
        },
    });

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <animated.p
                ref={ref}
                className='text-center font-bold lg:text-4xl md:text-2xl text-xl'
                style={servicesAnimation}
            >
                STUDENT-CENTERED LEARNING. EXCELLENT RESULTS.
            </animated.p>
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