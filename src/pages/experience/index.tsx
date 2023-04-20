import React from 'react';
import ExperienceCard from '../../components/experience';
import { workInfo } from '../../portfolio';


const Experience = () => {
    const experienceSectionStyle = "flex flex-col my-24"
    const experienceHeaderStyle = "text-5xl font-[400] text-[#1DA1F2]"
    const experienceCardContainerStyle = "flex flex-row justify-center pt-5 grid md:grid-cols-2 gap-9 "
  return (
    <section className={experienceSectionStyle} id="experience">
        <div className='w-auto'>
            <h1 className={experienceHeaderStyle}>Experience</h1>
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