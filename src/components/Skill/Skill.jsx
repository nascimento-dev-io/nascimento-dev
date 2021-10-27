import React, { useState, useContext, useEffect, useRef } from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import "./styles.css";

import { FaHtml5, FaCss3Alt, FaJs, FaGitSquare, FaReact } from "react-icons/fa";
import TechSkill from "../TechSkill/TechSkill";
import { ScrollContext } from "../../Context";

const Skills = [
  {
    id: 123,
    name: "HTML",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    color: "#E44D26",
    image: <FaHtml5 />,
  },
  {
    id: 234,
    name: "CSS",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    color: "#0069BA",
    image: <FaCss3Alt />,
  },
  {
    id: 345,
    name: "JS",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    color: "#EAD41C",
    image: <FaJs />,
  },
  {
    id: 456,
    name: "React",
    url: "https://pt-br.reactjs.org/docs/getting-started.html",
    color: "#61DAFB",
    image: <FaReact />,
  },
  {
    id: 567,
    name: "Git",
    url: "https://git-scm.com/docs/git/pt_BR",
    color: "#F44D27",
    image: <FaGitSquare />,
  },
];

const Skill = () => {
  const refSectionSkill = useRef();
  const scrollHeight = useContext(ScrollContext);
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    const animation = refSectionSkill.current.getBoundingClientRect().top;
    if (animation < 400) setAnime(true);
  }, [scrollHeight]);

  return (
    <section id="skill" ref={refSectionSkill}>
      <HeaderSection>Tecnologias</HeaderSection>
      <nav>
        {anime && (
          <ul>
            {Skills.map((skill, index) => (
              <TechSkill key={skill.id} skill={skill} delay={100 * index} />
            ))}
          </ul>
        )}
      </nav>
    </section>
  );
};

export default Skill;
