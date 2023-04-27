import React from 'react'
import {openSourceProjectsInfo } from '../../portfolio'
import OpenSourceProjectCard from '../../components/opensourceproject'


const OpenSourceProject = () => {
    const openSourceProjectSectionStyle = "flex flex-col my-24"
    const openSourceProjectHeaderStyle = "text-5xl font-[400] text-[#1DA1F2]"
    const openSourceProjectCardContainerStyle = "flex flex-row justify-center pt-5 grid md:grid-cols-4 gap-9"
  return (
    <section className={openSourceProjectSectionStyle} id="open-source">
        <div className="w-auto">
          <h1 className={openSourceProjectHeaderStyle}>Open Source Projects</h1>
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