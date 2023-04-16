import * as React from "react";
import HomePage from "../pages/home/HomePage";
import Skills from "./skills";
import Education from "../pages/education";
import Experience from "../pages/experience";
import ProjectsCard from "./projects";
import Achievements from "./achievements";

export function App() {

  // const [toggle, setToggle] = React.useState(false)

  
  return (
    <div>
      <HomePage />
      <Skills />
      <Experience/>
      <Education/>
      <ProjectsCard />
      <Achievements />
    </div>
  )
}

export default App;