import * as React from "react";
import { Link } from "react-router-dom";

function BigProjects() {
  return (
    <div className="my-24">
      <h3 className="text-5xl font-[400] text-[#1DA1F2]">Big Projects</h3>
      {/* <p className="text-gray-500 text-[1.2rem] my-3 ">SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH</p> */}
      <div className="flex justify-between my-5">

        <div className="w-[49%] border border-gray-300 px-24 py-6 rounded-[10px] shadow-lg hover:shadow-xl cursor-pointer bg-white">
          <p className="text-center py-16 text-[2rem] font-[800] text-[#1DA1F2]">Skoolpesa</p>
          <p className="text-center text-[1.5rem] font-[400] text-[#1DA1F2] ">Skoolpesa</p>
          <p className="text-center my-4  text-gray-500 font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="flex justify-center">
            <Link
              to=""
              className="border-2 border-[#1DA1F2] text-base font-normal bg-white text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "
            >
              Visit Website
            </Link>
          </div>
        </div>


        <div className="w-[49%] border border-gray-300 px-24 py-6 rounded-[10px] shadow-lg hover:shadow-xl cursor-pointer  bg-white">
          <p className="text-center py-16 text-[2rem] font-[800] text-[#1DA1F2]">Skoolpesa</p>
          <p className="text-center text-[1.5rem] font-[400] text-[#1DA1F2]">Skoolpesa</p>
          <p className="text-center my-4  text-gray-500 font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="flex justify-center">
            <Link
              to=""
              className="border-2 border-[#1DA1F2] text-base font-normal bg-white text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "
            >
              Visit Website
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BigProjects;
