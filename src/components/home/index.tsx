import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex px-28 justify-between">
      <div className="w-[50%]">
        <h3>Hi all, I'm Stanley</h3>
        <p>
          A passionate Full Stack Software Developer having an experience of
          building Web and Mobile applications with JavaScript / Reactjs / Rails
          / FastAPI and some other cool libraries and frameworks.
        </p>
        <div>
          <p>Icons</p>
        </div>
        <Link to="">CONTACT ME</Link>
        <Link to="">MY RESUME</Link>
      </div>
      <img src="" alt="image1" className="w-[50%]" />
    </div>
  );
}

export default Home;
