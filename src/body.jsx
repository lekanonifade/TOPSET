import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Services from "./components/services/services";
import Language from "./components/language/language";
import About from "./components/about/about";

export default function Body() {
    return (
        <div className="lg:pt-28 md:pt-16 pt-10">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/language" element={<Language />} />
                {/* <Route path="/book-a-lesson" element={} /> */}
                <Route path="/about" element={<About />} />
                {/* <Route path="/contact" element={} /> */}
            </Routes>
        </div>
    )
}