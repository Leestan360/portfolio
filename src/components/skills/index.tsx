import * as React from "react";

function Skills() {
  return (
    <div id="skills" className="flex justify-between py-10">
      <img src="/homeImage.png" alt="image2" className=""></img>
      <div className="w-[48%]">
        <p className="text-5xl font-[400] text-[#1DA1F2] ">What I do</p>
        <ul className="pb-10 py-1 text-[1.5rem] font-[400] ">
          <li className="py-2 font-[300] leading-7">
            Develop highly interactive Front end / User Interfaces for your web
            and mobile applications
          </li>
          <li className="py-2 font-[300] leading-7">
            Progressive Web Applications (PWA) in normal and SPA Stacks
          </li>
          <li className="py-2 font-[300] leading-7">
            Integration of third party services such as Firebase/ AWS / Digital
            Ocean
          </li>
        </ul>
        <p className="text-5xl font-[400] text-[#1DA1F2]">What I use</p>
        <div className="flex flex-wrap py-3 gap-x-8 gap-y-5 ">
          <div className="text-center cursor-pointer ">
            <i className="fa-brands fa-html5 fa-3x"></i>
            <p className="text-[0.8rem]">html5</p>
          </div>
          <div className="text-center cursor-pointer">
            <i className="fa-brands fa-css3 fa-3x"></i>
            <p className="text-[0.8rem]">css3</p>
          </div>
          <div className="text-center cursor-pointer">
            <i className="fa-brands fa-js fa-3x"></i>
            <p className="text-[0.8rem]">JavaScript</p>
          </div>
          <div className="text-center cursor-pointer">
            <i className="fa-brands fa-python fa-3x"></i>
            <p className="text-[0.8rem]">python</p>
          </div>
          <div className="text-center cursor-pointer">
            <i className="fa-brands fa-react fa-3x"></i>
            <p className="text-[0.8rem]">reactjs</p>
          </div>
          <div className="text-center cursor-pointer">
            <i className="fa-brands fa-docker fa-3x"></i>
            <p className="text-[0.8rem]">docker</p>
          </div>
          <div className="text-center cursor-pointer">
            <i className="fa-brands fa-node fa-3x"></i>
            <p className="text-[0.8rem]">nodejs</p>
          </div>
          <div className="text-center cursor-pointer">
            <i className="fa-brands fa-aws fa-3x"></i>
            <p className="text-[0.8rem]">aws</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
