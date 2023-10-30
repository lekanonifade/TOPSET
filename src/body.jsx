import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/homepage";

export default function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                {/* <Route path="/services" element={} />
                <Route path="/language" element={} />
                <Route path="/book-a-lesson" element={} />
                <Route path="/about" element={} />
                <Route path="/contact" element={} /> */}
            </Routes>
        </div>
    )
}