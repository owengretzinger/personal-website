'use client';

import { useState } from "react";



export default function ProjectsContainer({ ...props }: any) {
  const [moreShowing, setMoreShowing] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center my-5">
        {props.children.slice(0, 4)}
        {moreShowing && props.children.slice(4)}
      </div>
      {!moreShowing &&
        <button className='block mx-auto mt-12 border-2 border-orange px-4 py-2 rounded-lg text-orange hover:bg-orange/10 transition' onClick={() => setMoreShowing(true)}>
          Show More
        </button>}
    </>
  )
}