export default function TextLink(text: string, link: string, newWindow: boolean = true) {
    return (
        <a href={link} target={newWindow ? "_blank" : "_self"}
            className="whitespace-nowrap relative z-20 text-orange text-decoration: none; hover:text-orange 
        before:content-['']
        before:absolute
        before:block
        before:w-full
        before:h-[2px]
        before:bottom-0
        before:left-0
        before:bg-orange
        before:scale-x-0
        before:origin-top-left
        before:transition 
        before:duration-300 
        before:ease-in-out 
        before:hover:scale-x-100">
            {text}
        </a>
    )
}