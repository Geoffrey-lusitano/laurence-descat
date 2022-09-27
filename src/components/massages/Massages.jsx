import React from "react";
import massages__1 from "../../assets/massages__1.jpg";
import massages__2 from "../../assets/massages__2.jpg";
import massages__3 from "../../assets/massages__3.jpg";
const Massages = () => {
  return (
    <section id="massages">
      <div className="content massages__assis">
        <h2>Massage Sensitif de Bien Etre ®</h2>
        <div className="reflexiology__picture">
          <img src={massages__1} alt="" />
        </div>
        <div className="acc__content">
          <p>Ce massage est effectué avec une écoute et un accompagnement très personnalisé afin qu’une détente profonde soit possible. Un massage pouvant être reçu habillé ou à l’huile, qui offre la possibilité d’écouter ces propres besoins pendant le massage et permet une évolution de soi pendant et après le massage.</p>
        </div>
      </div>
      <div className="content massages__assis">
        

        <h2>Massage Sensitif de Bien Etre ® Assis</h2>
        <div className="acc__content">
          <p>Le massage assis permet à des personnes de découvrir le massage et d’être proposé aux personnes plus sensibles et moins aptes à s’allonger sur une table de massage. Il se reçoit habillé, sur chaise (ordinaire) ou tabouret pour une liberté de mouvement.</p>
        </div>
        <h2>Massage Sensitif de Bien Etre ® du ventre</h2>
        <div className="acc__content">
          <p>Le massage du ventre peut se recevoir uniquement sur cette zone ou intégré lors du massage corporel. Il s’agit d’aller visiter cette zone plus amplement pour libérer les toxines de la peau et des organes par divers mouvements.</p>
        </div>
        <div className="about__picture">
          <img src={massages__2} alt="" />
        </div>
      </div>
      <div className="content massages__assis">

        <h2>Massage du dos Aromatouch</h2>
        <div className="acc__content">
          <p>Le Massage Aromatouch du dos ou des mains aux huiles essentielles : Ce massage au cours duquel une application d’huiles essentielles est effectuée sur la colonne vertébrale et les pieds en même temps que des gestes de massages, aide à favoriser un état d’équilibre et un fonctionnement normal du corps. Un entretien préalable permet de connaître les éventuelles contre-indications à l’usage d’huiles essentielles et dans ce cas le massage est adapté.</p>
        </div>
        <h2>Massage des mains Aromatouch</h2>
        <div className="acc__content">
          <p>Les mains seules peuvent être massées et il s’adresse donc en une découverte possible du massage aux huiles essentielles pour les non-initiés ainsi qu’aux personnes ne pouvant recevoir de massage corporel.</p>
        </div>
        <div className="reflexiology__picture">
          <img src={massages__3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Massages;
