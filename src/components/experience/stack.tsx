import React from 'react'

type Props = {
    skills: Array<string>;
}


const Skill = ({skills}: Props) : JSX.Element | any => {
  return skills ? skills.map((item, index) => (
    <span key={index} className="outline m-1 p-0.5 rounded-md outline-[#1DA1F2] text-[#1DA1F2]">{item}</span>
  )): null
}

export default Skill