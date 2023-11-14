import React from "react";
import { useSpring, animated } from "react-spring";

export default function FirstLanguage() {
    const leftSideAnimation = useSpring({
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0%)" },
        config: {
            duration: 1000,
        },
    });

    return (
        <div className="lg:px-16 md:px-8 px-5 min-h-screen min-w-screen flex flex-col md:flex-row md:items-center text-center md:gap-5 md:justify-between gap-20">
            <animated.div style={leftSideAnimation} className="flex flex-col gap-10 md:text-left text-[#2F1A60] md:w-1/2">
                <p className="text-4xl font-bold">Language</p>
                <p className="text-[#C24278] text-2xl">Achieving fluency for diverse language learners</p>
                <p className="lg:text-5xl md:text-4xl text-3xl md:text-[4vw] font-bold">
                    CONNECTION TO CULTURE
                </p>
                <p className="lg:text-xl lg:text-[2vw] md:text-base text-sm text-black">
                    At our Nigerian tutoring website, we believe in the transformative power of connecting with one's culture and heritage through language learning.
                    <br /><br />
                    By offering courses in Yoruba, Hausa, and Igbo, we provide students with an opportunity to delve deeper into their roots and embrace the rich tapestry of Nigerian culture.
                    <br /><br />
                    Gaining proficiency in these native languages not only strengthens cultural bonds but also fosters a sense of pride and belonging. Join us on a journey to rediscover your heritage and unlock the true potential of Nigeria's diverse linguistic landscape.
                </p>
            </animated.div>
            <div className="">
                <img src="../images/language-intro.svg" className="lg:w-[35vw] md:w-[45vw] w-80 mx-auto my-auto" alt="intro" />
            </div>
        </div>
    );
}
