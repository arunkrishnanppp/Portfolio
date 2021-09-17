import { raf } from "react-reveal/globals";

import React, { useContext } from "react";
import { LottyDisplay } from "../../Comonents/LottyDisplay/LottyDisplay";
import book from "../../assets/lottie/book.json";
import logo from "../../assets/lottie/logo.png";
import "./Education.css";
import StyleContext from "../../Context/StyleContext";

export const Education = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <div className="education_class" id="education">
      <h1>Education</h1>
      <div className={isDark ? "darkdiv ed_div " : "ed_div"}>
        <div className="logodiv">
          <img src={logo} />
        </div>
        <div className="lotty">
          <LottyDisplay animationData={book} />
        </div>

        <div className="details">
          <h1>Btech Computer Science</h1>

          <h2>Governemnt Engineering College Wayanad</h2>

          <h3>Kerala Technologoical Univericut</h3>
        </div>
      </div>
    </div>
  );
};
