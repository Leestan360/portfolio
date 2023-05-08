import React from 'react'
import { BigProjectType } from '../../types'
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import {VscArrowRight} from "react-icons/vsc";
import Skills from "../experience/stack";

type Props = {
    key: number
    project: BigProjectType
}

const BigProjectCard = ({key, project}: Props) => {
  const { theme } = React.useContext(ThemeContext);
  // rounded-lg hover:shadow-md hover:shadow-white shadow-white shadow-sm border border-gray-100

  return (
    <div key={key} className={theme === "dark" ? "w-[32%] px-2 py-5" : "w-[32%] px-2 py-5"}>
      <Link to="#">
      <div className="cursor-pointer my-3 flex gap-x-5">
        <p className="text-lg my-auto text-[#1DA1F2] font-normal">{project.projectname}</p>
          <div className={theme === "dark" ? "text-xl text-[#1DA1F2]"  : "text-xl text-gray-500"}>
            <VscArrowRight/>
          </div>
      </div>
      </Link>
        <p className={theme === "dark" ? "text-center my-3 font-light text-white" : "text-center my-4 font-light text-gray-500"}>{project.description}</p>
        <div className="flex justify-start">
          <Skills skills={project.stack}/>
              

        {/* <Link
            to=""
            className={theme === "dark" ? "border-2 border-[#1DA1F2] text-base font-normal text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] " : "border-2 border-[#1DA1F2] text-base font-normal bg-white text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "}
        >
            Visit Website
        </Link> */}
        </div>
    </div>
  )
}

export default BigProjectCard