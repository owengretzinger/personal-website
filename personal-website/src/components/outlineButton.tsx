'use client';

import Link from "next/link";

export default function OutlineButton({...props}:any) {
    return (
      <Link href={props.href} target="_blank"
        className='border-2 border-orange px-4 py-2 rounded-lg text-orange hover:bg-orange/10 transition'>
        {props.text}
      </Link>
    )
  }