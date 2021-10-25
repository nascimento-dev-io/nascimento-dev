import React from "react";
import "./styles.css";

const TechSkill = ({ name, url, image, color }) => {
  return (
    <a className="tech" href={url}>
      <span
        className="tech-title"
        style={{
          textShadow: `0 0 2px ${color}`,
        }}
      >
        {name}
      </span>
      <div className="tech-image" style={{ color: `${color}` }}>
        {image}
      </div>
    </a>
  );
};

export default TechSkill;
