import React from "react";
import "./reflexiology.css";
import general from "../../assets/reflexo__general.jpg";
import acc from "../../assets/reflexo__acc.jpg";
import perinatale from "../../assets/reflexo__perinatale.jpg";
import shiatsu from "../../assets/reflexo__shiatsu.jpg";
function Reflexiology() {
  return (
    <section id="reflexiology">
      <h2>La réflexologie c’est quoi ?</h2>
      <div className="types">
        <h3>Réflexologie plantaire</h3>
        <h3>Médecine Traditionnelle Chinoise</h3>
        <h3>Palmaire</h3>
        <h3>Visage Dien Cham et Oreilles</h3>
      </div>
      <div className="reflexiology__general">
        <img src={general} alt="" />

        <div className="general__content">
          <h3>Comment ça fonctionne ?</h3>
          <p>
            En séance de réflexologie j’utilise la représentation de chaque
            organe ou partie du corps au niveau du pied, des mains, du visage,
            des oreilles ou du crâne et par des stimulations manuelles de ces
            différentes zones, je cherche à amener ou ramener un état
            d’équilibre dans le corps, physiologiquement, nerveusement et
            mentalement. Le choix de la zone sur laquelle je travaillerais
            dépendra de ce qui sera le plus approprié.
          </p>
          <p>
            L’ajout de la médecine traditionnelle chinoise a pour intérêt de
            maintenir plus durablement les effets d’amélioration des séances.
          </p>
          <p>
            L’objectif ou les objectifs sont divers et chacun sera
            potentiellement réceptif à cette technique.
          </p>
          <p>
            Il s’agit d’un acte préventif pour apporter un état d’équilibre au
            corps lors des changements de saison ou d’évènements tout comme il
            peut accompagner un traitement médical sous les réserves d’usage.
          </p>
        </div>
      </div>
      <div className="reflexiology__a">
        <div className="acc__content">
          <h2>Accompagnements specifiques</h2>
          <p>
            Des séances adaptées à vos pathologies (Alzheimer, Parkinson,
            Cancers, Fibromyalgie, Endométriose) ou différentes zones du corps
            seront massées, stimulées, afin de réduire certaines problématiques,
            certains effets à la maladie ou aux traitements, afin de gagner une
            meilleure qualité de vie et plus de bien-être au quotidien.
          </p>
        </div>
        <img
          src={acc}
          alt="séances adaptées à vos pathologies"
          className="img__a"
        />
      </div>
      <div className="reflexiology__b">
        <div className="acc__content">
          <h2>Réflexologie Périnatale</h2>
          <p>
            La Réflexologie Périnatale permet d’accompagner dans les meilleures
            conditions les femmes dans leurs expériences de grossesse
            (présentes, passées et futures) par un accompagnement en
            Réflexologie et Psycho-émotionnel.
          </p>
          <p>
            Un travail effectué sur une femme enceinte sera différent et adapté,
            par sécurité de son état, tout comme lors de traitements et de
            protocoles (PMA, Don d’ovocyte, IVG/IMG,…) en respect et
            bienveillance pour la futur maman et avec accord du corps médical.
          </p>
          <p>
            Un travail pour les papas est également proposé car les difficultés
            rencontrées lors de parcours PMA ou de simples difficultés à devenir
            parents ne concerne pas toujours que les femmes.
          </p>
        </div>
        <img src={perinatale} alt="" className="img__a" />
      </div>
      <div className="reflexiology__a">
        <div className="acc__content">
          <h2>Massage Shiatsu</h2>
          <p>
            Par des pressions effectuées manuellement sur le corps sur le trajet
            de méridiens afin de réguler les points bloqués ou ayant besoin
            d’être stimulés afin de libérer la circulation de l’énergie.
          </p>
        </div>
        <img src={shiatsu} alt="" className="img__a" />
      </div>
    </section>
  );
}

export default Reflexiology;
