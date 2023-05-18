import { colourPalettes, paletteType } from '../../lib/colourPalettes';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SetStateAction, createContext, useEffect, useState } from 'react';

export const MobileNavIsOpenContext = createContext([false, () => { }] as [boolean, (value: SetStateAction<boolean>) => void]);
export const PaletteContext = createContext([0, () => { }] as [number, (value: SetStateAction<number>) => void]);

export default function App({ Component, pageProps }: AppProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "visible";
  }, [mobileNavOpen]);

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

  return (
    <MobileNavIsOpenContext.Provider value={[mobileNavOpen, setMobileNavOpen]}>
      <PaletteContext.Provider value={[paletteIndex, setPalette]}>
        <Component {...pageProps} />
      </PaletteContext.Provider>
    </MobileNavIsOpenContext.Provider>
  )
}