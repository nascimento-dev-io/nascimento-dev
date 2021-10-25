import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";

import "./styles.css";
import CardProject from "../CardProject/CardProject";

const projects = [
  {
    name: "TODO App",
    tecnologies: ["React", "CSS", "Node", "NPM"],
    link: "https://todo-app-mu-sepia.vercel.app/",
    image:
      "https://ik.imagekit.io/Nscmnt/Personal/todo-app_pmdYUimPefT.png?updatedAt=1635092852968",
    description: "Aplicativo para gerenciar suas tarefas diárias",
  },
  {
    name: "InstaDog",
    tecnologies: ["React", "CSS", "Victory", "Node", "NPM"],
    link: "https://insta-dogs.vercel.app/",
    image:
      "https://ik.imagekit.io/Nscmnt/Personal/CPT2110011258-933x673_6sK_-F7NdN.png?updatedAt=1635092772356",
    description: "Aplicativo para mostrar seu Pet ao mundo.",
  },
  {
    name: "Pokedex",
    tecnologies: ["JS", "CSS", "HTML", "PokeAPI"],
    link: "https://pokedex-omega-ten.vercel.app/",
    image:
      "https://ik.imagekit.io/Nscmnt/Personal/CPT2110251508-1317x584_wRB4Omc4i.png?updatedAt=1635185368333",
    description: "Aplicativo PokeDex construido em Vanilla JS.",
  },
  {
    name: "Typing",
    tecnologies: ["React", "CSS"],
    link: "https://react-projects-ashy.vercel.app/",
    image:
      "https://ik.imagekit.io/Nscmnt/Personal/CPT2110251517-1313x466_CkL3_gnJF.png?updatedAt=1635185851696",
    description: "Aplicativo para treinar digitação.",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <HeaderSection>Projetos</HeaderSection>
      <div className="projects">
        {projects.map((project, i) => (
          <CardProject key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
