import React, { useContext, useEffect, useState, useRef } from "react";
import { FaRegEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { ScrollContext } from "../../Context";
import HeaderSection from "../HeaderSection/HeaderSection";
import "./index.css";

const About = () => {
  const age = new Date().getFullYear() - 1990;
  const refSectionAbout = useRef();
  const scrollHeight = useContext(ScrollContext);
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const animation = refSectionAbout.current.getBoundingClientRect().top;
    if (animation < 400) {
      setAnime(true);
    }
  }, [scrollHeight]);

  return (
    <section id="about" ref={refSectionAbout}>
      <HeaderSection>Sobre</HeaderSection>
      <div className="about-content-wrapper">
        <div className={`about-card ${anime ? "fade-in-to-left" : ""}`}>
          <div className="card">
            <div className="image"></div>
            <p>Jorge Nascimento</p>
            <div className="social-media">
              {" "}
              <a
                href="mailto:nascimento.dev.io@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaRegEnvelope />{" "}
              </a>
              <a
                href="https://www.github.com/Nscmnt"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jorge-nascimento-a465511ab/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className={`about-content ${anime ? "fade-in-to-right" : ""}`}>
          <h3>Conheça um pouco sobre mim</h3>
          <p>
            Olá, me chamo Jorge Nascimento, tenho {age} anos e moro em São
            Paulo, sou desenvolvedor front-end em formação, buscando evoluir
            todos os dias estudando a stack voltada para as tecnologias como
            React, React-DOM, Styled Components, Context API, entre outras do
            ecosistema React.
          </p>
          <p>
            Além de tecnologia busco aprimorar minhas soft skill como
            comunicação, colaboração, empatia e planejamento, e nas horas vagas
            gosto de violão, series e café.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
