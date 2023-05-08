import React from "react";
import { OpenSourceProjectType } from "../../types";
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";
import Element from "./gitinfo";

type Props = {
  key: number;
  project: OpenSourceProjectType;
};

const OpenSourceProjectCard = ({ key, project }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  // hover:shadow-md hover:shadow-white shadow-white shadow-sm rounded-lg  border border-gray-100

  return (
    <div key={key} className="w-[23%]">
      <Link to="#">
        <div className="cursor-pointer my-3 flex gap-x-5 justify-between">
          <p className="text-lg my-auto text-[#1DA1F2] font-normal ">
            {project.nodename}
          </p>
          <div
            className={
              theme === "dark"
                ? "text-xl text-[#1DA1F2] my-auto"
                : "text-xl text-[#1DA1F2] my-auto"
            }
          >
            <VscArrowRight />
          </div>
        </div>
      </Link>
      <p
        className={
          theme === "dark"
            ? "pb-5 pt-2 text-base font-light text-white"
            : "pb-5 pt-2 text-base font-light text-gray-500"
        }
      >
        {project.description}
      </p>
      <div
        className={
          theme === "dark"
            ? "flex justify-between text-white text-base font-thin pb-6"
            : "flex justify-between text-gray-500 text-base font-thin pb-6"
        }
      >
        <div className="flex">
          <Element element={project.primarylanguage} />
          <Element element={project.forkcount} />
          <Element element={project.stargazers} />
        </div>
        <Element element={project.diskusage} />
      </div>
    </div>
  );
};

export default OpenSourceProjectCard;
