import React from "react";
import "./about.css";
import ME from "../../assets/moi.jpg";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const about = () => {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__general">
          <div className="about__picture">
            <img src={ME} alt="" />
          </div>
          <div className="about__content content">
            <h2>Réflexologue - Masseuse
            <span></span>
            </h2>
            
            <div className="content__text">
              <p>
              Je me suis formée à la Réflexologie à la suite de l’intérêt que les médecines douces ou alternatives représentaient pour mes propres problématiques de santé depuis de nombreuses années. Avec le temps j’ai augmenté mes connaissances et je ne cesse de les enrichir dès que j’en ai l’occasion. 
              </p>
              <p>
              Les différentes formations certifiantes que j’ai suivi en Réflexologie ont élargi mes compétences et me permettent d’accompagner différentes pathologies en complément de la médecine et avec accord des médecins, c’est pourquoi je propose des séances spécifiques pour certaines maladies (Alzheimer, Parkinson, Cancers, Fibromyalgie, Endométriose) et pour la Périnatalité.
              </p>
              <p>
              J’ai également fait le choix d’apporter plus de détente en me formant au Massage Sensitif de Bien Être ®, la découverte du Shiatsu et des huiles essentielles.
              </p>
              <p>
              Mon objectif, par les différentes prestations que je vous propose, est de vous procurer la séance la plus adaptée à vos besoins.
              </p>
              <div className="content__text__bottom">
                <div className="socialNetwork">
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
                <div className="contactBtn">
                  <a href="#contact" className="btn">
                    Prendre rdv
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
