import * as React from "react";
import { Link } from "react-router-dom";

function BigProjects() {
  return (
    <div className="px-32 my-28">
      <h3 className="text-[2.8rem] ">Big Projects</h3>
      <p className="text-gray-500 text-[1.2rem] my-3 ">SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH</p>
      <div className="flex justify-between">

        <div className="w-[49%] border border-gray-300 px-24 py-6 rounded-[10px] shadow-lg hover:shadow-xl cursor-pointer ">
          <p className="text-center py-16 text-[2rem] font-[800]">Skoolpesa</p>
          <p className="text-center text-[1.5rem] font-[400]">Skoolpesa</p>
          <p className="text-center my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="flex justify-center">
            <Link
              to=""
              className="border border-purple-500 bg-purple-800 text-white px-4 py-1 rounded-[5px] text-[0.8rem] "
            >
              Visit Website
            </Link>
          </div>
        </div>


        <div className="w-[49%] border border-gray-300 px-24 py-6 rounded-[10px] shadow-lg hover:shadow-xl cursor-pointer ">
          <p className="text-center py-16 text-[2rem] font-[800]">Skoolpesa</p>
          <p className="text-center text-[1.5rem] font-[400]">Skoolpesa</p>
          <p className="text-center my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="flex justify-center">
            <Link
              to=""
              className="border border-purple-500 bg-purple-800 text-white px-4 py-1 rounded-[5px] text-[0.8rem] "
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
