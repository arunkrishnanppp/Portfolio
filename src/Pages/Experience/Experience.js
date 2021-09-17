import React, { useEffect, useContext } from "react";
import "./Experience.css";
import gl2 from "../../assets/images/gl2.png";
import { LottyDisplay } from "../../Comonents/LottyDisplay/LottyDisplay";
import building from "../../assets/lottie/building.json";
import Fade from "react-reveal/Fade";
import { motion, useMotionValue, useTransform } from "framer-motion";
import StyleContext from "../../Context/StyleContext";
export const Experience = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  const { isDark } = useContext(StyleContext);

  const experience = [
    {
      position: "Software Engineer",
      company: "GLobalLogic",
      timeline: "(Jan2019-Present)",
      tasks: [
        "Played Key role in web UI team",
        "Working with devops team for CI/CI managment",
      ],
    },
    {
      position: " Ass.Software Engineer",
      company: "GLobalLogic",
      timeline: "(Mar2019-Jan2020)",
      tasks: [
        "Played ley role in web UI team",
        "Developed POCs in ReactJs,Nodejs,SpringBoot",
        "Won  Globallogic Awards for Employee of the Month and Weeks",
      ],
    },
    {
      position: " Tr.Software Engineer",
      company: "GLobalLogic",
      timeline: "(Oct2019-Mar2020)",
      tasks: [
        "Developed Web automation script using Selenium",
        "Done WebUI manual tesing",
        "Won Machine Learning Hackathon conducted for frushers",
      ],
    },
  ];
  useEffect(() => {
    scrolltotop();
  }, []);
  const scrolltotop = () => {
    console.log("clicked");
    // const button = document.getElementById("scrolltobottom");

    window.scrollTo({
      bottom: 90000,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={
        isDark ? "dark-mode experience_container" : "experience_container"
      }
      id="experience"
    >
      <div>
        <h1>My Experience</h1>
        <div className="experience">
          {experience.map((item, i) => {
            const x = i % 2;
            return (
              <Fade right>
                <motion.div
                  // drag="y"
                  style={{ x, opacity }}
                  initial="hidden"
                  animate="visible"
                  dragConstraints={{ left: -100, right: 100 }}
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.4 }}
                >
                  <div className={isDark ? "darkdivexp exp_div" : "exp_div"}>
                    <div className="companydiv">
                      <img className="image" src={gl2}></img>
                      <h3>{item.company}</h3>
                    </div>
                    <div className="exp">
                      <h2>{item.position}</h2>
                      <ul>
                        {item.tasks.map((task, j) => {
                          return <li>{task}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="lotty">
                      <LottyDisplay animationData={building} />
                      <span>{item.timeline}</span>
                    </div>
                  </div>
                </motion.div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};
