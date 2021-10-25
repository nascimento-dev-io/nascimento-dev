import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import "./styles.css";

import { FaHtml5, FaCss3Alt, FaJs, FaGitSquare, FaReact } from "react-icons/fa";
import TechSkill from "../TechSkill/TechSkill";

const Skill = () => {
  return (
    <section id="skill">
      <HeaderSection>Tecnologias</HeaderSection>
      <nav>
        <ul>
          <li>
            <TechSkill
              name="HTML"
              url="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              image={<FaHtml5 />}
              color="#E44D26"
            />
          </li>
          <li>
            <TechSkill
              name="CSS"
              url="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              image={<FaCss3Alt />}
              color="#0069BA"
            />
          </li>

          <li>
            <TechSkill
              name="JS"
              url="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              image={<FaJs />}
              color="#EAD41C"
            />
          </li>
          <li>
            <TechSkill
              name="Git"
              url="https://git-scm.com/docs/git/pt_BR"
              image={<FaGitSquare />}
              color="#F44D27"
            />
          </li>

          <li>
            <TechSkill
              name="React"
              url="https://pt-br.reactjs.org/docs/getting-started.html"
              image={<FaReact />}
              color="#61DAFB"
            />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Skill;
