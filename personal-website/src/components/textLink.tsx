'use client';
import Link from "next/link";
import handleClickScroll from "../../lib/clickScroll";
import { useContext } from "react";
import { ScrollingDisabledContext } from "@/app/scrolling-disabled-provider";
import { FaGithub, FaLink, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { IconType } from "react-icons";

const classNames = [
  "group/link text-orange ease-in-out text-left relative z-20 font-bold",
  "w-fit bg-left-bottom bg-gradient-to-r from-orange to-orange bg-no-repeat bg-[length:100%_2px] lg:bg-[length:0%_2px] lg:group-hover/link:bg-[length:100%_2px] transition-[background-size] duration-300 ease-out",
]

// text: string, link: string, newWindow: boolean = true, breakWords: boolean = true
export default function TextLink({...props} : any) {
  return (
    <Link className={`${classNames[0]} ${props.breakWords ? "break-words" : "whitespace-nowrap"}`}
          href={props.href} target={props.newWindow === false ? "_self" : "_blank"}>
      <span className={classNames[1]}>
        {props.text}
      </span>
    </Link>
  )
}
//text: string, func: () => void, breakWords: boolean = true
export function ButtonLinkScrollOnClick({ ...props }: any) {
  const [, setScrollingDisabled] = useContext(ScrollingDisabledContext);

  return (
    <button className={`${classNames[0]} ${props.breakWords ? "break-words" : "whitespace-nowrap"}`}
      onClick={() => {handleClickScroll(props.scrollTo); props.closeMobileNav ? setScrollingDisabled(false) : {}}}>
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

export function ResumeLink({ ...props }: any) {

  // cant pass function from server to client so map string to icon
  const stringToIcon : { [key: string]: IconType } = {
    "website": TbWorld,
    "email": FiMail,
    "linkedin": FaLinkedinIn,
    "github": FaGithub,
    "phone": FaPhoneAlt,
    "link": FaLink,
  }
  const Icon = props.icon && stringToIcon[props.icon];

  return (
    <Link className={`${classNames[0]} print:underline flex items-center gap-1 w-fit print:-z-10`} href={props.href} target="_blank">
      {props.icon && <Icon className="w-4 h-4" />}
      <span className={`${classNames[1]} ${props.icon === "link" ? "text-base font-extrabold" : "text-xs"}`}>
        {props.text}
      </span>
    </Link>
  )
}