import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    const navLinkStyles = ({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
    });

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);

    return (
        <div>
            <header className="w-full bg-white fixed top-0 z-10 font-bold">
                <nav>
                    <div className="justify-between lg:py-10 md:py-8 lg:px-16 md:px-8 py-3 px-5 mx-auto md:items-center md:flex text-[#2F1A60] lg:text-sm md:text-[10px]">
                        <div>
                            <div className="flex items-center justify-between md:block">
                                <a href="#home" onClick={closeNavbar}>
                                    <NavLink to="/">
                                        <img
                                            src="../images/topset.svg"
                                            alt="TOPSET"
                                            className="lg:w-40 md:w-28 w-28"
                                        />
                                    </NavLink>
                                </a>
                                <div className="md:hidden">
                                    <button
                                        className="p-2 text-black text-xl"
                                        onClick={toggleNavbar}
                                    >
                                        <FontAwesomeIcon
                                            icon={navbarOpen ? faTimes : faBars}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbarOpen ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center h-[100vh] md:h-full justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    <li className="">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/services"
                                        >
                                            SERVICES
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/language"
                                        >
                                            LANGUAGE
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/book-a-lesson"
                                        >
                                            BOOK A LESSON
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/about"
                                        >
                                            ABOUT
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/contact"
                                        >
                                            CONTACT
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:block hidden gap-10 ">
                            <ul className="md:flex md:justify-between">
                                <li className="py-2">
                                    <NavLink
                                        style={navLinkStyles}
                                        onClick={closeNavbar}
                                        className="py-1 px-2 rounded"
                                        to="/login"
                                    >
                                        LOGIN
                                    </NavLink>
                                </li>
                                <li className="bg-[#C24278] rounded-3xl py-2 px-2 text-white">
                                    <NavLink
                                        style={navLinkStyles}
                                        onClick={closeNavbar}
                                        className="py-1 px-2 rounded"
                                        to="/sign-up"
                                    >
                                        SIGN UP
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <p className="h-14"></p>
        </div>
    );
};

export default Header;
