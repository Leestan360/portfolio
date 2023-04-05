import * as React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between px-10 text-[1.2rem] py-6">
      <Link to="#">
        <i className="fa-thin fa-less-than"></i> Stanley Mayore{" "}
        <i className="fa-regular fa-slash-forward"></i>
        <i className="fa-thin fa-greater-than"></i>
      </Link>
      <div>
        <Link to="#" className="px-4 py-2  hover:bg-gray-100 ">
          Skills
        </Link>
        <Link to="#" className="px-4 py-2 hover:bg-gray-100">
          Work Experience
        </Link>
        <Link to="#" className="px-4 py-2 hover:bg-gray-100">
          Open Source
        </Link>
        <Link to="#" className="px-4 py-2 hover:bg-gray-100">
          Achievements
        </Link>
        <Link to="#" className="px-4 py-2 hover:bg-gray-100">
          Blogs
        </Link>
        <Link to="#" className="px-4 py-2 hover:bg-gray-100">
          Talks
        </Link>
        <Link to="#" className="px-4 py-2 hover:bg-gray-100">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
