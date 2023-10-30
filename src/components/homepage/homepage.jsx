import React from "react";
import FirstHomepage from "./1homepage/1homepage";
import SecondHomepage from "./2homepage/2homepage";

export default function Homepage() {
    return (
        <div className="flex flex-col gap-20">
            <FirstHomepage />
            <SecondHomepage />
        </div>
    )
}