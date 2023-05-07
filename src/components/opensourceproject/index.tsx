import React from 'react'
import { OpenSourceProjectType } from '../../types'
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-router-dom";
import {VscArrowRight} from "react-icons/vsc";
import Element from './gitinfo';


type Props = {
    key: number
    project: OpenSourceProjectType
}

const OpenSourceProjectCard = ({key, project}: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div key={key} className={theme === "dark" ? "pt-5 px-7 w-[23%] mt-2" : "pt-5 px-7 w-[23%] mt-2"}>
        <Link to="#">
        <div className="cursor-pointer my-3 flex gap-x-5">
          <p className="text-lg my-auto text-[#1DA1F2] font-normal">{project.nodename}</p>
            <div className={theme === "dark" ? "text-xl text-[#1DA1F2]"  : "text-xl text-[#1DA1F2]"}>
              <VscArrowRight/>
            </div>
        </div>
      </Link>
          <p className={theme === "dark" ? "pb-5 pt-2 text-base font-light text-white" : "pb-5 pt-2 text-base font-light text-gray-500"}>
            {project.description}
          </p>
          <div className={theme === "dark" ? "flex justify-between text-white text-base font-thin pb-6" : "flex justify-between text-gray-500 text-base font-thin pb-6"}>
            <div className="flex gap-2">
              <Element element={project.primarylanguage}/>
              <Element element={project.forkcount}/>
              <Element element={project.stargazers}/>
            </div>
            <Element element={project.diskusage}/>
          </div>
        </div>
  )
}

export default OpenSourceProjectCard