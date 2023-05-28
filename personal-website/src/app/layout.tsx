import { Metadata } from 'next';
import { Noto_Sans_Georgian } from 'next/font/google';

import '@/styles/globals.css';

import ScrollingDisabledProvider from './scrolling-disabled-provider';
import HandleSectionSearchParam from '@/components/handleSectionSearchParam';
import { Suspense } from 'react';
import LoadingAnimationProvider from './loading-animation-provider';
import LoadingAnimation from '@/components/loadingAnimation';
import RevealPage from '@/components/revealPage';


export const metadata: Metadata = {
    title: 'Owen Gretzinger',
    description: "Owen Gretzinger's Personal Website",

};

const inter = Noto_Sans_Georgian({
    subsets: ['latin'],
    variable: '--font-inter'
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {




    return (
        <html lang="en">
            <body className={`text-black bg-white ${inter.variable} font-noto font-extrabold selection:bg-orange/20 relative overflow-hidden`}>
                <LoadingAnimationProvider><ScrollingDisabledProvider>
                    <div id="home"></div>
                    <Suspense fallback={<></>}><HandleSectionSearchParam /></Suspense>
                    <LoadingAnimation />
                    <div>
                        {children}
                    </div>
                </ScrollingDisabledProvider></LoadingAnimationProvider>
            </body>
        </html>
    );
}