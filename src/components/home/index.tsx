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
        <div>
          <a href="https://github.com/Leestan360" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github border p-2 rounded-full bg-black text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/stanley-mayore/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in border bg-blue-500 hover:bg-black text-white p-2 rounded-full  mx-3"></i>
          </a>
          <a href="mailto:stanleymayore2@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-envelope border p-2 rounded-full text-white bg-red-500 hover:bg-black"></i>
          </a>
        </div>
        <div className="py-8 gap-4 flex justify-center">
          <a href="tel:+254702425434" className="border border-purple-500 bg-purple-800 text-white hover:bg-white hover:text-purple-800 px-5 py-2 rounded-[5px]  ">CONTACT ME</a>
          <a href="/" className="border border-purple-500 bg-purple-800 text-white hover:bg-white hover:text-purple-800 px-5 py-2 rounded-[5px] ">MY RESUME</a>
        </div>
      </div>
      {/* <img src="/homeImage.png" alt="image1" className="w-[48%]" /> */}
    </div>
  );
}

export default Home;