'use client';

import { SetStateAction, createContext, useEffect, useState } from 'react';

export const ScrollingDisabledContext = createContext([false, () => { }] as [boolean, (value: SetStateAction<boolean>) => void]);

export default function MobileNavOpenProvider({ children }: any) {
    const [scrollingDisabled, setScrollingDisabled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = scrollingDisabled ? "hidden" : "visible";
    }, [scrollingDisabled]);

    return <ScrollingDisabledContext.Provider value={[scrollingDisabled, setScrollingDisabled]}>{children}</ScrollingDisabledContext.Provider>;
}