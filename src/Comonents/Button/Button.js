import { raf } from "react-reveal/globals";
import pdfFile from "./ARUN KRISHNAN P P-MS.pdf";
import React from "react";
import "./Button.css";

export const Button = ({ text, className, href, newTab, onclick }) => {
  const clicked = (event) => {
    event.preventDefault();
    window.open(pdfFile);
  };
  return (
    <div className={className}>
      <a
        className="main-button"
        href={onclick ? null : href}
        target={newTab && "_blank"}
        onClick={newTab && clicked}
      >
        {text}
      </a>
    </div>
  );
};
