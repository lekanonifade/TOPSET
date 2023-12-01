import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const thirdLanguageData = [
    {
        id: "1",
        title: "BEGINNER",
        note: "For beginners, we start with the basics, introducing the alphabet and helping students build a solid foundation in pronunciation, vocabulary, and grammar. Lessons progress to cover everyday item names and general conversation skills, enabling students to confidently navigate everyday situations in their target language.",
    },
    {
        id: "2",
        title: "ADVANCED",
        note: "As students advance, we delve into more complex language concepts, including idioms, proverbs, and nuanced expressions that enrich their fluency and understanding of the culture. Our lessons cater to advanced learners who wish to refine their skills or maintain their proficiency through regular practice.",
    },
];

function ThirdLanguageProps(props) {
    return (
        <div className='flex flex-col gap-5 bg-[#F3EBFE] rounded-3xl p-10'>
            <p className='font-extrabold text-[#2F1A60] md:text-left text-center'>{props.title}</p>
            <p className='md:text-left text-center lg:text-base text-sm'>{props.note}</p>
        </div>
    );
}

export default function ThirdLanguage() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            delay: 200,
            once: false,
        });
        Aos.refresh();
    }, []);

    const myThirdLanguage = thirdLanguageData.map((item, index) => (
        <div key={item.id}>
            <ThirdLanguageProps
                id={item.id}
                title={item.title}
                note={item.note}
            />
        </div>
    ));

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl text-[#2F1A60]' data-aos="zoom-in">
                BEGINNER TO ADVANCED
            </p>
            <p className='text-center lg:px-32 md:px-24 px-16 lg:text-lg md:text-base text-sm' data-aos="zoom-out">
                TopSet is designed to accommodate learners at every stage of their language journey, from complete beginners to advanced speakers. We understand that each student has unique needs and goals, and we tailor our lessons accordingly to ensure a personalized learning experience.
            </p>
            <div className='flex flex-col md:gap-5 gap-10 md:flex-row' data-aos="zoom-in-up">
                {myThirdLanguage}
            </div>
            <div className='self-center' data-aos="fade-up">
                <img src="../images/language-step.svg" alt="" className='w-56' />
            </div>
            <p className='text-center lg:px-32 md:px-24 px-16 lg:text-lg md:text-base text-sm' data-aos="zoom-out">
                Our expert tutors provide a supportive and engaging environment where students can feel at ease, making learning enjoyable and efficient. Whether you are just starting your language journey or looking to perfect your skills, our tailored lessons will guide you every step of the way, ensuring success and a lasting connection to the languages and cultures of Nigeria.
            </p>
        </div>
    )
}
