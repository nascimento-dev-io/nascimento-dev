import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaSmileWink,
  FaWhatsapp,
} from "react-icons/fa";

import "./styles.css";

const Contact = () => {
  return (
    <section id="contact">
      <HeaderSection>Contato</HeaderSection>
      <div className="contact-wrapper">
        <p>Me sigam nas redes sociais / Me mande uma mensagem.</p>

        <div className="contacts">
          <div className="whatsapp">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=11952454464"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          <div className="linkdin">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bit.ly/linkdin-nascimento"
            >
              <FaLinkedinIn /> Linkedin
            </a>
          </div>

          <div className="github">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Nscmnt"
            >
              <FaGithub /> Github
            </a>
          </div>

          <div className="email">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:nascimento.dev.io@gmail.com"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
