import React from 'react'
import { SchoolType } from '../../types';
import Bullet from '../Bullets';


type Props = {
    key: number;
    school: SchoolType
}

const EducationCard = ({key, school}: Props) => {
  return (
    <div 
    key={key} 
    id="parent" 
    className="relative block overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
  <span 
  id="child"
  className="absolute inset-x-0 bottom-0 h-2"></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {school.schoolName}
      </h3>

      <p className="mt-1 text-lg font-medium text-gray-700">{school.subHeader}</p>
      <p className="mt-1 text-base font-medium text-gray-700">{school.duration}</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt={`${school.schoolName}`}
        src="https://source.unsplash.com/mjRwhvqEC0U/600x600"
        className="border border-solid border-blue-700 h-24 w-24 rounded-full object-cover shadow-sm"
      />
    </div>
  </div>

    <p className="mt-1 text-base font-normal text-gray-500 max-w-[70ch]"
    >{school.desc}</p>

  <div className="mt-1">
    <p className="max-w-fit text-sm/[12px] font-normal text-gray-500">
      <Bullet descBullets={school.descBullets}/>
    </p>
  </div>
</div>
  )
}

export default EducationCard