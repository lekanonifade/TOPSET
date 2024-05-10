import React from 'react'

export default function ThirdAbout() {
    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5 py-16 pb-24'>
            <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl text-[#2F1A60]'>
                VISION
            </p>
            <div className='flex flex-col gap-10 md:flex-row md:gap-10'>
                <div className='flex md:flex-col flex-col gap-10 md:w-[60%] text-center md:text-left'>
                    <p className='text-center lg:px-32 md:px-24 px-16 lg:text-lg md:text-base text-sm'>
                        TopSet envisions a future where quality education is accessible to every Nigerian student, regardless of their location or socioeconomic background. We aim to revolutionize the learning experience by offering personalized, engaging, and culturally-aware tutoring in all subjects and grades, including Nigerian languages.
                        <br /><br />
                        Our vision is to bridge the educational gap and create equal opportunities for students across Nigeria, empowering them with the knowledge and skills needed to thrive in a rapidly evolving world. By leveraging innovative teaching methods and harnessing the power of technology, we strive to make learning more enjoyable, efficient, and effective.
                        <br /><br />
                        We see a future where our students become confident, well-rounded individuals who excel academically and contribute positively to their communities. Through our platform, we aspire to nurture a generation of critical thinkers, problem solvers, and lifelong learners who will lead Nigeria toward a brighter future.
                        <br /><br />
                        By fostering strong partnerships with parents, educators, and stakeholders, TopSet aims to create a collaborative ecosystem that supports and celebrates the success of every student. Together, we will transform the educational landscape in Nigeria and unlock the limitless potential of our nation's youth.
                    </p>
                    <div className='text-center'>
                        <a href="" className='text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-lg px-6 py-3'>BOOK A LESSON</a>
                    </div>
                </div>
                <div className='flex flex-col gap-10 py-5 md:w-[40%] self-center md:self-auto -mt-5'>
                    <img src="../images/about/about-vision.png" alt="" className='w-72 md:w-full' />
                </div>
            </div>
        </div>
    );
}