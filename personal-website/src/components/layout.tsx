import Head from 'next/head'
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import handleClickScroll from '../../lib/clickScroll';
import animations from './loadingAnimation.module.css';
import { loadingAnimationPlayingContext } from '@/pages/_app';




export default function Layout({ bgClass = `bg-white ${animations.changeColOnStart} ${animations.toBg}`, ...props }) {
  const router = useRouter();
  const linkedSection = router.query.section ? router.query.section as string : null;
  setTimeout(() => {
    linkedSection ? handleClickScroll(linkedSection) : {};
  }, 4000);

  const [showingLoadingAnimation, setShowingLoadingAnimation] = useContext(loadingAnimationPlayingContext);
  useEffect(() => {
    setShowingLoadingAnimation(true);
    setTimeout(() => {
      setShowingLoadingAnimation(false);
    }, 3800);
  }, []);


  return (
    <>
      <div className="text-black font-noto selection:bg-orange/20 relative">
        <Head>
          <title>owengretzinger.com</title>
          <meta name="description" content="Owen Gretzinger's Personal Website" />
          <link rel="icon" href="/personal-website-icon-blue.ico" />
        </Head>
        {
          <div className={`fixed w-screen max-w-full h-screen z-50 flex justify-center items-center ${showingLoadingAnimation ? "pointer-events-auto" : "pointer-events-none"}`}>
            <svg className="fixed w-full h-full">
              <rect className={`w-full h-full ${animations.revealPage}`} fill="white" />
            </svg>
            <div className="w-[1000vw] h-[1000vh] flex justify-center items-center">
              <svg width="300" height="300" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${animations.scaleOut} z-[199]`}>
                <circle cx="35" cy="35" r="31" strokeWidth="7" stroke="rgb(239,89,34)" className={`${showingLoadingAnimation ? "block" : "hidden"} ${animations.animateCircle}`} />
                {/* <circle cx="35" cy="35" r="28" strokeWidth="7" stroke="rgb(14,45,49)" className={`${animations.bulge} ${animations.second}`} /> */}
                {/* <circle cx="35" cy="35" r="13" strokeWidth="7" stroke="rgb(14,45,49)" /> */}

                <line x1="35" y1="35" x2="35" y2="35" strokeWidth="63" stroke="rgb(14,45,49)" strokeLinecap='round' className={`${showingLoadingAnimation ? "block" : "hidden"} ${animations.bulge} ${animations.second} ${animations.sw63}`} />
                <line x1="35" y1="35" x2="35" y2="35" strokeWidth="49" stroke="white" strokeLinecap='round' className={`${showingLoadingAnimation ? "block" : "hidden"} ${animations.bulge} ${animations.second} ${animations.sw49}`} />

                <line x1="35" y1="35" x2="35" y2="35" strokeWidth="33" stroke="rgb(14,45,49)" strokeLinecap='round' className={`${showingLoadingAnimation ? "block" : "hidden"} ${animations.bulge} ${animations.first} ${animations.sw33}`} />
                <line x1="35" y1="35" x2="35" y2="35" strokeWidth="19" stroke="white" strokeLinecap='round' className={`${showingLoadingAnimation ? "block" : "hidden"} ${animations.bulge} ${animations.first} ${animations.sw19}`} />


              </svg>
            </div>
          </div>}
        {<>
          <div id="home"></div>
          <div className={`w-full h-full ${bgClass} fixed -z-20`}></div>
          <div>
            {props.children}
          </div>
        </>}
      </div>
    </>


  );
}