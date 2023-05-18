export default function Logo() {
    return (
        <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="31" strokeWidth="7" className='stroke-orange' />
            <circle cx="35" cy="35" r="28" strokeWidth="7" className='stroke-black' />
            <circle cx="35" cy="35" r="12.9231" strokeWidth="7" className='stroke-black' />
        </svg>
    )
}

export function FixedLogo() {
    return (
        <div className="fixed top-4 left-10">
            <a className="z-[100]" href="/">
                <Logo />
            </a>
        </div>
    )
}