import React from "react";
import "./Knowledge.css";
import { LottyDisplay } from "../../Comonents/LottyDisplay/LottyDisplay";
import pro from "../../assets/lottie/pro.json";
import Fade from "react-reveal/Fade";
export const Knowledge = () => {
  const experience = [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
    {
      Stack: "Machine Learning and AI",
      progressPercentage: "60%",
    },
  ];

  return (
    <div className="knowledge_container">
      <Fade left>
        {" "}
        <div className="knowledgeBar">
          <h1 className="knowledgeBar_title">Knowledge Bar</h1>
          <Fade bottom>
            {" "}
            <div className="knowledge_lottie">
              <LottyDisplay animationData={pro} />
            </div>
          </Fade>
          {experience.map((exp, i) => {
            const expstyle = {
              width: exp.progressPercentage,
            };
            return (
              <div className="progressBarDIV">
                <p className="stack_name">{exp.Stack}</p>
                <div className="progressBar">
                  <span style={expstyle}></span>
                </div>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};
