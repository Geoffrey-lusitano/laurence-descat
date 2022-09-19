import React from "react";
import massages__1 from "../../assets/massages__1.jpg";
import massages__2 from "../../assets/massages__2.jpg";
import massages__3 from "../../assets/massages__3.jpg";
const Massages = () => {
  return (
    <section id="massages">
      <div className="content massages__assis">
        <h2>Massage Sensitif de Bien Etre ®</h2>
        <div className="about__picture">
          <img src={massages__1} alt="" />
        </div>
        <div className="acc__content">
          <p>..................................</p>
        </div>
      </div>
      <div className="content massages__assis">
        

        <h2>Massage Sensitif de Bien Etre ® Assis</h2>
        <div className="acc__content">
          <p>..................................</p>
        </div>
        <h2>Massage Sensitif de Bien Etre ® du ventre</h2>
        <div className="acc__content">
          <p>..................................</p>
        </div>
        <div className="about__picture">
          <img src={massages__2} alt="" />
        </div>
      </div>
      <div className="content massages__assis">

        <h2>Massage du dos Aromatouch</h2>
        <div className="acc__content">
          <p>..................................</p>
        </div>
        <h2>Massage des mains Aromatouch</h2>
        <div className="acc__content">
          <p>..................................</p>
        </div>
        <div className="about__picture">
          <img src={massages__3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Massages;
