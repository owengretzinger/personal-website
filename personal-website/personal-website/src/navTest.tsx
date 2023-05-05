import React, { useState, useEffect } from 'react';


function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("up");
  
    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
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

function NavTest() {

    const scrollDirection = useScrollDirection();

    return (
        <div className={`sticky ${ scrollDirection === "down" ? "-top-20" : "top-0"} w-full h-20 bg-white flex justify-center items-center`}>
            <h1>owengretz</h1>
        </div>
    );
};

export { NavTest }