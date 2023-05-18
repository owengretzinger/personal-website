import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import handleClickScroll from '../../lib/clickScroll';
import animations from './loadingAnimation.module.css';


const disableLoadingAnimationForTesting = false;

export default function Layout({ bgClass = `bg-white ${animations.changeColOnStart} ${animations.toBg}`, ...props }) {
  const router = useRouter();
  const linkedSection = router.query.section ? router.query.section as string : null;
  
  const [isVisible, setIsVisible] = useState(disableLoadingAnimationForTesting);
  useEffect(() => {
    setTimeout(() => {setIsVisible(true);}, 3800);
  }, []);

  useEffect(() => {
    if (linkedSection) handleClickScroll(linkedSection);
  }, [isVisible]);

  return (
    <>
      <div className="text-black font-noto selection:bg-orange/20 relative">
        <Head>
          <title>owengretzinger.com</title>
          <meta name="description" content="Owen Gretzinger's Personal Website" />
          <link rel="icon" href="/personal-website-icon-blue.ico" />
        </Head>
        {!disableLoadingAnimationForTesting && 
          <div className="fixed w-screen max-w-full h-screen z-[200] flex justify-center items-center pointer-events-none">
            <svg className="fixed w-full h-full">
              <rect className={`w-full h-full ${animations.revealPage}`} fill="rgb(255,255,255)" />
            </svg>
            <div className="w-[1000vw] h-[1000vh] flex justify-center items-center">
              <svg width="300" height="300" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${animations.scaleOut} z-[199]`}>
                <circle cx="35" cy="35" r="31" strokeWidth="7" stroke="rgb(239,89,34)" className={animations.animateCircle} />
                <circle cx="35" cy="35" r="28" strokeWidth="7" stroke="rgb(14,45,49)" className={`${animations.bulge} ${animations.second}`} />
                <circle cx="35" cy="35" r="13" strokeWidth="7" stroke="rgb(14,45,49)" className={`${animations.bulge} ${animations.first}`} />
              </svg>
            </div>
          </div>}
        {isVisible && <>
          <div id="home"></div>
          <div className={`w-full h-full ${bgClass} fixed -z-20`}></div>
          {props.children}
        </>}
      </div>
    </>


  );
}