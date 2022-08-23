import React from 'react'
import "./about.css";
import ME from "../../assets/moi.jpg";
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const about = () => {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__picture">
          <img src={ME} alt="" />
        </div>
        <div className="about__content">
          <h1>Laurence Descat</h1>
          <h2>Réflexologue</h2>
          <h2>Masseuse</h2>
          <div className="content__text">
            <p>
              AUJOURD’HUI, grâce aux connaissances acquises avec des formations
              et via mes expériences de vie, je réponds enfin à ce besoin
              profond et presque viscéral que j’ai en moi depuis mon plus jeune
              âge de vouloir aider et accompagner les autres ! Je souhaite
              transmettre ma vision des choses, en respectant le corps et
              l’intégrité physique, en toute bienveillance, dans la douceur et
              l’harmonie. Faire que chaque séance de réflexologie plantaire, de
              massage taoiste du ventre ou de pratique de yoga kundalini soit un
              moment pour vous, un moment à part permettant de vous révéler à
              vous-mêmes et de devenir l’auteur de votre propre santé.
            </p>
            <div className="content__text__bottom">
              <div className="socialNetwork">
                  <a href="https://www.linkedin.com/in/geo-lusi/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
                  <a href="https://github.com/Geoffrey-lusitano" target="_blank" rel="noreferrer"><BsFacebook/></a>
                  <a href="https://github.com/Geoffrey-lusitano" target="_blank" rel="noreferrer"><BsInstagram/></a>
              </div>
              <a href="#contact" className="btn">Prendre rdv</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default about