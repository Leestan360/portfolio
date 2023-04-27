import React from 'react'
import { SchoolType } from '../../types';
import Bullet from '../Bullets';


type Props = {
    key: number;
    school: SchoolType
}

const EducationCard = ({key, school}: Props) => {
  // const sty = "rounded-xl bg-white p-4 ring ring-blue-50 sm:p-6 lg:p-8"
  return (
    <div 
    key={key} 
    id="parent" 
    className="relative block overflow-hidden bg-white border border-gray-100 hover:shadow-xl rounded-lg shadow-lg  cursor-pointer  p-4 sm:p-6 lg:p-8">
  <span 
  id="child"
  className="absolute inset-x-0 bottom-0 h-2"></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-[#1DA1F2] sm:text-xl">
        {school.schoolName}
      </h3>

      <p className="mt-1 text-lg font-semibold text-gray-500">{school.subHeader}</p>
      <p className="mt-1 text-base font-normal text-gray-500">{school.duration}</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt={`${school.schoolName}`}
        src="https://source.unsplash.com/mjRwhvqEC0U/600x600"
        className="border border-solid border-[#1DA1F2] h-24 w-24 rounded-full object-cover shadow-sm"
      />
    </div>
  </div>

    <p className="mt-1 text-base font-thin text-gray-500 max-w-[70ch]"
    >{school.desc}</p>

  <div className="mt-1">
    <p className="max-w-fit text-base font-thin text-gray-500">
      <Bullet descBullets={school.descBullets}/>
    </p>
  </div>
</div>
  )
}

export default EducationCard