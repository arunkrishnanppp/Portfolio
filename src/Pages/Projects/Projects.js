import { Divider } from "@material-ui/core";
import React, { useContext } from "react";
import "./Projects.css";
import reac from "../../assets/lottie/reac.png";
import python from "../../assets/lottie/python.png";
import int from "../../assets/lottie/int.jpg";
import { motion, useMotionValue, useTransform } from "framer-motion";
import amazoneclone from "../../assets/images/Projects/amazonclone.JPG";
import ecom from "../../assets/images/Projects/ecom.jpg";
import eye from "../../assets/images/Projects/eye.jpg";
import Github from "../../assets/images/Projects/Github.png";
import portfolio from "../../assets/images/Projects/portfolio.JPG";
import netflix from "../../assets/images/Projects/netflix.jpg";
import spotify from "../../assets/images/Projects/spotify.jpg";
import Fade from "react-reveal/Fade";
import StyleContext from "../../Context/StyleContext";

export const Projects = () => {
  const { isDark } = useContext(StyleContext);
  const certificates = [
    {
      name: "Eye In The Sky",
      sub: "Eye in the sky is one kind of project that leverages MachineLearning and Video analysis. The goal is to detect the presence of violence in public with the use of CNN and RNN",
      image: eye,
      link: "https://github.com/arunkrishnanppp/EyeInTheSky/tree/master",
    },
    {
      name: "Personal Portfolio",
      sub: "Its my Personal Portfolio build using react ",
      image: portfolio,
      link: "https://arunkrishnan.web.app/",
    },
    {
      name: "Ecommerce App",
      sub: "E-commerce Shopping app including User panel and Admin panel Using React+ Redux as state container",
      image: ecom,
      link: "https://ecommapp123.herokuapp.com/",
    },
    {
      name: "Amazon Clone",
      sub: "Clone of Amazon Web Page using React and Firebase Authentication",
      image: amazoneclone,
      link: "https://clone-39d73.web.app/",
    },
    {
      name: "Ntflix clone using React",
      sub: "Netflix Home page clone using React",
      image: netflix,
      link: "https://netflix-clone-62101.web.app/",
    },
    {
      name: "Spotify-Home Page Clone",
      sub: " Spotify Home page clone using React and Context API including integration with spotify API",
      image: spotify,
      link: "https://spotify-clone-83403.web.app/",
    },
    {
      name: "Mask Detection",
      sub: "Simple Mask detection using ML and Deep Learning",
      image: Github,
      link: "https://github.com/arunkrishnanppp/Mask",
    },
    {
      name: "Smart Attendance-ML",
      sub: "Real Time attendance System using ML and OpenCv",
      image: Github,
      link: "https://github.com/arunkrishnanppp/Smart-Attendance-ML",
    },
  ];
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <div className="projects" id="projects">
      <div className="projects_maindiv">
        <div className="proj_header">
          <Fade left duration={2000}>
            {" "}
            <h1>Projects</h1>
          </Fade>

          <p>My Major works</p>
        </div>
        <Fade right>
          {" "}
          <div className="proj_cardDiv">
            {/* //here map the cards */}
            {certificates.map((item, i) => {
              return (
                <motion.div
                  //   drag="y"
                  style={{ x, opacity }}
                  initial="hidden"
                  animate="visible"
                  dragConstraints={{ left: -100, right: 100 }}
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 0.6 }}
                >
                  {" "}
                  <div className={isDark ? "darkdiv projdiv" : "projdiv"}>
                    <a href={item.link} target="_blank">
                      <img className="projimage" src={item.image}></img>
                    </a>

                    <h2 className="proj_title">{item.name}</h2>
                    <p className="proj_des">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};
