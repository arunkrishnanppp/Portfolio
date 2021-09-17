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
      timeline: "(Oct 2019-Present)",
      tasks: [
        "Developed Web UI components for Asset Management system which gives all critical information about assets and help in tracking and managing assets",
        "Implemented state management for Asset Management System  using Redux",
        "Worked on Restful web service calls to REST APIs to implement the client-side logic on javascript",
        "Worked on POCs in React, Node and Spring Boot",
        "Implemented unit tests for javascript code using Jest",
        "Automated Web UI testing using  Selenium and Cucumber",
        "Worked on SRE DevOps team for managing Azure cloud-related  resources, provisioning engines in consul and vault, Managing access part for Openshift Console and creating Aviatrix VPN profiles",
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
                  //   whileHover={{ scale: 0.9 }}
                  //   whileTap={{ scale: 0.4 }}
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
