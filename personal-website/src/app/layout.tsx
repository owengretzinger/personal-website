import { Metadata } from 'next';
import { Noto_Sans_Georgian } from 'next/font/google';

import PaletteProvider from './palette-provider';
import MobileNavOpenProvider from './scrolling-disabled-provider';

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
            <body className={`text-black bg-white ${inter.variable} font-noto font-extrabold selection:bg-orange/20 relative`}>
                <PaletteProvider>
                    <MobileNavOpenProvider>
                        <div id="home"></div>
                        <div>
                            {children}
                        </div>
                    </MobileNavOpenProvider>
                </PaletteProvider>
            </body>
        </html>
    );
}