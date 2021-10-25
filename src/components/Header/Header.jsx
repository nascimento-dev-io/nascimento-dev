import React from "react";
import { FaTimes } from "react-icons/fa";
import useMedia from "../../hooks/useMedia";
import "./index.css";

const Header = () => {
  const [mobile, setMobile] = React.useState(false);
  const widthMobile = useMedia("(max-width: 850px)");

  function handleClick() {
    setMobile(!mobile);
  }

  function handleClickMobile() {
    if (widthMobile) {
      setMobile(false);
    }
  }

  return (
    <header>
      <a href="#hero" className="logo pulse">
        {" "}
        <span>{"< "}</span> <span>J</span> <span>o</span>
        <span>r</span> <span>g</span> <span>e</span> <span></span>{" "}
        <span>N</span> <span>a</span>
        <span>s</span>
        <span>c</span>
        <span>i</span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
        <span>o</span>
        <span>{" />"}</span>
      </a>

      <div onClick={handleClick} className="mobile-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav
        onTouchMove={() => setMobile(false)}
        onClick={handleClickMobile}
        className={`menu ${mobile ? "mobile" : ""}`}
      >
        {" "}
        <ul className=" fade-in-to-left">
          {mobile && (
            <div className="close">
              <span onClick={handleClick}>
                {" "}
                <FaTimes />
              </span>
            </div>
          )}

          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
