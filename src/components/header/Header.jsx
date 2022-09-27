import React from "react";
import "./header.css";

import ImageSlider from './ImageSlider'
import image1 from '../../assets/carou__1.jpg'
import image2 from '../../assets/carou__2.jpg'
import image3 from '../../assets/carou__3.jpg'
import image4 from '../../assets/carou__4.jpg'
import logo from '../../assets/logo.png'

function Header() {
  const slides = [
    {url: image1 , title: 'IMage1'},
    {url: image2 , title: 'IMage2'},
    {url: image3 , title: 'IMage3'},
    {url: image4 , title: 'IMage4'},
  ];
  return (
    <section id="home">
      <div className="header__content">
        <div className="header__carousel">
          <div className="carousel__title">
            <img src={logo} alt="" />
            <h1>LAURENCE DESCAT</h1>
          </div>
          <div  className="carrousel__content" >
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
}



export default Header;
