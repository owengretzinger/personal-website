'use client';

import { LoadingAnimationPlayingContext } from "@/app/loading-animation-provider";
import { useContext } from "react";
import animations from './loadingAnimation.module.css';



export default function RevealPage() {
    const [loadingAnimationPlaying,] = useContext(LoadingAnimationPlayingContext);

    return (
        <div className={`fixed z-[198] w-screen max-w-full h-screen pointer-events-none bg-white ${loadingAnimationPlaying === false ? animations.revealPage : ""}`}></div>
    )
}