import React from 'react'

const secondLanguageData = [
    {
        id: "1",
        image: "../images/language/yoruba.svg",
        title: "YORUBA",
        note: "Yoruba is spoken by the Yoruba people, who primarily inhabit southwestern Nigeria and parts of neighboring countries. Their culture is renowned for its captivating art, traditional music, and profound folklore. Learning Yoruba enables students to appreciate and engage with the Yoruba community's colorful heritage.",
    },
    {
        id: "2",
        image: "../images/language/hausa.svg",
        title: "HAUSA",
        note: "Hausa, the language of the Hausa people, is widely spoken across West Africa, particularly in northern Nigeria and Niger. The Hausa culture boasts a fascinating history, with ancient cities such as Kano and Katsina known for their impressive architecture and trade. Mastering Hausa unlocks the door to this region's rich traditions and customs.",
    },
    {
        id: "3",
        image: "../images/language/igbo.svg",
        title: "IGBO",
        note: "Igbo, spoken by the Igbo people of southeastern Nigeria, is a language steeped in history and ancestral wisdom. The Igbo people are known for their strong sense of community, vibrant festivals, and traditional masquerades. Acquiring proficiency in Igbo allows students to connect with this heritage and experience the depth of Igbo culture.",
    },
];

function SecondLanguageProps(props) {
    return (
        <div className='flex flex-col lg:gap-10 md:gap-3 gap-5 shadow-xl lg:h-[40rem] md:h-[37rem] rounded-xl p-3'>
            <div className='self-center h-40 lg:mt-7 md:mt-4 mt-2 mb-10'>
                <img src={props.image} alt="" className='w-56' />
            </div>
            <p className='font-extrabold text-[#2F1A60] text-center'>{props.title}</p>
            <p className='text-center lg:text-base text-sm'>{props.note}</p>
        </div>
    );
}

export default function SecondLanguage() {
    const mySecondLanguage = secondLanguageData.map((item, index) => (
        <div key={item.id}>
            <SecondLanguageProps
                id={item.id}
                image={item.image}
                title={item.title}
                note={item.note}
            />
        </div>
    ));

    return (
        <div className='flex flex-col gap-10 lg:px-16 md:px-8 px-5'>
            <p className='text-center font-bold lg:text-4xl md:text-2xl text-xl text-[#2F1A60]'>
                LANGUAGES WE TEACH
            </p>
            <p className='text-center lg:px-32 md:px-24 px-16 lg:text-lg md:text-base text-sm'>
                At our TopSet, we are proud to offer courses in Yoruba, Hausa, and Igbo, three distinct and vibrant languages representing the rich diversity of Nigeria's cultural landscape.
            </p>
            <div className='flex flex-col md:gap-5 gap-10 md:flex-row'>
                {mySecondLanguage}
            </div>
            <p className='text-center lg:px-32 md:px-24 px-16 lg:text-lg md:text-base text-sm'>
                By teaching Yoruba, Hausa, and Igbo, we aim to foster cultural appreciation and understanding among our students, enriching their lives and strengthening the bonds that unite Nigeria's diverse communities.
            </p>
        </div>
    )
}
