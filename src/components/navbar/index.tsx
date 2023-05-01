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
      <div
        aria-label="Footer Nav"
        className="font-light text-base xxs:hidden lg:block "
      >
        <a
          href="#skills"
          className="px-4 py-2  hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          SKILLS
        </a>
        <a
          href="#experience"
          className="px-4 py-2 hover:bg-gray-100  hover:text-[#1DA1F2] "
        >
          EXPERIENCE
        </a>
        <a
          href="#featured-projects"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          FEATURED PROJECTS
        </a>
        <a
          href="#open-source"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          OTHER PROJECTS
        </a>

        <a
          href="#education"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          EDUCATION
        </a>

        <a
          href="#achievements"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          ACHIEVEMENTS
        </a>
        <a
          href="#musings"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          MUSINGS
        </a>
      </div>

      <i
        className="fa-solid fa-moon cursor-pointer xxs:hidden lg:block"
        onClick={onToggleTheme}
      ></i>
    </div>
  );
};

export default NavBar;
