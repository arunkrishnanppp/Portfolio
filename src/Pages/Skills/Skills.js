import React, { useContext } from "react";
import StyleContext from "../../Context/StyleContext";
import "./Skills.css";
import coder from "../../assets/lottie/coder.json";
// import coder3 from "../../assets/lottie/coder3.json";
import { LottyDisplay } from "../../Comonents/LottyDisplay/LottyDisplay";
import Fade from "react-reveal/Fade";
import { MyStacks } from "../../Comonents/MyStacks/MyStacks";
export const Skills = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <div id="skills">
      <div className={isDark ? "dark-mode skills" : "skills"}>
        <div className="skills_div">
          <Fade left>
            <div className="skils_content_div">
              <h1 className="skills_content_title">What i Use</h1>
              <p className="skills_content_sub">
                CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
              </p>
              <MyStacks />
              <p
                className={
                  isDark ? " dark-mode subskillsDef " : "subskills subskillsDef"
                }
              >
                Developed Web application using React Js
              </p>
              <p
                className={
                  isDark ? "  dark-mode subskillsDef" : "subskills subskillsDef"
                }
              >
                Developed web Automation using Java & Selenium
              </p>
              <p
                className={
                  isDark ? "  dark-mode subskillsDef" : "subskills subskillsDef"
                }
              >
                Done POC in Node Js
              </p>
              <p
                className={
                  isDark ? "  dark-mode subskillsDef" : "subskills subskillsDef"
                }
              >
                Done POC in Spring Boot
              </p>
              <p
                className={
                  isDark ? "  dark-mode subskillsDef" : "subskills subskillsDef"
                }
              >
                Worked with Devops team for CI/CD managment
              </p>
            </div>
          </Fade>

          <Fade right>
            {" "}
            <div className="skils_illustration_div">
              <LottyDisplay animationData={coder} />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
