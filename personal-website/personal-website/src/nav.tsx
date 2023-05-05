import React, { useState, useEffect } from 'react';
import { BsList } from 'react-icons/bs'

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("up");
    
  
    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? "down" : "up";
        
        const atTopOfPage = scrollY < 70;
        if (atTopOfPage) {
            setScrollDirection("up");
        }
        else if (direction !== scrollDirection && (Math.abs(scrollY - lastScrollY) > 0)) {
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

function Nav() {
    const scrollDirection = useScrollDirection();

    return (
        <div>
            <nav className={`fixed w-full px-10 py-2 z-10 bg-white transition duration-1000 ${scrollDirection === "up" ? "translate-y-0" : "-translate-y-20"}`}>
            <div className="flex h-16 items-center justify-between">
                <LogoButton />
                <BsList className="lg:hidden stroke-black stroke-1" size={50} />
                <ul className="hidden lg:flex gap-12">
                    {NavButtons([["About", "/"], ["Projects", "/"], ["Articles", "/"], ["Contact", "/"]])}
                    <li key={"Resume"} >{OutlineButton("Resume", "https://google.com")}</li>
                </ul>
            </div>
        </nav>
        </div>
    );
};


const NavButtons = (buttons: [string, string][]) => {
    return (
      <>
        {
          buttons.map((button, index) => {
            var text = button[0]
            var link = button[1]
            return (
              <li key={text} >
                <a href={link} className="group flex">
                  <p className="text-orange">{index + 1}.&nbsp;</p>
                  <p className="group-hover:text-orange transition">{text}</p>
                </a>
              </li>
            )
          })
        }</>
    )
  }
  
  const OutlineButton = (text: string, link: string) => {
    return (
      <a href={link} target="_blank"
        className='border-2 border-orange px-4 py-2 rounded-lg text-orange hover:bg-light-orange transition'>
        {text}
      </a>
    )
  }

  function LogoButton() {
    return (
      <a href="/">
        <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="31" strokeWidth="7" className='stroke-orange' />
          <circle cx="35" cy="35" r="28" strokeWidth="7" className='stroke-black' />
          <circle cx="35" cy="35" r="12.9231" strokeWidth="7" className='stroke-black' />
        </svg>
      </a>
    )
  }


export { Nav }