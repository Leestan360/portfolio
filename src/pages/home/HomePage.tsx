import * as React from "react";
import Home from "../../components/home";
import NavBar from "../../components/navbar";

function HomePage() {
  return (
    <div className="h-screen">
      <NavBar />
      <Home />

    </div>
  )
}

export default HomePage;