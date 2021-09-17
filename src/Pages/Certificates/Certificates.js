import { Divider } from "@material-ui/core";
import React, { useContext } from "react";
import "./Certi.css";
import reac from "../../assets/lottie/reac.png";
import python from "../../assets/lottie/python.png";
import int from "../../assets/lottie/int.jpg";
import js from "../../assets/lottie/js.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Fade from "react-reveal/Fade";
import StyleContext from "../../Context/StyleContext";
export const Certificates = () => {
  const { isDark } = useContext(StyleContext);
  const certificates = [
    {
      name: "Hacker Rank-React",
      sub: "This is the certificate provided by hacker rank for React",
      image: reac,
      href: "https://www.hackerrank.com/certificates/0bf8ae54e3e5",
    },
    {
      name: "Hacker Rank-Javascript",
      sub: "This is the certificate provided by hacker rank for Javascript",
      image: python,
      href: "https://www.hackerrank.com/certificates/01f5845ec158",
    },
    {
      name: "Hacker Rank-Python",
      sub: "This is the certificate provided by hacker rank for Python",
      image: js,
      href: "https://www.hackerrank.com/certificates/01f5845ec158",
    },
    {
      name: "AI/ML-Internship",
      sub:
        "This is the certificate provided by Pantech Solutions for 30 Day AI/ML Internship",
      image: int,
      // href: null,
    },
  ];
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <div className="certificates" id="certificates">
      <div className="certificates_maindiv">
        <div className="cert_header">
          <Fade left duration={2000}>
            {" "}
            <h1>Certificates</h1>
          </Fade>

          <p>My achivements in this era</p>
        </div>
        <Fade right>
          {" "}
          <div className="cert_cardDiv">
            {/* //here map the cards */}
            {certificates.map((item, i) => {
              return (
                <motion.div
                  //   drag="x"
                  style={{ x, opacity }}
                  initial="hidden"
                  animate="visible"
                  dragConstraints={{ left: -100, right: 100 }}
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 0.6 }}
                >
                  {" "}
                  <div className={isDark ? "darkcarddiv carddiv" : "carddiv"}>
                    {item.href ? (
                      <a href={item.href} target="_blank">
                        <img
                          className="certificateimage"
                          src={item.image}
                        ></img>
                      </a>
                    ) : (
                      <img className="certificateimage" src={item.image}></img>
                    )}

                    <h2 className="cert_title">{item.name}</h2>
                    <p className="cert_des">{item.sub}</p>
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
