import React from "react";
import { useSpring, animated } from "react-spring";

export default function FirstServices() {
    const leftSideAnimation = useSpring({
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0%)" },
        config: {
            duration: 1000,
        },
    });

    return (
        <div className="lg:px-16 md:px-8 px-5 max-h-screen min-w-screen flex flex-col md:flex-row md:items-center text-center md:gap-5 md:justify-between gap-20">
            <animated.div style={leftSideAnimation} className="flex flex-col gap-10 md:text-left text-[#2F1A60] md:w-1/2">
                <p className="lg:text-5xl md:text-4xl text-3xl md:text-[4vw] font-bold">
                    Services
                </p>
                <p className="lg:text-xl lg:text-[2vw] md:text-base text-sm font-bold text-[#957EBE]">
                    At TopSet, we provide a comprehensive and highly effective learning experience for students of all grades and subjects, including Nigerian languages.
                    <br /><br />
                    Our approach works best for students because we understand the unique educational needs and cultural context of Nigeria.
                </p>
            </animated.div>
            <div className="">
                <img src="../images/services-intro.svg" className="lg:w-[35vw] md:w-[45vw] w-80 mx-auto my-auto" alt="intro" />
            </div>
        </div>
    );
}
