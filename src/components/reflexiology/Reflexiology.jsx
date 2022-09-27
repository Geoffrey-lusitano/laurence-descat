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
          <h3>
            Réflexologie plantaire Médecine Traditionnelle Chinoise, Palmaire,
            Visage Dien Cham et Oreilles{" "}
          </h3>
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
      <div className="content reflexiology__acc">
        <div className="reflexiology__acc__general content">
          <h2>Accompagnement specifique</h2>
          <div className="reflexiology__picture">
            <img src={acc} alt="" />
          </div>
          <div className="acc__content">
            <p>
              La séance de réflexologie est adaptée à la pathologie (Alzheimer,
              Parkinson, Cancers, Fibromyalgie, Endométriose) et différentes
              zones du corps seront massés afin de réduits certains effets liés
              à la maladie ou des traitements afin de gagner une meilleure
              qualité de vie et plus de bien-être au quotidien.
            </p>
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
          <p>
            La réflexologie périnatale permet d’accompagner dans les meilleures
            conditions les femmes dans leurs expériences de grossesse,
            présentes, passées et futures par un accompagnement Réflexologique
            et Psycho-émotionnel.
          </p>
          <p>
            Pour un travail effectué sur une femme enceinte : il sera différent
            et adapté par sécurité à son état tout comme lors de traitement et
            de protocoles de parcours (PMA, Don d’ovocyte, IVG/IMG,…) en
            respect, bienveillance pour la futur maman et avec accord du corps
            médical.
          </p>
          <p>
            Un travail pour les papas est également proposé car les difficultés
            rencontrées lors de parcours PMA ou de simples difficultés à devenir
            parents ne concerne pas toujours que les femmes.
          </p>
        </div>
      </div>
      <div className="content reflexiology__shiatsu">
        <h2>Massage Shiatsu</h2>
        <div className="reflexiology__picture">
          <img src={shiatsu} alt="" />
        </div>
        <div className="acc__content">
          <p>
            Par des pressions effectuées manuellement sur le corps sur le trajet
            de méridiens afin de réguler les points bloqués ou ayant besoin
            d’être stimulés afin de libérer la circulation de l’énergie.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reflexiology;
