import * as React from "react";

function Home() {
  return (
    <div className="flex justify-center h-screen">
      <div className="w-[48%] text-center my-auto">
        <h3 className="text-[4rem] font-[400]">Hi all, I'm Stanley</h3>
        <p className="py-8 text-[1.5rem]">
          A passionate Full Stack Software Developer having an experience of
          building Web and Mobile applications with JavaScript / Reactjs / Rails
          / FastAPI and some other cool libraries and frameworks.
        </p>
        <div className="flex justify-center gap-x-5">
          <a href="https://github.com/Leestan360" target="_blank" rel="noreferrer">
            {/* <i className="fa-brands fa-github border p-2 bg-black text-white"></i> */}
            <i className="text-5xl fab fa-brands fa-github hover:text-gray-600 "></i>
          </a>
          <a href="https://www.linkedin.com/in/stanley-mayore/" target="_blank" rel="noreferrer">
            {/* <i className="fa-brands fa-linkedin-in bg-blue-500 hover:bg-black text-white p-2"></i> */}
            <i className="text-5xl fab fa-linkedin hover:text-[#1DA1F2]"></i>
          </a>
          {/* <a href="mailto:stanleymayore2@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-envelope border p-2 rounded-full text-white bg-red-500 hover:bg-black"></i>
          </a> */}
        </div>
        <div className="py-8 gap-4 flex justify-center">
          <a href="mailto:stanleymayore2@gmail.com" className="border border-[#1DA1F2] bg-[#1DA1F2] text-white hover:bg-white hover:text-[#1DA1F2] px-5 py-2 rounded-[5px]  ease-in duration-300 ">CONTACT ME</a>
          <a href="/" className="border border-[#1DA1F2] bg-[#1DA1F2] text-white hover:bg-white hover:text-[#1DA1F2] px-5 py-2 rounded-[5px] ease-in duration-300 ">MY RESUME</a>
        </div>
      </div>
      {/* <img src="/homeImage.png" alt="image1" className="w-[48%]" /> */}
    </div>
  );
}

export default Home;