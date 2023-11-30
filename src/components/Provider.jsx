import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Provider = ({children}) => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            delay: 200,
            once: false,
        });
        Aos.refresh();
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}

export default Provider