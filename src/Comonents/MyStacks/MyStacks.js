import React, { useContext } from "react";
import StyleContext from "../../Context/StyleContext";
import "./MyStacks.css";
import Fade from "react-reveal/Fade";
export const MyStacks = () => {
  const softwareSkills = [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass",
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift",
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-python",
    },
  ];
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom>
      {" "}
      <div className="mystacks">
        <ul className="sw_icons">
          {softwareSkills.map((item, i) => {
            return (
              <li className="swskilss_inline" key={i} name={item.skillName}>
                <i className={item.fontAwesomeClassname}></i>
                <p>{item.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Fade>
  );
};
