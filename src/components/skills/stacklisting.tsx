import * as React from "react";
import { skillsInfo } from "../../portfolio";
import SkillEntry from "./skillentry";


const StackListing = () => {
  return (
        <div className="w-[48%]">
        <p className="text-5xl font-[400] text-[#1DA1F2]">What I use</p>
        <div className="flex justify-between py-3 ">
          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Languages</h4>
            {skillsInfo.languageskills.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>

          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Frameworks</h4>
            {skillsInfo.frameworkskills.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>

          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Cloud</h4>
            {skillsInfo.cloud.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>

          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Database</h4>
            {skillsInfo.databaseskills.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>

          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Others</h4>
            {skillsInfo.others.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>
        </div>
        </div>
    )
  }

  export default StackListing