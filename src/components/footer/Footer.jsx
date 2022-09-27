import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__general content">
        <ul className="permalinks">
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#reflexiologie">Réflexiologie</a>
          </li>
          <li>
            <a href="#memory">Mémoires emotionnelles</a>
          </li>
          <li>
            <a href="#massages">Massages</a>
          </li>
          <li>
            <a href="#ht">Horraires - Tarifs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/laurence-descat-5bab12201/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100011590411183"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/reflexo_massagesensitif_ld73/?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Geoffrey LUSITANO. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
