'use client';

import { LoadingAnimationPlayingContext } from "@/app/loading-animation-provider";
import { useContext } from "react";
import animations from './loadingAnimation.module.css';



export default function LoadingAnimation() {
    const [loadingAnimationPlaying,] = useContext(LoadingAnimationPlayingContext);

    return (
        <>
            {loadingAnimationPlaying === true &&
                <div className="fixed z-[199] w-screen max-w-full h-screen flex justify-center items-center bg-white">
                    <svg width="300" height="300" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${animations.scaleOut} z-[199]`}>
                        <circle cx="35" cy="35" r="31" strokeWidth="7" stroke="rgb(239,89,34)" className={`${animations.animateCircle}`} />

                        <line x1="35" y1="35" x2="35" y2="35" strokeWidth="63" stroke="rgb(14,45,49)" strokeLinecap='round' className={`${animations.bulge} ${animations.second} ${animations.sw63}`} />
                        <line x1="35" y1="35" x2="35" y2="35" strokeWidth="49" stroke="white" strokeLinecap='round' className={`${animations.bulge} ${animations.second} ${animations.sw49}`} />

                        <line x1="35" y1="35" x2="35" y2="35" strokeWidth="33" stroke="rgb(14,45,49)" strokeLinecap='round' className={`${animations.bulge} ${animations.first} ${animations.sw33}`} />
                        <line x1="35" y1="35" x2="35" y2="35" strokeWidth="19" stroke="white" strokeLinecap='round' className={`${animations.bulge} ${animations.first} ${animations.sw19}`} />
                    </svg>
                </div>}
        </>
    )
}