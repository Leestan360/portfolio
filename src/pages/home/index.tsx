import React from 'react';
import { homeInfo, socialMediaInfo } from '../../portfolio'
import {SiGithub, SiLinkedin} from "react-icons/si";


const Home = () => {
  return (
    <div className="flex justify-center h-screen">      
      <div className="w-[48%] text-center my-auto">
        <h3 className="text-5xl font-thin">{homeInfo.greeting} <span className="font-medium">{homeInfo.prefname}</span></h3>
        <p className="py-8 text-2xl font-thin">
          {homeInfo.subtitle}
        </p>
        <div className="flex justify-center gap-x-5">
          <a href={`${socialMediaInfo.github}`} target="_blank" rel="noreferrer">
            {/* <i className="fa-brands fa-github border p-2 bg-black text-white"></i> */}
            <span className="text-4xl hover:text-gray-600/75">
              <SiGithub/>
            </span>
          </a>
          <a href={`${socialMediaInfo.linkedin}`} target="_blank" rel="noreferrer">
            {/* <i className="fa-brands fa-linkedin-in bg-blue-500 hover:bg-black text-white p-2"></i> */}
            <span className="text-4xl hover:text-[#0072b1]">
              <SiLinkedin/>
            </span>
          </a>
          {/* <a href="mailto:stanleymayore2@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-envelope border p-2 rounded-full text-white bg-red-500 hover:bg-black"></i>
          </a> */}
        </div>
        <div className="py-8 gap-4 flex justify-center">
          <a href={`mailto:${socialMediaInfo.gmail}`} className="border border-[#1DA1F2] bg-[#1DA1F2] text-white hover:bg-white hover:text-[#1DA1F2] px-5 py-2 rounded-[5px]  ease-in duration-300 ">CONTACT ME</a>
          <a href={`${homeInfo.resumeLink}`} className="border border-[#1DA1F2] bg-[#1DA1F2] text-white hover:bg-white hover:text-[#1DA1F2] px-5 py-2 rounded-[5px] ease-in duration-300 ">VIEW RESUME</a>
        </div>
      </div>
      {/* <img src="/homeImage.png" alt="image1" className="w-[48%]" /> */}
    </div>
  )
}

export default Home