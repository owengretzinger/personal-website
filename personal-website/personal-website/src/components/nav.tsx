import React, { useState, useEffect, useContext } from 'react';
import { BsList, BsX } from 'react-icons/bs'
import { MobileNavIsOpenContext } from '../pages/_app';
import { useRouter } from 'next/router';
import Logo from '@/components/logoSVG';
import handleClickScroll from './clickScroll';
import FadeInOnScroll from './fadeInOnScroll';


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


export default function Nav({ showOnLargeScreens = true, ...props }) {
  const router = useRouter();
  const scrollDirection = useScrollDirection();
  const [mobileNavOpen, setMobileNavOpen] = useContext(MobileNavIsOpenContext);

  return (
    <>
      {/* nav bar */}
      <nav className={`fixed top-0 w-full px-10 py-2 z-30 bg-white change-col-on-start to-bg transition-transform duration-500 ${scrollDirection === "up" ? "translate-y-0" : "-translate-y-20"} ${showOnLargeScreens ? "block" : "lg:hidden"}`}>
        <div className="flex h-16 items-center justify-between">
          <FadeInOnScroll delay={7}>
            <button className="flex z-[100]" onClick={() => router.pathname === "/" ? handleClickScroll("home") : router.push("/")}>
              <Logo />
            </button>
          </FadeInOnScroll>
          <FadeInOnScroll delay={9}>
            <button className="lg:hidden" onClick={() => setMobileNavOpen(true)}>
              <BsList className="stroke-black stroke-1" size={50} />
            </button>
          </FadeInOnScroll>
          <ul className="hidden lg:flex gap-12 items-center">
            {props.children}
          </ul>
        </div>
      </nav>
      {/* mobile drawer */}
      <div className={`top-0 lg:hidden fixed z-50 w-screen h-screen ${mobileNavOpen ? "backdrop-blur-sm pointer-events-auto" : "backdrop-blur-none pointer-events-none"} transition-[--tw-backdrop-blur] duration-500`}>
        <button className={`fixed h-screen w-screen`}
          onClick={() => setMobileNavOpen(false)}>
        </button>
        <ul className={`fixed right-0 top-0 w-[304px] max-w-[75%] ${mobileNavOpen ? "translate-x-0" : "translate-x-full"} h-full 
                          flex flex-col justify-center items-center text-center bg-white gap-12 transition-transform duration-500`}>
          <button className="fixed top-0 right-0 mr-10 mt-2" onClick={() => setMobileNavOpen(false)}>
            <BsX className="stroke-black stroke-1" size={60} />
          </button>
          {props.children}
        </ul>
      </div>
    </>
  );
};