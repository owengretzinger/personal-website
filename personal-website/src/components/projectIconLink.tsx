'use client';

import { FaItchIo } from "react-icons/fa";
import { FiAward, FiExternalLink, FiGithub } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";

export function ProjectLinkIcon({...props}:any) {
    const map = { "open": FiExternalLink, "article": RiArticleLine, "github": FiGithub, "award": FiAward, "itch": FaItchIo }
    return map[props.name as keyof typeof map]({ className: "w-6 h-6 text-orange lg:text-black lg:hover:text-orange lg:transition" })
}