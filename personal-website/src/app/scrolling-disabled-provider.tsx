'use client';

import { SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { LoadingAnimationPlayingContext } from './loading-animation-provider';

export const ScrollingDisabledContext = createContext([false, () => { }] as [boolean, (value: SetStateAction<boolean>) => void]);

export default function ScrollingDisabledProvider({ children }: any) {
    const [scrollingDisabled, setScrollingDisabled] = useState(false);

    // const [scrollingDisabled, setScrollingDisabled] = useContext(ScrollingDisabledContext);
    const [loadingAnimationPlaying,] = useContext(LoadingAnimationPlayingContext);
    useEffect(() => {
        !scrollingDisabled && loadingAnimationPlaying === false ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden";
    }, [scrollingDisabled, loadingAnimationPlaying]);

    return <ScrollingDisabledContext.Provider value={[scrollingDisabled, setScrollingDisabled]}>{children}</ScrollingDisabledContext.Provider>;
}