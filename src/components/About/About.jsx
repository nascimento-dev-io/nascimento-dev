import React from "react";
import { FaRegEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import HeaderSection from "../HeaderSection/HeaderSection";
import "./index.css";

const About = () => {
  const age = new Date().getFullYear() - 1989;
  return (
    <section id="about">
      <HeaderSection>Sobre</HeaderSection>
      <div className="about-content-wrapper">
        <div className="about-card">
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
        <div className="about-content">
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
