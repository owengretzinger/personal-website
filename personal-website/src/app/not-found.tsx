'use client';

import TextLink from '../components/textLink'
import { FixedLogo } from '@/components/logoSVG';

export default function NotFound() {
    return (
        <div className="bg-white">
            <div className="flex flex-col items-center justify-center w-screen h-screen space-y-10 text-center p-2">
                <h1 className="text-4xl">Page Not Found</h1>
                <p>If this page is supposed to exist please {<TextLink text="let me know" href="/?section=contact" newWindow={false} />}!</p>
                <TextLink text="Home" href="/" newWindow={false} />
            </div>
            <FixedLogo />
        </div>
    )
}