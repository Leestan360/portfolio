import React from 'react'
import {openSourceProjectsInfo } from '../../portfolio'
import OpenSourceProjectCard from '../../components/opensourceproject'


const OpenSourceProject = () => {
    const openSourceProjectSectionStyle = "flex flex-col my-24"
    const openSourceProjectHeaderStyle = "text-2xl font-light text-[#1DA1F2]"
    const openSourceProjectCardContainerStyle = "flex flex-wrap justify-between pt-5 gap-7"
  return (
    <section className={openSourceProjectSectionStyle} id="open-source">
        <div className="w-auto">
          <h1 className={openSourceProjectHeaderStyle}>OTHER PROJECTS</h1>
        </div>
        <div className={openSourceProjectCardContainerStyle}>
          {openSourceProjectsInfo.projects.map((project, index) => (
            <OpenSourceProjectCard key={index} project={project}/>
          ))}
        </div>
    </section>
  )
}

export default OpenSourceProject