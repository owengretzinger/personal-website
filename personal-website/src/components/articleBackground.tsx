'use client';

import { LoadingAnimationPlayingContext } from "@/app/loading-animation-provider";
import { useContext } from "react";
import animations from './loadingAnimation.module.css';


export default function ArticleBackground({ ...props }: any) {
    const [loadingAnimationPlaying,] = useContext(LoadingAnimationPlayingContext);

    return (
        <div className={`bg-white ${loadingAnimationPlaying === false ? `${animations.changeColOnStart} ${animations.toWave}` : ""}`}>
            {props.children}
        </div>
    )
}