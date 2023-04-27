import React from "react";
import { WorkType } from "../../types";
import Bullet from "../Bullets";
import Skills from "./stack";

type Props = {
  key: number;
  work: WorkType;
};

const ExperienceCard = ({ key, work }: Props) => {
  return (
    <div
      key={key}
      id="parent"
      className="relative block overflow-hidden border border-gray-100 hover:shadow-xl rounded-lg shadow-lg  cursor-pointer bg-white p-4 sm:p-6 lg:p-8"
    >
      <span id="child" className="absolute inset-x-0 bottom-0 h-2"></span>
      <div className="sm:flex sm:justify-between sm:gap-4 mb-4 border-b-2 border-gray-100 pb-4">
        <div className="hidden sm:block sm:shrink-0">
          <img
            alt={`${work.company}`}
            src="https://source.unsplash.com/mjRwhvqEC0U/600x600"
            className="border border-solid border-[#1DA1F2] h-24 w-24 rounded-full object-cover shadow-sm"
          />
        </div>
        <div>
          <span className="text-lg font-bold text-[#1DA1F2] sm:text-xl">
            {work.role}
          </span>
          <span className="text-lg font-extrabold text-gray-500">@</span>
          <span className="text-lg font-semibold text-gray-500">
            {work.company}
          </span>
          <p className="mt-1 text-base font-normal text-gray-500">
            {work.date}
          </p>
          <p className="mt-1 text-base font-thin text-gray-500">
            {work.desc}
          </p>
        </div>
      </div>
      <div>
        {/* <span className="text-base font-semibold text-slate-900">
          {"Stack: "}
        </span> */}

        {/* <span></span> */}
        <div className="mt-1">
          <p className="max-w-fit text-base text-gray-500 font-thin">
            <Bullet descBullets={work.descBullets} />
          </p>
        </div>
      </div>
      <div className="pt-5 grid justify-items-center">
          <span className="mt-1 text-sm font-thin text-gray-500">
            <Skills skills={work.stack}></Skills>
          </span>
      </div>

    </div>
  );
};

export default ExperienceCard;
