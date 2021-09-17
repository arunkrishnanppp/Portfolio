import React, { useState, useContext } from "react";
import "./SocialMedia.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
export const SocialMedia = ({ flex }) => {
  const { isDark } = useContext(StyleContext);
  const [sm, setstate] = useState([
    {
      name: "github",
      link: "https://github.com/arunkrishnanppp",
      icon: "fab fa-github",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/a_vei_r_o/",
      icon: "fab fa-instagram",
    },
    {
      name: "stack-overflow",
      link: "https://stackoverflow.com/users/15321907/arun",
      icon: "fab fa-stack-overflow",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/arunkrishnanpp/",
      icon: "fab fa-linkedin-in",
    },
    {
      name: "hackerrank",
      link: "https://www.hackerrank.com/aveiro",
      icon: "fab fa-hackerrank",
    },
  ]);
  return (
    <Fade right>
      <div className="social_media_div">
        {sm.map((item, index) => {
          return (
            <a
              href={item.link}
              className={
                isDark
                  ? flex
                    ? `icon-button ${item.name}` + " dark" + " flex"
                    : `icon-button ${item.name}` + " dark"
                  : flex
                  ? `icon-button ${item.name}` + " flex"
                  : `icon-button ${item.name}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={item.icon}></i>
              <span></span>
            </a>
          );
        })}
      </div>
    </Fade>
  );
};
