'use client';

import { useSearchParams } from "next/navigation";
import handleClickScroll from "../lib/clickScroll";
import { useContext, useEffect } from "react";
import { LoadingAnimationPlayingContext } from "@/app/loading-animation-provider";


export default function HandleSectionSearchParam() {
    const searchParams = useSearchParams();

    const [loadingAnimationPlaying,] = useContext(LoadingAnimationPlayingContext);

    useEffect(() => {
        if (loadingAnimationPlaying === false && searchParams.has('section')) {
            handleClickScroll(searchParams.get('section')!);
        }
    }), [loadingAnimationPlaying];

    return (<></>)
}