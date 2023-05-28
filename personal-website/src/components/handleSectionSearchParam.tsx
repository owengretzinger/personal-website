'use client';

import { useSearchParams } from "next/navigation";
import handleClickScroll from "../../lib/clickScroll";
import { Suspense } from "react";


export default function HandleSectionSearchParam() {
    const searchParams = useSearchParams();
    if (typeof window !== "undefined" && searchParams.has('section')) {
        setTimeout(() => { handleClickScroll(searchParams.get('section')!); }, 1000);
    }
    return (<></>)
}