import React from "react";
import "./styles.css";

const HeaderSection = ({ children }) => {
  return (
    <h2 className="title">
      <span className="dot pulse"></span>
      {children}
    </h2>
  );
};

export default HeaderSection;
