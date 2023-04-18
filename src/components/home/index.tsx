import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex px-20 pt-28 justify-center">
      <div className="w-[48%] text-center">
        <h3 className="text-[3.8rem] font-[700px]">Hi all, I'm Stanley</h3>
        <p className="py-8 text-[1.5rem]">
          A passionate Full Stack Software Developer having an experience of
          building Web and Mobile applications with JavaScript / Reactjs / Rails
          / FastAPI and some other cool libraries and frameworks.
        </p>
        <div>
          <Link to="">
            <i className="fa-brands fa-github border p-2 rounded-full bg-black text-white"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-linkedin-in border bg-blue-500 hover:bg-black text-white p-2 rounded-full  mx-3"></i>
          </Link>
          <Link to="">
            <i className="fa-solid fa-envelope border p-2 rounded-full text-white bg-red-500 hover:bg-black"></i>
          </Link>
        </div>
        <div className="py-8">
          <a href="tel:+254702425434" className="border border-purple-500 bg-purple-800 text-white hover:bg-white hover:text-purple-800 px-5 py-3 rounded-[5px]  ">CONTACT ME</a>
          <Link to="" className="border border-purple-500 bg-purple-800 text-white hover:bg-white hover:text-purple-800 px-5 py-3 rounded-[5px] mx-10 ">MY RESUME</Link>
        </div>
      </div>
      {/* <img src="/homeImage.png" alt="image1" className="w-[48%]" /> */}
    </div>
  );
}

export default Home;