import React from 'react'

type Props = {
    element: any;
}


const Element = ({element}: Props) : JSX.Element | any => {
  return element ? (
    <span className="text-sm font-thin m-1 py-1 px-3 text-[#1DA1F2]">{element}</span>
  ): null
}

export default Element