import React from "react";
import memory__1 from "../../assets/reflexo__memory.jpg";
function Memory() {
  return (
    <section id="memory">
      <div className="content memory__general">
      <h2>Libération de Mémoires Emotionnelles de naissance et de vie intra-utérine </h2>

        
        <div className="acc__content">
          <p>Le pied est pour moi mon support de travail afin d’aller libérer corps et esprit des mémoires cristallisées dans les tissus.</p>
          <p>Qu’il s’agisse de problèmes chroniques, aigus, d’émotions débordantes que vous n’arrivez plus à maîtriser ou dont vous vous passeriez bien, de douleurs “inexpliquées” pour lesquelles physiologiquement aucune explication n’est trouvée, de parcours de maternité compliqué (PMA, Don d’ovocyte, IVG/IMG, Perte,…), ou de freins persistants malgré vos efforts effrénés, si nous y cherchions un sens et allégions votre démarche ?</p>
          <div className="">
            <h3>Séance de libération </h3>
            <p>de mémoires émotionnelles par un accompagnement oral, basé sur un entretien préalable cette séance permet de définir les mémoires à aller revisiter lors de la séance guidée oralement.</p>
            <h3> Séance de réflexologie </h3>
            <p>pour accompagner cette libération de mémoires, un travail de réflexologie plantaire est effectué avant ou après la séance.</p>
          </div>
        </div>
        <div className="about__picture">
          <img src={memory__1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Memory;
