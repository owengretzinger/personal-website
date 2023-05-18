import Layout from '../components/layout'
import TextLink from '../components/textLink'
import { FixedLogo } from '@/components/logoSVG';

export default function ErrorPage() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center w-screen h-screen space-y-10 text-center p-2">
                <h1 className="text-4xl">Page Not Found</h1>
                <p>If this page is supposed to exist please {TextLink("let me know", "/#contact", false)}!</p>
                {TextLink("Home", "/", false)}
            </div>
            <FixedLogo />
            
        </Layout>
    )
}