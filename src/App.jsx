import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Contact from "./components/Contact/Contact";
import ExtraCurr from "./components/ExtraCurr/ExtraCurr";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <ExtraCurr />
        <Contact />
      </div>
    </>
  );
};
export default App;
