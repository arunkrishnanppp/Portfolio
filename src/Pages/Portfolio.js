import React, { useState } from "react";
import Header from "../Comonents/Header/Header";
import { Knowledge } from "../Comonents/Knowledge/Knowledge";
import { Movetotop } from "../Comonents/MovetoTop/Movetotop";
import { StyleProvider } from "../Context/StyleContext";
import { Certificates } from "./Certificates/Certificates";
import { Contactme } from "./ContactMe/Contactme";
import { Education } from "./Education/Education";
import { Experience } from "./Experience/Experience2";
import { Home } from "./Home/Home";
import "./Portfolio.css";
import { Projects } from "./Projects/Projects";
import { Skills } from "./Skills/Skills";
import { Test } from "./Test/Test";
const Portfolio = () => {
  const [isDark, setisDark] = useState(true);
  const changeTheme = () => {
    setisDark(!isDark);
    localStorage.setItem("isDark", isDark);
  };

  return (
    <div className={isDark ? "dark-mode portfolio" : "portfolio"}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />

        <Home />
        <Skills />
        <Knowledge />
        <Experience />
        <Education />
        <Certificates />
        <Projects />
        <Contactme />
        <Movetotop />
      </StyleProvider>
    </div>
  );
};

export default Portfolio;
