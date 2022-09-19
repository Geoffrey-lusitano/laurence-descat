import React from "react";
import "./reflexiology.css";
import general from "../../assets/reflexo__general.jpg";
import acc from "../../assets/reflexo__acc.jpg";
import memory from "../../assets/reflexo__memory.jpg";
import perinatale from "../../assets/reflexo__perinatale.jpg";
import shiatsu from "../../assets/reflexo__shiatsu.jpg";
function Reflexiology() {
  return (
    <section id="reflexiology">
      <div className="content reflexiology__general">
        <h2>La réflexologie c’est quoi ?</h2>
        <h3>Comment ça fonctionne ?</h3>
        <div className="reflexiology__picture">
          <img src={general} alt="" />
        </div>
        <div className="content general__content">
          <p>
            Il s’agit d’une technique manuelle qui agit par pression sur les
            zones réflexes du corps, et qui va transmettre une information par
            les terminaisons nerveuses aux organes. Ceux-ci vont pourvoir
            rétablir leur équilibre (l’homéostasie).
          </p>
          <p>
            C’est une forme d’acupressure qui apporte des améliorations
            physiologiques, nerveuses et mentales.
          </p>
          <h3>La Médecine Traditionnelle Chinoise</h3>
          <p>
            L’ajout de cette technique est de pouvoir maintenir plus durablement
            les effets d’amélioration des séances….
          </p>
        </div>
      </div>
      <div className="content reflexiology__acc">
        <div className="reflexiology__acc__general content">
        <h2>Accompagnement specifique</h2>
        <div className="reflexiology__picture">
          <img src={acc} alt="" />
        </div>
        <div className="acc__content">
          <p>Parkinson, Alzheimer, Cancers, Fibromyalgie, Endométriose</p>
        </div>
        </div>
        
      </div>
      <div className="content reflexiology__memory">
        <h2>
          Libération de Mémoires Emotionnelles de naissance et de vie
          intra-utérine{" "}
        </h2>
        <div className="reflexiology__picture">
          <img src={memory} alt="" />
        </div>
        <div className="acc__content">
          <p>
            Le pied est pour moi mon support de travail afin d’aller libérer
            corps et esprit des mémoires cristallisées dans les tissus.
          </p>
          <p>
            Qu’il s’agisse de problèmes chroniques, aigus, d’émotions
            débordantes que vous n’arrivez plus à maîtriser ou dont vous vous
            passeriez bien, de douleurs “inexpliquées” pour lesquelles
            physiologiquement aucune explication n’est trouvée, de parcours de
            maternité compliqué (PMA, Don d’ovocyte, IVG/IMG, Perte,…), ou de
            freins persistants malgré vos efforts effrénés, si nous y cherchions
            un sens et allégions votre démarche ?
          </p>
        </div>
      </div>
      <div className="content reflexiology__perinatal">
        <h2>Réflexologie Périnatale </h2>
        <div className="reflexiology__picture">
          <img src={perinatale} alt="" />
        </div>
        <div className="acc__content">
          <p>La réflexologie périnatale©  permet d’accompagner dans les meilleures conditions les femmes dans leurs expériences de grossesse, présentes, passées ou à venir, par un accompagnement réflexologique et psycho-émotionnel.</p>
          <p>Des séances qui préparent le corps et l’émotion des futurs parents qui viendront conforter les émotions avant, pendant et après grossesse. Des séances qui seront les bienvenues pour l’après naissance, pour soutenir les problématiques de ces moments de vie (Post-partum,……</p>
        </div>
      </div>
      <div className="content reflexiology__shiatsu">
        <h2>Massage Shiatsu</h2>
        <div className="reflexiology__picture">
          <img src={shiatsu} alt="" />
        </div>
        <div className="acc__content">
          <p>Blaaaaaaaa blaaaaaaaaaa</p>
        </div>
      </div>
    </section>
  );
}

export default Reflexiology;
