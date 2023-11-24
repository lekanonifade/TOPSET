import React from 'react'

export default function FirstAbout() {
    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5 mb-20 md:mb-28'>
            <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl text-[#2F1A60]'>
                MISSION
            </p>
            <p className='text-center lg:px-32 md:px-24 px-16 lg:text-lg md:text-base text-sm text-[#C24278] font-semibold'>
                Mission Driven Tutoring
            </p>
            <div>
                <img src="../images/about/about-mission.png" alt="" />
            </div>
            <p className='text-center lg:px-32 md:px-24 px-16 lg:text-lg md:text-base text-sm'>
                TopSet's mission is to deliver comprehensive, culturally-aware tutoring that empowers Nigerian students of all grades and subjects, unlocking their full potential. We understand Nigeria's unique educational needs and cultural context, enabling us to effectively address students' requirements.
                <br /><br />
                Our passionate team of experienced tutors, with backgrounds from prestigious institutions like Harvard University and support from Google for Startups, employs innovative teaching methods to make learning enjoyable and impactful. We provide personalized attention and adapt our teaching style to suit each student's learning preferences, ensuring they easily grasp complex concepts and develop a deep understanding of the subject matter.
                <br /><br />
                Our user-friendly platform allows students to learn at their own pace, from the comfort of their homes, making education more accessible. By blending high-quality tutoring with the convenience of online learning, we help Nigerian students excel academically and achieve their goals.
                <br /><br />
                TopSet is committed to fostering a love for learning in students, equipping them with the skills and knowledge they need to succeed. We offer tutoring in all subjects, including Nigerian languages, to ensure a well-rounded education. Join us in our mission to transform education and unlock the full potential of Nigeria's youth.
            </p>
        </div>
    )
}