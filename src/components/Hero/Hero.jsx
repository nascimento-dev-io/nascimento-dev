import React from "react";
import bgHero from "../../assets/images/developer.svg";

import "./index.css";

const Hero = () => {
  return (
    <main id="hero" className="hero-content">
      <div className="content-wrapper">
        <div>
          <div className="hero-description fade-in-to-left">
            <h3>DESENVOLVEDOR FRONT-END</h3>
            <h1>Jorge Nascimento</h1>
            <p>
              Desenvolvedor frontEnd, apaixonado por tecnologia, estudante de
              Sistemas Web, sempre em busca do próximo nível!
            </p>

            <a href={bgHero} download className="curriculum">
              BAIXAR CURRICULO
            </a>
          </div>
        </div>

        <div className="bg-hero fade-in-to-right">
          <img src={bgHero} alt="background developer" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
