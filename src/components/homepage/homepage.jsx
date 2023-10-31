import React from "react";
import FirstHomepage from "./1homepage";
import SecondHomepage from "./2homepage";
import ThirdHomepage from "./3homepage";

export default function Homepage() {
    return (
        <div className="flex flex-col gap-20 pb-24">
            <FirstHomepage />
            <SecondHomepage />
            <ThirdHomepage />
        </div>
    )
}