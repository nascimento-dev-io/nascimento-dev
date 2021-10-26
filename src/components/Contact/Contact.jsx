import React, { useRef, useState, useContext, useEffect } from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { ScrollContext } from "../../Context";

import "./styles.css";

const Contact = () => {
  const refSectionContact = useRef();
  const scrollHeight = useContext(ScrollContext);
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    const animation = refSectionContact.current.getBoundingClientRect().top;
    if (animation < 400) setAnime(true);
  }, [scrollHeight]);
  return (
    <section ref={refSectionContact} id="contact">
      <HeaderSection>Contato</HeaderSection>
      {anime && (
        <div className="contact-wrapper">
          <p>Me sigam nas redes sociais / Me mande uma mensagem.</p>

          <div className="contacts">
            <div
              className="whatsapp fade-in-to-left"
              style={{
                animationDelay: "100ms",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=11952454464"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>

            <div
              className="linkdin fade-in-to-left"
              style={{
                animationDelay: "200ms",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/linkdin-nascimento"
              >
                <FaLinkedinIn /> Linkedin
              </a>
            </div>

            <div
              className="github fade-in-to-left"
              style={{
                animationDelay: "300ms",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Nscmnt"
              >
                <FaGithub /> Github
              </a>
            </div>

            <div
              className="email fade-in-to-left"
              style={{
                animationDelay: "400ms",
              }}
            >
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
      )}
    </section>
  );
};

export default Contact;
