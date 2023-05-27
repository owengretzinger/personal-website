'use client';
import Link from "next/link";
import handleClickScroll from "../../lib/clickScroll";

const classNames = [
  "group/link text-orange ease-in-out text-left relative z-20 font-bold",
  "w-fit bg-left-bottom bg-gradient-to-r from-orange to-orange bg-no-repeat bg-[length:100%_2px] lg:bg-[length:0%_2px] lg:group-hover/link:bg-[length:100%_2px] transition-[background-size] duration-300 ease-out",
]

// text: string, link: string, newWindow: boolean = true, breakWords: boolean = true
export default function TextLink({...props} : any) {
  return (
    <Link className={`${classNames[0]} ${props.breakWords ? "break-words" : "whitespace-nowrap"}`}
          href={props.href} target={props.newWindow ? "_blank" : "_self"}>
      <span className={classNames[1]}>
        {props.text}
      </span>
    </Link>
  )
}
//text: string, func: () => void, breakWords: boolean = true
export function ButtonLinkScrollOnClick({ ...props }: any) {
  return (
    <button className={`${classNames[0]} ${props.breakWords ? "break-words" : "whitespace-nowrap"}`}
      onClick={() => handleClickScroll(props.scrollTo)}>
      <span className={classNames[1]}>
        {props.text}
      </span>
    </button>
  )
}

export function TextLinkPassProps({ ...props }: any) {
  return (
    <Link className={`${classNames[0]}`} {...props}>
      <span className={classNames[1]}>
        {props.children}
      </span>
    </Link>
  )
}