import * as React from "react";

function Projects() {
  return (
    <div className="px-32 my-28">
      <h3 className="text-[2.8rem] my-5">Open Source Projects</h3>
      <div className="flex flex-wrap justify-between my-5">
        <div className="border border-gray-100 py-5 px-7 w-[32.5%] rounded-[4px] shadow-lg  cursor-pointer my-2 hover:shadow-xl ">
          <p className="font-[400] text-[2em] ">Project</p>
          <p className="pb-5 pt-2 text-gray-500 text-[1.3rem] leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-between text-gray-500 text-[1.1rem] font-[300] pb-6">
            <div className="flex gap-2">
              <p>JavaScript</p>
              <p>1800</p>
              <p>200</p>
            </div>
            <p>25.8MB</p>
          </div>
        </div>

        <div className="border border-gray-100 py-5 px-7 w-[32.5%] rounded-[4px] shadow-lg  cursor-pointer my-2 hover:shadow-xl">
          <p className="font-[400] text-[2em] ">Project</p>
          <p className="pb-5 pt-2 text-gray-500 text-[1.3rem] leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-between text-gray-500 text-[1.1rem] font-[300] pb-6">
            <div className="flex gap-2">
              <p>JavaScript</p>
              <p>1800</p>
              <p>200</p>
            </div>
            <p>25.8MB</p>
          </div>
        </div>

        <div className="border border-gray-100 py-5 px-7 w-[32.5%] rounded-[4px] shadow-lg  cursor-pointer my-2 hover:shadow-xl">
          <p className="font-[400] text-[2em] ">Project</p>
          <p className="pb-5 pt-2 text-gray-500 text-[1.3rem] leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-between text-gray-500 text-[1.1rem] font-[300] pb-6">
            <div className="flex gap-2">
              <p>JavaScript</p>
              <p>1800</p>
              <p>200</p>
            </div>
            <p>25.8MB</p>
          </div>
        </div>

        <div className="border border-gray-100 py-5 px-7 w-[32.5%] rounded-[4px] shadow-lg  cursor-pointer my-2 hover:shadow-xl">
          <p className="font-[400] text-[2em] ">Project</p>
          <p className="pb-5 pt-2 text-gray-500 text-[1.3rem] leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-between text-gray-500 text-[1.1rem] font-[300] pb-6">
            <div className="flex gap-2">
              <p>JavaScript</p>
              <p>1800</p>
              <p>200</p>
            </div>
            <p>25.8MB</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <a
          href="https://github.com/Leestan360"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-purple-500 bg-purple-800 text-white hover:bg-white hover:text-purple-800 px-5 py-3 rounded-[5px]"
        >
          MORE PROJECTS
        </a>
      </div>
    </div>
  );
}

export default Projects;
