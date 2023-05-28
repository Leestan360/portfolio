import React from 'react';
import ExperienceCard from '../../components/experience';
import { workInfo } from '../../portfolio';


const Experience = () => {
    const experienceSectionStyle = "flex flex-col"
    const experienceHeaderStyle = "text-2xl font-light text-[#1DA1F2]"
    const experienceCardContainerStyle = "flex flex-row justify-between grid md:grid-cols-2 pt-5 gap-9"
  return (
    <section className={experienceSectionStyle} id="experience">
        <div className='w-auto'>
            <h1 className={experienceHeaderStyle}>{workInfo.title}</h1>
        </div>
        <div className={experienceCardContainerStyle}>
            {workInfo.experiences.map((experience, index) => (
                <ExperienceCard key={index} work={experience}/>
            ))}
        </div>

    </section>
  )
}

export default Experience