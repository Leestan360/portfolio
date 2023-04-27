import React from "react";
import { WorkType } from "../../types";
import Bullet from "../Bullets";
import Skills from "./stack";
import { ThemeContext } from "../../ThemeContext";

type Props = {
  key: number;
  work: WorkType;
};

const ExperienceCard = ({ key, work }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      key={key}
      id="parent"
      className="relative block overflow-hidden border border-gray-100 hover:shadow-xl rounded-lg shadow-lg  cursor-pointer  p-4 sm:p-6 lg:p-8"
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
          <span className="text-lg font-normal text-[#1DA1F2] sm:text-xl">
            {work.role}
          </span>
          <span
            className={
              theme === "dark"
                ? "text-lg font-bold text-white"
                : "text-lg font-bold text-gray-500"
            }
          >
            @
          </span>
          <span
            className={
              theme === "dark"
                ? "text-lg font-medium text-white"
                : "text-lg font-medium text-gray-500"
            }
          >
            {work.company}
          </span>
          <p
            className={
              theme === "dark"
                ? "mt-1 text-base font-normal text-white"
                : "mt-1 text-base font-normal text-gray-500"
            }
          >
            {work.date}
          </p>
          <p
            className={
              theme === "dark"
                ? "mt-1 text-base font-thin text-white"
                : "mt-1 text-base font-thin text-gray-500"
            }
          >
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
          <p
            className={
              theme === "dark"
                ? "max-w-fit text-base text-white font-thin"
                : "max-w-fit text-base text-gray-500 font-thin"
            }
          >
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
