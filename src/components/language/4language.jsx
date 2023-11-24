import React from 'react';

// function SixthHomepageProps(props) {
//     return (
//         <div className='flex flex-row gap-5 bg-white p-5'>
//             <div>
//                 <img src={props.image} alt="" className='rounded-full' />
//             </div>
//             <div className='flex flex-col gap-5'>
//                 <p className='lg:text-xl md:text-lg text-base font-bold' style={titleStyle}>{props.title}</p>
//                 <p className='lg:text-lg md:text-base text-sm'>{props.text}</p>
//             </div>
//         </div>

//     );
// }

export default function FourthLanguage() {
    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5 bg-[#F8F5FC] py-16 pb-24'>
            <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl text-[#2F1A60]'>
                BENEFITS
            </p>
            <div className='flex flex-col gap-5 md:flex-row md:gap-10'>
                <div className='flex flex-col gap-10 py-5 md:w-[30%] self-center md:self-auto'>
                    <img src="../images/language-benefits.svg" alt="" className='w-72 md:w-full' />
                </div>
                <div className='flex md:flex-col flex-col gap-10 md:w-[70%] text-center md:text-left'>
                    <p className='text-center lg:px-32 md:px-24 px-16 lg:text-lg md:text-base text-sm'>
                        At TopSet we recognize the immense benefits of online language learning and strive to create an experience that closely resembles immersive language learning. While apps and tools can be helpful, nothing compares to the personal interaction and real-time feedback provided by native speakers during online tutoring sessions.
                        <br /><br />
                        Our platform connects you with experienced tutors who are native speakers of Yoruba, Hausa, and Igbo. Through engaging conversations and tailored lessons, you will receive invaluable insights into the nuances of the language, cultural context, and practical usage. This personalized approach accelerates your progress, helping you achieve fluency and confidence in a fraction of the time compared to traditional self-study methods.
                        <br /><br />
                        There's no need to uproot your life and move to another country to learn a language. With our online tutoring sessions, you can immerse yourself in authentic language learning experiences from the comfort of your own home. Our flexible scheduling and user-friendly platform make it easy for you to fit language learning into your busy lifestyle.
                        <br /><br />
                        Book with us and embark on a language learning journey that is not only effective but also enjoyable and convenient, ensuring you become a confident speaker in no time.
                    </p>
                    <div className='text-center md:text-left'>
                        <a href="" className='text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-lg px-6 py-3'>BOOK A LESSON</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
