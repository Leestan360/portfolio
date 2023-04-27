import React from 'react'
import { BigProjectType } from '../../types'
import { Link } from "react-router-dom";

type Props = {
    key: number
    project: BigProjectType
}

const BigProjectCard = ({key, project}: Props) => {
  return (
    <div key={key} className="w-[32%] border border-gray-100 px-5 py-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer bg-white">
        <p className="text-center py-2 text-[2rem] font-[800] text-[#1DA1F2] font-normal">{project.projectname}</p>
        <p className="text-center text-[1.5rem] font-[400] text-[#1DA1F2] ">{project.projectname}</p>
        <p className="text-center my-4 text-gray-500">{project.description}</p>
        <div className="flex justify-center">
        <Link
            to=""
            className="border-2 border-[#1DA1F2] text-base font-normal bg-white text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "
        >
            Visit Website
        </Link>
        </div>
    </div>
  )
}

export default BigProjectCard