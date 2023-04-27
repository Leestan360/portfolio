import * as React from "react";

interface NavbarProps {
  onToggleTheme: () => void;
}

const NavBar: React.FC<NavbarProps> = ({ onToggleTheme }) => {
  return (
    <div className="flex justify-between text-[1.2rem] py-6 ">
      <a href="/">
        <i className="fa-thin fa-less-than"></i> Stanley Mayore /
        <i className="fa-regular fa-slash-forward"></i>
        <i className="fa-thin fa-greater-than"></i>
      </a>
      <div aria-label="Footer Nav" className="">
        <a href="#skills" className="px-4 py-2  hover:bg-gray-100 hover:text-[#1DA1F2] ">
          Skills
        </a>
        <a href="#experience" className="px-4 py-2 hover:bg-gray-100  hover:text-[#1DA1F2] ">
          Work Experience
        </a>
        <a href="#education" className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] ">
          Education
        </a>
        <a href="#open-source" className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] ">
          Open Source
        </a>
        <a href="#big-projects" className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] ">
          Big Projects
        </a>
        <a href="#achievements" className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] ">
          Achievements
        </a>
        <a href="#blogs" className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] ">
          Blogs
        </a>
      </div>

      <i className="fa-solid fa-moon cursor-pointer" onClick={onToggleTheme}></i>
    </div>
  );
}

export default NavBar;
