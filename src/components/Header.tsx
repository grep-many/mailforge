import { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <header className="flex justify-between items-center p-4 lg:px-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">MailForger</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-12">
                <a 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                href="#"
                 className="text-base tracking-wider transition-colors hover:text-gray-300"
                 >COMPANY</a>
                <a 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                href="#"
                 className="text-base tracking-wider transition-colors hover:text-gray-300">FEATURES</a>
                <a 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"
                href="#"
                 className="text-base tracking-wider transition-colors hover:text-gray-300">RESOURCES</a>
                <a 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500"
                href="#"
                 className="text-base tracking-wider transition-colors hover:text-gray-300">DOCS</a>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
                SIGNIN
            </button>

            {/* Mobile Menu Button - Visibile only on Mobile */}
            <button onClick={() => setToggle(!toggle)} className="md:hidden text-3xl p-2 z-50 cursor-pointer">
                <i className={`bx bx-${toggle ? "x" : "menu"}`}></i>
            </button>

            {/* Mobile Menu - Hidden by default */}
            <nav
                className={`
                    fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black/70 backdrop-blur-md
                    flex flex-col justify-center items-center gap-6
                    transform transition-all duration-500 ease-in-out
                    ${toggle ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-100 pointer-events-none"}
                `}
            >
                <a 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                href="#"
                 className="text-3xl font-medium tracking-wider transition-colors hover:text-gray-300"
                 >COMPANY</a>
                <a 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                href="#"
                 className="text-3xl font-medium tracking-wider transition-colors hover:text-gray-300"
                 >FEATURES</a>
                <a 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"
                href="#"
                 className="text-3xl font-medium tracking-wider transition-colors hover:text-gray-300"
                 >RESOURCES</a>
                <a 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500"
                href="#"
                 className="text-3xl font-medium tracking-wider transition-colors hover:text-gray-300"
                 >DOCS</a>
            </nav>

        </header>
    );
}

export default Header;
