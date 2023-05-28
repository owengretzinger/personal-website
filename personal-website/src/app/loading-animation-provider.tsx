'use client';

import { SetStateAction, createContext, useEffect, useState } from 'react';

export const LoadingAnimationPlayingContext = createContext([true, () => { }] as [boolean, (value: SetStateAction<boolean>) => void]);

export default function LoadingAnimationProvider({ children }: any) {
    const [loadingAnimationPlaying, setLoadingAnimationPlaying] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoadingAnimationPlaying(false);
        }, 4200);
    }, []);

    return <LoadingAnimationPlayingContext.Provider value={[loadingAnimationPlaying, setLoadingAnimationPlaying]}>{children}</LoadingAnimationPlayingContext.Provider>;
}