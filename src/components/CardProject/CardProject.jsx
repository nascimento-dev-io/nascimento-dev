import React from "react";
import "./styles.css";

const CardProject = ({ project }) => {
  const [anime, setAnime] = React.useState(false);

  const { name, tecnologies, link, image, description } = project;

  function handleClick() {
    setAnime(!anime);
  }

  return (
    <div className="card-wrapper fade-in-to-left">
      <div
        className={`card-back ${!anime ? "anime" : ""}`}
        onMouseLeave={handleClick}
        onTouchEnd={handleClick}
      >
        <div className="technoligies">
          <h5>Tecnologias utilizadas</h5>
          <ul className="tech-tags">
            {tecnologies.slice(0, 8).map((tech, i) => {
              return (
                <li className="tag" key={i}>
                  {tech}
                </li>
              );
            })}
          </ul>
          <hr />
        </div>

        <button className="card-button">
          <a href={link} target="_blank" rel="noreferrer">
            Acessar
          </a>
        </button>
      </div>

      <div className={`card-front ${anime ? "anime" : ""}`}>
        <div className="card-image">
          <img src={image} alt="Project" />
        </div>
        <div className="card-content">
          <h5>{name}</h5>
          <p>{description}</p>
        </div>

        <button onClick={handleClick} className="card-button">
          Mais Detalhes
        </button>
      </div>
    </div>
  );
};

export default CardProject;
