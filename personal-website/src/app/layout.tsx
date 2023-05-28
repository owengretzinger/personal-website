import { Metadata } from 'next';
import { Noto_Sans_Georgian } from 'next/font/google';

import '@/styles/globals.css';

import ScrollingDisabledProvider from './scrolling-disabled-provider';
import HandleSectionSearchParam from '@/components/handleSectionSearchParam';


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
                <ScrollingDisabledProvider>
                    <div id="home"></div>
                    <HandleSectionSearchParam />
                    <div>
                        {children}
                    </div>
                </ScrollingDisabledProvider>
            </body>
        </html>
    );
}