import * as React from "react";

function Skills() {
  return (
    <div className="px-20 flex justify-between">
      <img src="" alt="image2" className="w-[50%]"></img>
      <div className="w-[50%]">
        <p className="text-[3rem]">What I do</p>
        <ul className="list-disc pb-5">
          <li>
            Develop highly interactive Front end / User Interfaces for your web
            and mobile applications
          </li>
          <li>Progressive Web Applications (PWA) in normal and SPA Stacks</li>
          <li>
            Integration of third party services such as Firebase/ AWS / Digital
            Ocean
          </li>
        </ul>
        <p className="text-[3rem]">What I use</p>
        <div className="grid grid-cols-7 justify-center py-3">
          <div className="text-center">
            <i className="fa-brands fa-html5 fa-2x"></i>
            <p>html5</p>
          </div>
          <div className="text-center">
            <i className="fa-brands fa-css3 fa-2x"></i>
            <p>css3</p>
          </div>
          <div className="text-center">
            <i className="fa-brands fa-js fa-2x"></i>
            <p>JavaScript</p>
          </div>
          <div className="text-center">
            <i className="fa-brands fa-python fa-2x"></i>
            <p>python</p>
          </div>
          <div className="text-center">
            <i className="fa-brands fa-react fa-2x"></i>
            <p>reactjs</p>
          </div>
          <div className="text-center">
            <i className="fa-brands fa-docker fa-2x"></i>
            <p>docker</p>
          </div>
          <div className="text-center">
            <i className="fa-brands fa-node fa-2x"></i>
            <p>nodejs</p>
          </div>
          <div className="text-center">
            <i className="fa-brands fa-aws fa-2x"></i>
            <p>aws</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
