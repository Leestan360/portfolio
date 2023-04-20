import * as React from "react";
import HomePage from "../pages/home/HomePage";
import Skills from "./skills";
import Education from "../pages/education";
import Experience from "../pages/experience";
// import ProjectsCard from "./projects";
import Achievements from "./achievements";
import Footer from "../pages/footer";
import Blog from "../pages/blog";
import Projects from "./projects/Projects";
import BigProjects from "./projects/BigProjects";


export function App() {

  // const [toggle, setToggle] = React.useState(false)
  // bg-[#171c28]
  
  return (
    <div className="px-32 bg-[#16202A] ">
      <HomePage />
      <Skills />
      <Experience/>
      <Education/>
      <Projects />
      <BigProjects />
      <Achievements/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;