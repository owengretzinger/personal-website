'use client';

import { IconType } from 'react-icons'
import { BsInstagram } from 'react-icons/bs'
import { FiMail, FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link';

const SocialButton = (icon: IconType, link: string) => {
    return (
        <li key={link} className="w-14 h-14 rounded-full border-[3px] border-orange hover:bg-orange/10 transition grid content-center">
            <Link title={link} href={link} target="_blank" className="grid content-center">
                {icon({ className: "text-orange w-5/6 h-5/6 mx-auto my-auto" })}
            </Link>
        </li>
    )
}

export default function SocialButtons() {
    return (
        <ul className="w-screen max-w-[368px] flex justify-between mx-auto">
            {SocialButton(FiMail, "mailto:owengretzinger@gmail.com")}
            {SocialButton(FaLinkedinIn, "https://www.linkedin.com/in/owengretzinger")}
            {SocialButton(BsInstagram, "https://www.instagram.com/prowengramming")}
            {SocialButton(FiGithub, "https://github.com/owengretzinger")}
        </ul>
    )
}