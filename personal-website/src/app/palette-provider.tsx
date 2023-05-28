'use client';
 
import { SetStateAction, createContext, useEffect, useState } from 'react';
import { colourPalettes, paletteType } from '../../lib/colourPalettes';
 
export const PaletteContext = createContext([0, () => { }] as [number, (value: SetStateAction<number>) => void]);
 
export default function PaletteProvider({ children } : any) {
    const localPalette = typeof window !== 'undefined' ? window.localStorage.getItem('palette') : null;
    const [paletteIndex, setPalette] = useState(localPalette ? JSON.parse(localPalette) : 0);
    const applyPalette = (paletteIndex: number) => {
        if (typeof window !== 'undefined') {
            const palette = colourPalettes[paletteIndex] as paletteType;
            document.documentElement.style.setProperty('--color-bg', palette.bg);
            document.documentElement.style.setProperty('--color-wave', palette.wave);
            document.documentElement.style.setProperty('--color-text', palette.text);
            document.documentElement.style.setProperty('--color-text-light', palette.textLight);
            document.documentElement.style.setProperty('--color-link', palette.link);
        }
    }
    useEffect(() => {
        window.localStorage.setItem('palette', JSON.stringify(paletteIndex));
        applyPalette(paletteIndex);
    }, [paletteIndex]);

  return <PaletteContext.Provider value={[paletteIndex, setPalette]}>{children}</PaletteContext.Provider>;
}