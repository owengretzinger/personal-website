'use client';

import handleClickScroll from "../../lib/clickScroll";

export default function NavButton({ ...props }: any) {
    return (
        <button onClick={() => { handleClickScroll(props.text.toLowerCase()); /*setScrollingDisabled(false);*/ }} className="group flex">
            <p className="text-orange">{props.number}.&nbsp;</p>
            <p className="group-hover:text-orange transition">{props.text}</p>
        </button>
    )
}