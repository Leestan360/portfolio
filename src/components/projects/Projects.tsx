import * as React from "react";

function Projects() {
  return (
    <div className="my-24">
      <h3 className="text-5xl font-[400] text-[#1DA1F2]">Open Source Projects</h3>
      <div className="flex flex-wrap justify-between my-3 gap-y-5">
        <div className="border border-gray-100 py-5 px-7 w-[32.5%] rounded-lg shadow-lg  cursor-pointer my-2 hover:shadow-xl bg-white">
          <p className="text-lg font-bold text-[#1DA1F2]">Project</p>
          <p className="pb-5 pt-2 text-lg font-normal text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-between text-gray-500 text-[1.1rem] font-thin pb-6">
            <div className="flex gap-2">
              <p>JavaScript</p>
              <p>1800</p>
              <p>200</p>
            </div>
            <p>25.8MB</p>
          </div>
        </div>
         
        <div className="border border-gray-100 py-5 px-7 w-[32.5%] rounded-lg shadow-lg  cursor-pointer my-2 hover:shadow-xl bg-white">
          <p className="text-lg font-bold text-[#1DA1F2]">Project</p>
          <p className="pb-5 pt-2 text-lg font-normal text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-between text-gray-500 text-[1.1rem] font-thin pb-6">
            <div className="flex gap-2">
              <p>JavaScript</p>
              <p>1800</p>
              <p>200</p>
            </div>
            <p>25.8MB</p>
          </div>
        </div>

        <div className="border border-gray-100 py-5 px-7 w-[32.5%] rounded-lg shadow-lg  cursor-pointer my-2 hover:shadow-xl bg-white">
          <p className="text-lg font-bold text-[#1DA1F2]">Project</p>
          <p className="pb-5 pt-2 text-lg font-normal text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-between text-gray-500 text-[1.1rem] font-thin pb-6">
            <div className="flex gap-2">
              <p>JavaScript</p>
              <p>1800</p>
              <p>200</p>
            </div>
            <p>25.8MB</p>
          </div>
        </div>

        <div className="border border-gray-100 py-5 px-7 w-[32.5%] rounded-lg shadow-lg  cursor-pointer my-2 hover:shadow-xl bg-white">
          <p className="text-lg font-bold text-[#1DA1F2]">Project</p>
          <p className="pb-5 pt-2 text-lg font-normal text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-between text-gray-500 text-[1.1rem] font-thin pb-6">
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
          className="border border-[#1DA1F2] bg-[#1DA1F2] text-white hover:bg-white hover:text-[#1DA1F2] px-3 py-2 rounded-[5px] ease-in duration-300"
        >
          MORE PROJECTS
        </a>
      </div>
    </div>
  );
}

export default Projects;
