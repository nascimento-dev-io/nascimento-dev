import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <FaCopyright /> {year} Jorge Nascimento
      </div>
    </footer>
  );
};

export default Footer;
