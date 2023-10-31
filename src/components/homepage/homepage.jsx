import React from "react";
import FirstHomepage from "./1homepage";
import SecondHomepage from "./2homepage";
import ThirdHomepage from "./3homepage";
import FourthHomepage from "./4homepage";
import FifthHomepage from "./5homepage";
import SixthHomepage from "./6homepage";
import SeventhHomepage from "./7homepage";
import EighthHomepage from "./8homepage";

export default function Homepage() {
    return (
        <div className="flex flex-col gap-28 pb-24">
            <FirstHomepage />
            <SecondHomepage />
            <ThirdHomepage />
            <FourthHomepage />
            <FifthHomepage />
            <SixthHomepage />
            <SeventhHomepage />
            <EighthHomepage />
        </div>
    )
}