import * as React from "react";
import Home from "../../components/home";
import NavBar from "../../components/navbar";
import Skills from "../../components/skills";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills />
    </div>
  )
}

export default HomePage;