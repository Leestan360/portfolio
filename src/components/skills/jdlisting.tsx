import * as React from "react";
import { skillsInfo } from "../../portfolio";
import JDEntry from "./jdentry";


const JDListing = () => {
  return (
      <div className="w-[45%] ">
        <p className="text-2xl font-light text-[#1DA1F2] ">SKILLS</p>
        <ul className="pb-10 py-1 text-xl font-thin">
          {skillsInfo.jd.map((item, key) => (
            <JDEntry key={key} jd={item}/>
          ))}
        </ul>
        </div>
  )
}




export default JDListing

