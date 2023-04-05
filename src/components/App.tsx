import * as React from "react";
import HomePage from "../pages/home/HomePage";
import Skills from "./skills";
import Education from "../pages/education";
import Experience from "../pages/experience";

export function App() {

  // const [toggle, setToggle] = React.useState(false)

  
  return (
    <div>
      <HomePage />
      <Skills />
      <Experience/>
      <Education/>
    </div>
  )
}

export default App;