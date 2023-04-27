import React from 'react'

type Props = {
    key: number;
    skill: string;
    style: any;
}

const SkillEntry = ({key, skill, style}: Props) => {
  return (
    <div key={key} className="cursor-pointer my-3 flex gap-x-3">
        <i className={`${style} text-xl`}></i>
        <p className="text-[0.8rem] my-auto">{skill}</p>
    </div>
  )
}

export default SkillEntry