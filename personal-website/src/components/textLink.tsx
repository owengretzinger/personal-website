import Link from "next/link";

const classNames = [
  "group/link text-orange ease-in-out text-left relative z-20",
  "w-fit bg-left-bottom bg-gradient-to-r from-orange to-orange bg-no-repeat bg-[length:100%_2px] lg:bg-[length:0%_2px] lg:group-hover/link:bg-[length:100%_2px] transition-[background-size] duration-300 ease-out",
]

export default function TextLink(text: string, link: string, newWindow: boolean = true, breakWords: boolean = true) {
  return (
    <a className={`${classNames[0]} ${breakWords ? "break-words" : "whitespace-nowrap"}`}
      href={link} target={newWindow ? "_blank" : "_self"}>
      <span className={classNames[1]}>
        {text}
      </span>
    </a>
  )
}

export function ButtonLink(text: string, func: () => void, breakWords: boolean = true) {
  return (
    <button className={`${classNames[0]} ${breakWords ? "break-words" : "whitespace-nowrap"}`}
      onClick={func}>
      <span className={classNames[1]}>
        {text}
      </span>
    </button>
  )
}

export function TextLinkPassProps({children, ...props} : any) {
  // props.href = props.href.startsWith("/#") ? props.href + "?loadinganimation=false" : props.href;
  return (
    <>
    <a className={`${classNames[0]}`} {...props}>
    <span className={classNames[1]}>
      {children}
    </span>
    </a>
    
    </>
  )
}