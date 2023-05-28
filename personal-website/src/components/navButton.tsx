'use client';

import handleClickScroll from "../../lib/clickScroll";

import React, { useContext } from 'react';
import { ScrollingDisabledContext } from '@/app/scrolling-disabled-provider';

export default function NavButton({ ...props }: any) {
    const [scrollingDisabled, setScrollingDisabled] = useContext(ScrollingDisabledContext);

    return (
        <button onClick={() => { handleClickScroll(props.text.toLowerCase()); setScrollingDisabled(false); }} className="group flex">
            <p className="text-orange">{props.number}.&nbsp;</p>
            <p className="group-hover:text-orange transition">{props.text}</p>
        </button>
    )
}