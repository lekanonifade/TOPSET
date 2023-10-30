import React from "react";

export default function FirstHomepage() {
    return (
        <div className="lg:px-16 md:px-8 lg:pt-28 pt-10 px-5 min-w-screen flex flex-col lg:flex-row lg:items-center text-center lg:gap-5 lg:justify-between gap-20">
            <div className="flex flex-col gap-10 lg:text-left text-[#2F1A60]">
                <p className="lg:text-6xl text-3xl lg:text-[4vw] font-bold">
                    Expert Tutors.<br />
                    Proven methods.<br />
                    Top results.
                </p>
                <p className="lg:text-2xl lg:text-[2vw] text-sm text-[#957EBE]">
                    The #1 choice in online tutoring for students of all ages.
                </p>
                <div>
                    <a href="" className="items-left text-white text-xs lg:text-xl font-bold bg-[#C24278] rounded-3xl px-6 py-3">
                        BOOK A LESSON
                    </a>
                </div>
            </div>
            <div className="">
                <img src="../images/intro.svg" className="lg:w-[35vw] w-80 mx-auto my-auto" alt="intro" />
            </div>
        </div>
    )
}