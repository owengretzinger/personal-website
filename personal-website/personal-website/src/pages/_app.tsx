import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SetStateAction, createContext, useEffect, useState  } from 'react';

export const MobileNavIsOpenContext = createContext([false, (value: SetStateAction<boolean>) => { }] as [boolean, (value: SetStateAction<boolean>) => void]);

export default function App({ Component, pageProps }: AppProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "visible";
  }, [mobileNavOpen]);

  return (
    <MobileNavIsOpenContext.Provider value={[mobileNavOpen, setMobileNavOpen]}>
      <Component {...pageProps} />
    </MobileNavIsOpenContext.Provider>
  )
}
