import React, { useContext } from "react";
import StyleContext from "../../Context/StyleContext";
import Fade from "react-reveal/Fade";
import emoji from "react-easy-emoji";
import { SocialMedia } from "../../Comonents/SocialMedia/SocialMedia";
import { Button } from "../../Comonents/Button/Button";
import { LottyDisplay } from "../../Comonents/LottyDisplay/LottyDisplay";
import coder from "../../assets/lottie/coder.json";
import coder2 from "../../assets/lottie/coder2.json";
import "./Test.css";
export const Test = () => {
  const { isDark } = useContext(StyleContext);
  console.log(isDark);
  return (
    <div className="home">
      <Fade bottom duration={1000} distance="40px">
        <div className="homeScreen" id="homescreen">
          <div className="homescreen_contentdiv testcont">
            <>
              <h1
                className={isDark ? "dark_mode greeting_text" : "greeting_text"}
              >
                Hii, am Arun <span className="wave_emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting_ptext"
                    : "greeting_ptext subTitile"
                }
              >
                A passionate Engineer with a result-driven mindset and
                Enthusiasm to learn New things
              </p>
              {/* <p className="joinme">Join With Me on</p> */}
              {/* <SocialMedia /> */}
              {/* <div className="button_greeting_div">
                <Button text="Contact me" href="#contactme" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={""}
                  onclick={true}
                />
              </div> */}
            </>
          </div>
          <div className="homescreen_imagediv">
            <LottyDisplay animationData={coder2} />
          </div>
        </div>
      </Fade>
    </div>
  );
};
