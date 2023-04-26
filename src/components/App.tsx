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
import { ThemeContext } from "../ThemeContext";
import { themes } from "../theme";
import NavBar from "./navbar";

function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const themeColors = themes[theme];

  // const [toggle, setToggle] = React.useState(false)
  // bg-[#171c28]

  return (
      <div
        className="px-32 font-aper"
        style={{
          backgroundColor: themeColors.background,
          color: themeColors.text,
        }}
      >
        <NavBar onToggleTheme={toggleTheme} />
        <HomePage />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <BigProjects />
        <Achievements />
        <Blog />
        <Footer />
      </div>
  );
}

export default App;
