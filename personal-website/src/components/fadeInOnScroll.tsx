import React, {useState, useRef, useEffect} from 'react';

export default function FadeInOnScroll({delay=2, noDelayOnMobile: noAnimationOnMobile=false, waitForLoad=false, className="", ...props} : {delay?: number|string, noDelayOnMobile?:boolean, waitForLoad?:boolean, className?:string, children: React.ReactNode}) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

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
  }, []);

  const delayClass = "delay-" + (delay !== "calculate" ? delay : (domRef.current ? Math.round(domRef.current.getBoundingClientRect().left / screen.width * 5) : ''));

  return (
    <div ref={ domRef } className={`${noAnimationOnMobile ? "lg:fade-in" : "fade-in"} ${waitForLoad?"wait-for-load":""} ${delayClass} ${ isVisible ? 'is-visible' : '' } ${className}`}>
      { props.children }
    </div>
  )
}