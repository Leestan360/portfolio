import React from 'react';
import { returnIcon } from './iconpack';
import { IconType } from 'react-icons';


type Props = {
    skills: Array<string>;
}

type IconProps = {
  index: number;
  Icon?: IconType
}

const StackIcon = ({ Icon }: IconProps): JSX.Element | any => {
  return Icon ? (
    <span className="text-base text-[#1DA1F2] m-1 py-1 px-3">
      <Icon/>
    </span>
    
  ) : null
}


const Skill = ({skills}: Props) : JSX.Element | any => {
  return skills ? skills.map((item, index) => (
    <StackIcon key={index} index={index} Icon={returnIcon(item)}/>
    // <span key={index} className="border text-sm font-thin m-1 py-1 px-3 rounded-md border-[#1DA1F2] text-[#1DA1F2]">{item}</span>
  )): null
}

export default Skill

