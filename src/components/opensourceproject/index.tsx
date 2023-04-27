import React from 'react'
import { OpenSourceProjectType } from '../../types'

type Props = {
    key: number
    project: OpenSourceProjectType
}

const OpenSourceProjectCard = ({key, project}: Props) => {
  return (
    <div key={key} className="border border-gray-100 pt-5 px-7 w-[23%] rounded-lg shadow-lg  cursor-pointer mt-2 hover:shadow-xl bg-white">
          <p className="text-lg font-bold text-[#1DA1F2]">{project.nodename}</p>
          <p className="pb-5 pt-2 text-base font-light text-gray-500">
            {project.description}
          </p>
          <div className="flex justify-between text-gray-500 text-base font-thin pb-6">
            <div className="flex gap-2">
              <span>{project.primarylanguage}</span>
              <span>{project.forkcount}</span>
              <span>{project.stargazers}</span>
            </div>
            <span>{project.diskusage}</span>
          </div>
        </div>
  )
}

export default OpenSourceProjectCard