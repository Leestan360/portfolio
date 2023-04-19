import * as React from "react";

function NavBar() {
  return (
    <div className="flex justify-between text-[1.2rem] py-6 ">
      <a href="/">
        <i className="fa-thin fa-less-than"></i> Stanley Mayore /
        <i className="fa-regular fa-slash-forward"></i>
        <i className="fa-thin fa-greater-than"></i>
      </a>
      <div aria-label="Footer Nav">
        <a href="#skills" className="px-4 py-2  hover:bg-gray-100 ">
          Skills
        </a>
        <a href="#experience" className="px-4 py-2 hover:bg-gray-100">
          Work Experience
        </a>
        <a href="#education" className="px-4 py-2 hover:bg-gray-100">
          Education
        </a>
        <a href="#open-source" className="px-4 py-2 hover:bg-gray-100">
          Open Source
        </a>
        <a href="#achievements" className="px-4 py-2 hover:bg-gray-100">
          Achievements
        </a>
        <a href="#blogs" className="px-4 py-2 hover:bg-gray-100">
          Blogs
        </a>
      </div>

      <i className="fa-solid fa-moon"></i>
    </div>
  );
}

export default NavBar;
