'use client';

import { LoadingAnimationPlayingContext } from '@/app/loading-animation-provider';
import React, {useState, useRef, useEffect, useContext} from 'react';

export default function FadeInOnScroll({delay=2, noDelayOnMobile: noAnimationOnMobile=false, waitForLoad=false, className="", ...props} : {delay?: number|string, noDelayOnMobile?:boolean, waitForLoad?:boolean, className?:string, children: React.ReactNode}) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);



  const [loadingAnimationPlaying, setLoadingAnimationPlaying] = useContext(LoadingAnimationPlayingContext);
  

  // useEffect(() => {
  //   console.log(loadingAnimationPlaying);
  // }, [loadingAnimationPlaying]);

  useEffect(() => {
    if (!domRef.current) return;

    const domRefCurrent = domRef.current!;

    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:     
      if (entries[0].isIntersecting) {
      
        // Not possible to set it back to false like this:
        setVisible(true);
        
        // No need to keep observing:
        observer.unobserve(domRefCurrent);
      }
    });
    
    observer.observe(domRefCurrent);
    
    return () => observer.disconnect();
  }, [loadingAnimationPlaying]);

  const delayClass = "delay-" + (delay !== "calculate" ? (typeof delay == "number" && waitForLoad ? delay+5 : delay) : (domRef.current ? Math.round(domRef.current.getBoundingClientRect().left / screen.width * 5) : ''));

  return (
    // <div ref={ domRef } className={`${noAnimationOnMobile ? "lg:fade-in" : "fade-in"} ${waitForLoad?"":""} ${delayClass} ${ isVisible ? 'is-visible' : '' } ${className}`}>
    //   { props.children }
    // </div>
    <div ref={ domRef } className={`${noAnimationOnMobile ? "lg:fade-in" : "fade-in"} ${delayClass} ${ isVisible && !loadingAnimationPlaying ? 'is-visible' : '' } ${className}`}>
      { props.children }
    </div>
  )
}