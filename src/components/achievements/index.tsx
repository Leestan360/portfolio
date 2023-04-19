import * as React from "react";
import { Link } from "react-router-dom";

function Achievements() {
  return (
    <div className="my-24">
      <h3 className="text-4xl font-[500]">Achievements And Certifications</h3>
      <p className="text-[1.2rem]  text-gray-500">
        ACHIEVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF THAT I
        HAVE DONE !
      </p>
      <div className="flex flex-wrap justify-between">

        <div className="border border-gray-300 w-[32.5%] text-center rounded-lg py-8 px-4 my-6 shadow-lg hover:shadow-xl bg-white cursor-pointer">
          <p className="my-16">Icon</p>
          <p className="font-[400] text-[1.4rem] my-2">Google Code-In Finalist</p>
          <p className="my-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Link to="" className="border border-purple-500 bg-purple-800 text-white px-3 py-1 rounded-[5px] text-[0.8rem]">Certification</Link>
            <Link  to="" className="border border-purple-500 bg-purple-800 text-white px-3 py-1 rounded-[5px] text-[0.8rem] ">Award Letter</Link>
            <Link to="" className="border border-purple-500 bg-purple-800 text-white px-3 py-1 rounded-[5px] text-[0.8rem] ">Google Code-in Blog</Link>
          </div>
        </div>
        <div className="border border-gray-300 w-[32.5%] text-center rounded-lg py-8 px-4 my-6 shadow-lg hover:shadow-xl bg-white">
          <p className="my-16">Icon</p>
          <p className="font-[400] text-[1.4rem] my-2">Google Code-In Finalist</p>
          <p className="my-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Link to="" className="border border-purple-500 bg-purple-800 text-white px-3 py-1 rounded-[5px] text-[0.8rem]">Certification</Link>
            <Link  to="" className="border border-purple-500 bg-purple-800 text-white px-3 py-1 rounded-[5px] text-[0.8rem] ">Award Letter</Link>
            <Link to="" className="border border-purple-500 bg-purple-800 text-white px-3 py-1 rounded-[5px] text-[0.8rem] ">Google Code-in Blog</Link>
          </div>
        </div>


        <div className="border border-gray-300 w-[32.5%] text-center rounded-lg py-8 px-4 my-6 shadow-lg hover:shadow-xl bg-white cursor-pointer">
          <p className="my-16">Icon</p>
          <p className="font-[400] text-[1.4rem] my-2">Google Code-In Finalist</p>
          <p className="my-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Link to="" className="border border-purple-500 bg-purple-800 text-white px-3 py-1 rounded-[5px] text-[0.8rem]">Certification</Link>
            <Link  to="" className="border border-purple-500 bg-purple-800 text-white px-3 py-1 rounded-[5px] text-[0.8rem] ">Award Letter</Link>
            <Link to="" className="border border-purple-500 bg-purple-800 text-white px-3 py-1 rounded-[5px] text-[0.8rem] ">Google Code-in Blog</Link>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Achievements;
