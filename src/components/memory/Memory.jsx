import React from "react";
import "./memory.css";
import memory__1 from "../../assets/reflexo__memory.jpg";
function Memory() {
  return (
    <section id="memory">
      <div className="content memory__general">
        <h2>
          Libération de Mémoires Emotionnelles de naissance et de vie
          intra-utérine{" "}
        </h2>

        <div className="acc__content">
          <p>
          Par un toucher très subtil sur la zone représentant la colonne vertébrale, cette technique de rééquilibrage énergétique permet de libérer des blocages psycho-énergétiques rendant possible la libre circulation de l’énergie dans le corps en particulier au niveau des méridiens.
          </p>
          <p>
          Un entretien oral permet de définir les mémoires à aller revisiter lors de la séance guidée oralement.
          </p>
          <p>
          Le travail en réflexologie plantaire est effectué avant ou après cette séance pour accompagner cette libération de mémoires. Par ailleurs ce travail en réflexologie sera très utile lorsqu’il aura des fausses-couches, après la naissance, pour soutenir les problématiques des ces moments de vie (Post-partum,…)
          </p>
        </div>
          
      </div>
      <img src={memory__1} alt="" className="img__memory"/>
    </section>
  );
}

export default Memory;
