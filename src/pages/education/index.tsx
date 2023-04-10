import React from 'react'
import EducationCard from '../../components/education'
import { educationInfo } from '../../portfolio'



const Education = () => {
    const educationSectionStyle = "flex flex-col my-5 mb-16"
    const educationHeaderStyle = "text-4xl font-normal px-12 md:mx-20"
    const educationCardContainerStyle = "flex flex-row justify-center pt-5 grid md:grid-cols-2 gap-9 px-12 md:mx-20"
  return (
      <section className={educationSectionStyle} id="education">
        <div className="w-auto">
          <h1 className={educationHeaderStyle}>Education</h1>
        </div>
        
        <div className={educationCardContainerStyle}>
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </section>
    )
}

export default Education