import React from 'react';
import ExperienceCard from '../../components/experience';
import { workInfo } from '../../portfolio';


const Experience = () => {
    const experienceSectionStyle = "flex flex-col mt-4 mb-16"
    const experienceHeaderStyle = "text-4xl font-normal px-12 md:mx-20"
    const experienceCardContainerStyle = "flex flex-row justify-center pt-5 grid md:grid-cols-2 gap-9 px-12 md:mx-20"
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