'use client';

import React, { useState, useEffect, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// import { mobileNavOpenContext } from '../pages/_app';
import { ScrollingDisabledContext } from '@/app/scrolling-disabled-provider';

import { BsList, BsX } from 'react-icons/bs'

import Logo from './logoSVG';
import FadeInOnScroll from './fadeInOnScroll';

import handleClickScroll from '../lib/clickScroll';

import animations from './loadingAnimation.module.css';
import { LoadingAnimationPlayingContext } from '@/app/loading-animation-provider';
import HomeButtonAfterDivider from './homeButton';

const topOfPageThreshold = 50;

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      const atTopOfPage = scrollY < topOfPageThreshold;
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
  const pathname = usePathname();
  
  const scrollDirection = useScrollDirection();

  const [scrollingDisabled, setScrollingDisabled] = useContext(ScrollingDisabledContext);

  // setting document overflow to hidden handled in scrolling-disabled-provider.tsx

  return (
    <>
      {/* nav bar */}
      <nav className={`fixed top-0 w-full px-10 py-2 z-30 bg-white transition-transform duration-500 ${scrollDirection === "up" ? "translate-y-0" : "-translate-y-20"} ${showOnLargeScreens ? "block" : "lg:hidden"} ${animations.changeColOnStart} ${animations.toBg}`}>
        <div className="flex h-16 items-center justify-between">
          <FadeInOnScroll delay={7} waitForLoad={true}>
            <button title="Home" className="flex z-[100]" onClick={() => pathname === "/" ? (window.scrollY < topOfPageThreshold ? window.location.href = "/" : handleClickScroll("home")) : router.push("/")}>
              <Logo />
            </button>
          </FadeInOnScroll>
          <FadeInOnScroll delay={9} waitForLoad={true}>
            <button title="open navigation drawer" className="lg:hidden" onClick={() => setScrollingDisabled(true)}>
              <BsList className="stroke-black stroke-1" size={50} />
            </button>
          </FadeInOnScroll>
          <ul className="hidden lg:flex gap-12 items-center">
            {props.children}
          </ul>
        </div>
      </nav>
      {/* mobile drawer */}
      <div className={`top-0 lg:hidden fixed z-50 w-screen h-screen ${scrollingDisabled ? "backdrop-blur-sm pointer-events-auto" : "backdrop-blur-none pointer-events-none"} transition-[--tw-backdrop-blur] duration-500`}>
        <button title="Close navigation drawer" className="fixed h-screen w-screen"
          onClick={() => setScrollingDisabled(false)}>
        </button>
        <ul className={`fixed right-0 top-0 w-[304px] max-w-[75%] ${scrollingDisabled ? "translate-x-0" : "translate-x-full"} h-full 
                          flex flex-col justify-center items-center text-center bg-white gap-12 transition-transform duration-500`}>
          <li>
            <button title="Close navigation drawer" className="fixed top-0 right-0 mr-10 mt-2" onClick={() => setScrollingDisabled(false)}>
              <BsX className="stroke-black stroke-1" size={60} />
            </button>
          </li>
          {props.children}
          {pathname !== "/" && <li className="w-full"><HomeButtonAfterDivider /></li>}
        </ul>
      </div>
    </>
  );
};