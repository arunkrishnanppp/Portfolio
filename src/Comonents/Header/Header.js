import React, { useContext, useState } from "react";
import Headroom from "react-headroom";
//hide header until you need tthat
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import airbnbLogo from "../../assets/images/me.jpg";
import logo from "../../assets/images/meepng.png";
import StyleContext from "../../Context/StyleContext";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { motion, useMotionValue, useTransform } from "framer-motion";
import TS from "../ToggleSwitch/TS";
const Header = () => {
  // const [checked, setchecked] = useState(false);
  const clicked = () => {
    console.log("clicked");
    document.getElementById("xxx").click();
  };

  const { isDark } = useContext(StyleContext);
  console.log(isDark);
  const lists = [
    { name: "Stacks", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact Me", href: "#contactme" },
  ];
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a className="logo">
          {/* <span className="grey-color">&lt;</span> */}
          <Avatar alt="Aemy Sharp" src={logo} className="avatar" />

          {/* <span className="logo-name">Arun Krishnan</span> */}
          {/* <span className="grey-color">/&gt;</span  > */}
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          id="xxx"
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <TS className="togglebutton" />
        <ul className={isDark ? "dark-menu menu" : "menu"} onClick={clicked}>
          {lists.map((item, i) => {
            return (
              <li>
                <a href={item.href}>
                  <motion.div
                    // drag="y"

                    initial="hidden"
                    animate="visible"
                    dragConstraints={{ left: -100, right: 100 }}
                    // whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.4 }}
                  >
                    {item.name}
                  </motion.div>
                </a>
              </li>
            );
          })}
          {/* <li>
            <a href="#skills">
              <motion.div
                // drag="y"

                initial="hidden"
                animate="visible"
                dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.4 }}
              >
                Stacks
              </motion.div>
            </a>
          </li>
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
          </li>
          <li>
            <a href="#projects">Works</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contactme">Contact Me</a>
          </li> */}
        </ul>
      </header>
    </Headroom>
  );
};

export default Header;
