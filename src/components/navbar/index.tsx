import * as React from "react";
import { ThemeContext } from "../../ThemeContext";

interface NavbarProps {
  onToggleTheme: () => void;
}

const NavBar: React.FC<NavbarProps> = ({ onToggleTheme }) => {
  const { theme } = React.useContext(ThemeContext);
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const scrollToPage = () => {
    window.scrollTo({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between text-[1.2rem] py-6 ">
      <a href="/" className="my-auto">
        <i className="fa-thin fa-less-than"></i> Stanley Mayore /
        <i className="fa-regular fa-slash-forward"></i>
        <i className="fa-thin fa-greater-than"></i>
      </a>
      <div className="hidden xl:flex xl:items-center font-light xl:text-[0.8rem] 2xl:text-base">
        <a
          href="#skills"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
          onClick={scrollToPage}
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
        className="fa-solid fa-moon cursor-pointer xxs:hidden xl:block my-auto"
        onClick={onToggleTheme}
      ></i>
      <div className="xl:hidden">
        {!showMenu ? (
          <i
            className="fa-solid fa-bars cursor-pointer"
            onClick={handleMenuClick}
          ></i>
        ) : (
          <i className="fa-solid fa-xmark cursor-pointer" onClick={handleMenuClick}></i>
        )}
      </div>
      {showMenu && (
        <div className={theme === "dark" ? "xl:hidden absolute top-16 xxs:right-5 xsm:right-8 sm:right-14 md:right-32 bg-[#171c28] shadow-lg py-4 rounded-[4px]" : "xl:hidden absolute top-16 xxs:right-5 xsm:right-8 sm:right-14 md:right-32 bg-white shadow-lg py-4 rounded-[4px]"}>
          <div className=" grid">
            <a
              href="#skills"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
            >
              SKILLS
            </a>
            <a
              href="#experience"
              className="px-8 py-2 hover:bg-gray-100  hover:text-[#1DA1F2] "
            >
              EXPERIENCE
            </a>
            <a
              href="#featured-projects"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
            >
              FEATURED PROJECTS
            </a>
            <a
              href="#open-source"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
            >
              OTHER PROJECTS
            </a>

            <a
              href="#education"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
            >
              EDUCATION
            </a>

            <a
              href="#achievements"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
            >
              ACHIEVEMENTS
            </a>
            <a
              href="#musings"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
            >
              MUSINGS
            </a>
          </div>
                <i
        className="fa-solid fa-moon cursor-pointer px-8 py-2"
        onClick={onToggleTheme}
      ></i>
        </div>
      )}
    </div>
  );
};

export default NavBar;
