import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/homepage";

export default function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                {/* <Route path="/products" element={<Products />} />
                <Route path="/company" element={<Company />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/contact-us" element={<Contact />} /> */}
            </Routes>
        </div>
    )
}