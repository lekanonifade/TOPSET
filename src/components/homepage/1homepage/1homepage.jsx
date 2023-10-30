import React from "react";

export default function FirstHomepage() {
    return (
        <div className="lg:px-16 max-h-screen md:px-8 lg:pt-28 md:pt-16 pt-10 px-5 min-w-screen flex flex-col md:flex-row md:items-center text-center md:gap-5 md:justify-between gap-20">
            <div className="flex flex-col gap-10 md:text-left text-[#2F1A60]">
                <p className="lg:text-6xl md:text-4xl text-3xl md:text-[4vw] font-bold">
                    Expert Tutors.<br />
                    Proven methods.<br />
                    Top results.
                </p>
                <p className="lg:text-2xl lg:text-[2vw] md:text-base text-sm text-[#957EBE]">
                    The #1 choice in online tutoring for students of all ages.
                </p>
                <div>
                    <a href="" className="items-left text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-3xl px-6 py-3">
                        BOOK A LESSON
                    </a>
                </div>
            </div>
            <div className="">
                <img src="../images/intro.svg" className="lg:w-[35vw] md:w-[45vw] w-80 mx-auto my-auto" alt="intro" />
            </div>
        </div>
    )
}