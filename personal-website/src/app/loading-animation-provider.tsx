'use client';

import { SetStateAction, createContext, useEffect, useState } from 'react';

export const LoadingAnimationPlayingContext = createContext([null, () => { }] as [boolean|null, (value: SetStateAction<boolean|null>) => void]);

export default function LoadingAnimationProvider({ children }: any) {
    const [loadingAnimationPlaying, setLoadingAnimationPlaying] = useState<boolean|null>(null);

    const animationDuration = process.env.NODE_ENV === 'development' ? 0 : 2600;

    useEffect(() => {
        setLoadingAnimationPlaying(true);
        setTimeout(() => {
            setLoadingAnimationPlaying(false);
        }, animationDuration);
    }, []);

    return <LoadingAnimationPlayingContext.Provider value={[loadingAnimationPlaying, setLoadingAnimationPlaying]}>{children}</LoadingAnimationPlayingContext.Provider>;
}