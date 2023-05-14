import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Layout({ bgClass = "bg-white change-col-on-start to-bg", ...props }) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 3800);
  }, [])

  return (
    <>
      {/* <div className="fixed w-screen max-w-full h-screen z-[200] flex justify-center items-center pointer-events-none">
        <svg className="fixed w-full h-full z-[198]">
          <defs>
            <mask id="hole">
              <rect width="100%" height="100%" fill="white" />
              <circle cx="50%" cy="50%" r="41" fill="black" className="reveal-page" />
            </mask>
          </defs>
          <rect className="w-full h-full" fill="rgb(255,255,255)" mask="url(#hole)" />
        </svg>
        <div className="w-[1000vw] h-[1000vh] flex justify-center items-center">
          <svg width="300" height="300" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-out z-[199]">
            <circle cx="35" cy="35" r="31" strokeWidth="7" stroke="rgb(239,89,34)" className='animate-circle r-31' />
            <circle cx="35" cy="35" r="28" strokeWidth="7" stroke="rgb(14,45,49)" className='bulge second' />
            <circle cx="35" cy="35" r="13" strokeWidth="7" stroke="rgb(14,45,49)" className='bulge first' />
          </svg>
        </div>
      </div> */}
      <div className="text-black font-noto selection:bg-orange/20 relative">
        <Head>
          <title>owengretzinger.com</title>
          <meta name="description" content="Owen Gretzinger's Personal Website" />
          <link rel="icon" href="/personal-website-icon-blue.ico" />
        </Head>
        {isVisible && <>
          <div id="home"></div>
          <div className={`w-full h-full ${bgClass} fixed -z-20`}></div>
          {props.children}
        </>}
      </div>
    </>


  );
}