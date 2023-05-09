import React, { useState, useEffect } from 'react';
import { BsList, BsX } from 'react-icons/bs'



const OutlineButton = (text: string, link: string) => {
    return (
        <a href={link} target="_blank"
            className='border-2 border-orange px-4 py-2 rounded-lg text-orange hover:bg-light-orange transition'>
            {text}
        </a>
    )
}



function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("up");


    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";

            const atTopOfPage = scrollY < 50;
            if (atTopOfPage) {
                setScrollDirection("up");
            }
            else if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) > 1)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    return scrollDirection;
};

export default function Nav() {
    const scrollDirection = useScrollDirection();

    const handleClickScroll = (section: string) => {
        const yOffset = -60;
        const element = document.getElementById(section);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const navButtons = ["About", "Projects", "Articles", "Contact"]

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
        document.body.style.overflow = mobileNavOpen ? "visible" : "hidden";
    }

    return (
        <>
            <div>
                <nav className={`fixed w-full px-10 py-2 z-30 bg-white transition duration-500 ${scrollDirection === "up" ? "translate-y-0" : "-translate-y-20"}`}>
                    <div className="flex h-16 items-center justify-between">
                        <button className="flex z-[100]" onClick={() => handleClickScroll("home")}>
                            <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="31" strokeWidth="7" className='stroke-orange' />
                                <circle cx="35" cy="35" r="28" strokeWidth="7" className='stroke-black' />
                                <circle cx="35" cy="35" r="12.9231" strokeWidth="7" className='stroke-black' />
                            </svg>
                        </button>
                        <button className="lg:hidden" onClick={toggleMobileNav}>
                            <BsList className="stroke-black stroke-1" size={50} />
                        </button>
                        <ul className="hidden lg:flex gap-12">
                            {
                                navButtons.map((text, index) => {
                                    return (
                                        <li key={text} >
                                            <button onClick={() => handleClickScroll(text)} className="group flex">
                                                <p className="text-orange">{index + 1}.&nbsp;</p>
                                                <p className="group-hover:text-orange transition">{text}</p>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                            <li key={"Resume"} >{OutlineButton("Resume", "https://google.com")}</li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={`lg:hidden fixed z-50 w-screen h-screen ${mobileNavOpen ? "backdrop-blur-sm pointer-events-auto" : "backdrop-blur-none pointer-events-none"} transition-all duration-500`}>
                <button className={`fixed h-screen w-screen`}
                    onClick={toggleMobileNav}>
                </button>
                <ul className={`fixed right-0 top-0 w-[200px] max-w-[75%] ${mobileNavOpen ? "translate-x-0" : "translate-x-full"} h-full 
                          flex flex-col justify-center items-center text-center bg-white gap-12 transition-all duration-500`}>
                    <button className="fixed top-0 right-0 mr-10 mt-2" onClick={toggleMobileNav}>
                        <BsX className="stroke-black stroke-1" size={60} />
                    </button>
                    {
                        navButtons.map((text, index) => {
                            return (
                                <li key={text} >
                                    <button onClick={() => { handleClickScroll(text); toggleMobileNav() }} className="group flex">
                                        <p className="text-orange">{index + 1}.&nbsp;</p>
                                        <p className="group-hover:text-orange transition">{text}</p>
                                    </button>
                                </li>
                            )
                        })
                    }
                    <li key={"Resume"} >{OutlineButton("Resume", "https://google.com")}</li>
                </ul>
            </div>
        </>
    );
};