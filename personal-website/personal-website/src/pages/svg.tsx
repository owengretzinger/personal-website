



export default function Svg() {
    return (
        <>
            <svg className="w-screen max-w-full h-screen relative">
                
                <defs>
                    <mask id="hole">
                        <rect width="100%" height="100%" fill="white" />
                        <circle cx="50%" cy="50%" r="50" fill="black" />
                    </mask>
                </defs>
                

                <rect className="w-full h-full" fill="white" mask="url(#hole)" />

            </svg>
        </>
    )
}