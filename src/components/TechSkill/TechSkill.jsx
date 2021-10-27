import React from "react";
import "./styles.css";

const TechSkill = ({ skill, delay }) => {
  const { name, url, image, color } = skill;

  return (
    <li
      className="tech fade-in-to-left"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <span
          className="tech-title"
          style={{
            color: "white",
            textShadow: `0 0 2px ${color}`,
          }}
        >
          {name}
        </span>
        <div className="tech-image" style={{ color: `${color}` }}>
          {image}
        </div>
      </a>
    </li>
  );
};

export default TechSkill;
