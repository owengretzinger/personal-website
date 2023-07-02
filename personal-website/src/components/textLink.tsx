'use client';
import { ScrollingDisabledContext } from "@/app/scrolling-disabled-provider";
import { useContext } from "react";
import handleClickScroll from "../lib/clickScroll";
import Link from "next/link";
import { FaGithub, FaHome, FaLink, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { IconType } from "react-icons";

const linkClassNames = [
  "group/link text-orange ease-in-out text-left relative z-20 font-bold",
  "w-fit bg-left-bottom bg-gradient-to-r from-orange to-orange bg-no-repeat bg-[length:100%_2px] lg:bg-[length:0%_2px] lg:group-hover/link:bg-[length:100%_2px] transition-[background-size] duration-300 ease-out",
]


export default function TextLink({...props} : any) {
  return (
    <Link className={`${linkClassNames[0]} ${props.breakWords ? "break-words" : "whitespace-nowrap"}`}
          href={props.href} target={props.newWindow === false ? "_self" : "_blank"}>
      <span className={linkClassNames[1]}>
        {props.text}
      </span>
    </Link>
  )
}

export function ButtonLinkScrollOnClick({ ...props }: any) {
  const [, setScrollingDisabled] = useContext(ScrollingDisabledContext);

  return (
    <button className={`${linkClassNames[0]} ${props.breakWords ? "break-words" : "whitespace-nowrap"}`}
      onClick={() => {handleClickScroll(props.scrollTo); props.closeMobileNav ? setScrollingDisabled(false) : {}}}>
      <span className={linkClassNames[1]}>
        {props.text}
      </span>
    </button>
  )
}

export function TextLinkPassProps({ ...props }: any) {
  return (
    <Link className={`${linkClassNames[0]}`} {...props}>
      <span className={linkClassNames[1]}>
        {props.children}
      </span>
    </Link>
  )
}

// cant pass function from server to client so map string to icon
const stringToIcon : { [key: string]: IconType } = {
  "website": TbWorld,
  "email": FiMail,
  "linkedin": FaLinkedinIn,
  "github": FaGithub,
  "phone": FaPhoneAlt,
  "link": FaLink,
  "home": FaHome,
}

export function ResumeLink({ ...props }: any) {
  const Icon = props.icon && stringToIcon[props.icon];

  return (
    <Link className={`${linkClassNames[0]} print:underline flex items-center gap-1 w-fit print:-z-10`} href={props.href} target="_blank">
      {props.icon && <Icon className="w-4 h-4" />}
      <span className={`${linkClassNames[1]} print:bg-none ${props.icon === "link" ? "text-base font-extrabold" : "text-xs"}`}>
        {props.text}
      </span>
    </Link>
  )
}


export function TextLinkWithIcon({ ...props }: any) {
  const [, setScrollingDisabled] = useContext(ScrollingDisabledContext);
  const Icon = props.icon && stringToIcon[props.icon];

  return (
    <Link className={`${linkClassNames[0]} flex items-center gap-1 w-fit`} href={props.href} target={props.target || "_blank"}
          onClick={() => props.href.startsWith("/") ? setScrollingDisabled(false) : {}}>
      {props.icon && <Icon className="w-4 h-4" />}
      <span className={`${linkClassNames[1]}`}>
        {props.text}
      </span>
    </Link>
  )
}