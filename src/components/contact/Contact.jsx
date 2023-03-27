import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { SiGotomeeting } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h2> Contactez-moi</h2>
      <div className="contact__general">
        
        <div className="contact__content">
          <MdOutlineEmail className="contact__icon" />
          <h4>Email</h4>
          <h5>info@laurence-descat-reflexologue.fr</h5>
          <a
            href="mailto:info@laurence-descat-reflexologue.fr"
            target="_blank"
            rel="noreferrer"
          >
            Envoyer un message
          </a>
        </div>
        <div className="contact__content">
          <BsWhatsapp className="contact__icon" />
          <h4>WhatsApp</h4>
          <h5>+33 6 79 67 75 98</h5>
          <a
            href="https://api.whatsapp.com/send?phone=33679677598"
            target="_blank"
            rel="noreferrer"
          >
            Envoyer un sms
          </a>
        </div>
        <div className="contact__content">
          <SiGotomeeting className="contact__icon" />
          <h4>Connectilib</h4>
          <h5>LAURENCE DESCAT EI</h5>
          <a
            href="https://connectilib.fr/profil-professionnel/laurence-descat-ei"
            target="_blank"
            rel="noreferrer"
          >
            Prendre rdv en ligne
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
