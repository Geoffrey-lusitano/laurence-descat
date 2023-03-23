import React, {useState} from "react";
import "./ht.css";
import { ImPriceTag } from "react-icons/im";
import { GiDuration } from "react-icons/gi";
const reflexotherapie = [
  {
    id: 1,
    name: "Périnatalité (du désir à l'accompagnement de la grossesse)",
    duration: "1h00",
    price: "55,00€",
    description:
      "Séance d'accompagnement aux problématiques des femmes étant en désir de grossesse, étant enceinte, en préparation de l'accouchement ou après accouchement. Séance agissant sur les problématiques physiques sur la détente et proposition de Réflexo-Analyse pour des séances de Libération de mémoires émotionnelles si besoin.",
  },
  {
    id: 2,
    name: "Libération de mémoires émotionnelles de vie prénatale & de naissance",
    duration: "1h00",
    price: "55,00€",
    description:
      "Séance permettant d'identifier les mémoires émotionnelles engendrantdes émotions, des ressentis, des sensations plus ou moins agréables voir très gênantes dans sa vie d'adulte, pour se libérer de cesémotions et croyances. Séance commençant par un entretien puis une séance de revisualisation guidée oralement.",
  },
];
const reflexologie = [
  {
    id: 1,
    name: "Découverte de la Réflexologie - 1er Rdv",
    duration: "1h00",
    price: "45,00 €",
    description: "Lors de ce rendez-vous découverte je vous expliquerai en quoi consiste mon travail. Le temps de la séance et la qualité de la prestation est identique à une séance normale.",
  },
  {
    id: 2,
    name: "Réflexologie selon MTC",
    duration: "1h00",
    price: "55,00 €",
    description: "Par des gestes précis, stimuler l’homéostasie pour une régulation naturelle des déséquilibres constatés, depuis les pieds 👣, les mains 🙌, les oreilles 👂🏻, la tête 💆🏻, le visage, la colonne,…",
  },
  {
    id: 3,
    name: "Accompagnements spécifiques ",
    duration: "1h00",
    price: "55,00 €",
    description: "(Parkinson, Alzheimer, Cancers,Fibromyalgie, Endométriose) Séance de réflexologie adaptée à la pathologie, exercée sur différents points du corps et trouvant son intérêt pour réduire certains effets liés à la maladie ou aux traitements afin de gagner une meilleure qualité de vie et plus de bien-être au quotidien.",
  },
  {
    id: 4,
    name: "Digitopresssion Shiatsu",
    duration: "1h00",
    price: "55,00 €",
    description: "Régulation de points sur le trajet de méridiens sur l'ensemble du corps par des pressions effectuées manuellement. Séance habillée, effectuée sur table de massage.",
  },
  {
    id: 5,
    name: "Réflexologie Enfants",
    duration: "1h00",
    price: "35,00 €",
    description: "            Le travail lors d’une séance pour les enfants est adapté à l’âge et au temps de massage qu’il pourra accepter.(le tarif étant adapté en fonction du temps passé). Des explications lui seront données selon son âge et sa compréhension. Un travail préalable sur les mains pourra lui montrer ce qui va être effectué sur ses pieds et l’utilisation de diverses méthodes est faite en accord avec les parents.",
  },
];

const massages = [
  {
    id: 1,
    name: "Massage Sensitif de Bien Être",
    duration: "1h00",
    price: "60,00 €",
    description: "Massage effectué avec une écoute et un accompagnement très personnalisé afin que le massé vive son massage et rentre dans une détente profonde. Un massage qui offre la possibilité d'écouter ses besoins pendant le massage et permet une évolution de soi pendant et après le massage. Massage s'adressant également aux personnes peu habituées au massage et pouvant être effectué habiller.",
  },
  {
    id: 2,
    name: "Massage Sensitif de Bien Être Assis",
    duration: "0h30",
    price: "35,00 €",
    description: "Le Massage Sensitif de Bien Etre Assis permet de proposer un massage aux personnes ayant des difficultés à s'allonger. Il s'adresse à tout le monde, y compris ceux qui veulent découvrir le massage assis sur chaise. Il peut s'effectuer sur votre lieu de travail, à votre domicile ou en cabinet et je peux le proposer à un public présentant des handicaps. Bien qu’étant effectué assis, le même soin dans le massage et l’écoute sera offert aux personnes le recevant.",
  },
  {
    id: 3,
    name: "Massage Sensitif du Ventre",
    duration: "0h30",
    price: "35,00 €",
    description: "Ce massage peut se recevoir uniquement sur cette zone ou intégrer lors du massage corporel. Il s’agit d’aller visiter cette zone du ventre plus amplement pour libérer les toxines de la peau et des organes par divers mouvements.",
  },
  {
    id: 4,
    name: "Massage AromaTouch des mains",
    duration: "0h30",
    price: "35,00 €",
    description: "Par ce massage AromaTouch des mains vous pourrez faire une découverte d'un massage aux huiles essentielles et les bienfaits que cela procure.",
  },
  {
    id: 5,
    name: "Massage AromaTouch du dos",
    duration: "0h50",
    price: "55,00 €",
    description: "Le massage AromaTouch aux huiles essentielles est un massage du dos et des pieds. Un massage détente et soin qui vous détendra en profondeur, vous permettra de retrouver de l'énergie. Une discussion préalable au massage permettra de connaître vos problématiques de santé dont il faudrait que je tienne compte pour le massage et le choix des huiles essentielles. C'est une expérience unique avec les huiles essentielles qui permet de rétablir l'équilibre et l'harmonie dans tout le corps. Un massage utilisé également pour aider lors des Burn-out (et pouvant être effectué sans huile essentielle).",
  },
];

function Guidance() {


  const [estMasqueReflexotherapie, setEstMasqueReflexotherapie] = useState(reflexotherapie.map(() => true));
  const [estMasqueReflexo, setEstMasqueReflexo] = useState(reflexologie.map(() => true));
  const [estMasqueMassage, setEstMasqueMassage] = useState(massages.map(() => true));
  
  const toggleMasqueReflexotherapie = (index) => {
  setEstMasqueReflexotherapie((prev) => {
  const newState = [...prev];
  newState[index] = !newState[index];
  return newState;
  });
  };

  const toggleMasqueReflexo = (index) => {
    setEstMasqueReflexo((prev) => {
    const newState = [...prev];
    newState[index] = !newState[index];
    return newState;
    });
    };
  
  const toggleMasqueMassage = (index) => {
  setEstMasqueMassage((prev) => {
  const newState = [...prev];
  newState[index] = !newState[index];
  return newState;
  });
  };

  return (
    <section id="ht">
      <h2>TARIFS</h2>
      <h2>REFLEXOTHERAPIE</h2>
      <div className="ht__presta content">
        {reflexotherapie.map(({ id, name, duration, price, description }, index) => {
          return (
            <div className="presta" key={id}>
              <h3>{name}</h3>
              <div className="price">
                <GiDuration />
                <span>{duration}</span>
                <ImPriceTag />
                <span>{price}</span>
              </div>
              <button className="btn" onClick={() => toggleMasqueReflexotherapie(index)}>
                {estMasqueReflexotherapie[index] ? "Plus de details" : "Masquer les details"}
              </button>
              {!estMasqueReflexotherapie[index] && <p className="detail">{description}</p>}
            </div>
          );
        })}
        
      </div>
      <h2>REFLEXOLOGIE</h2>
      <div className="ht__presta content">
        {reflexologie.map(({ id, name, duration, price, description }, index) => {
          return (
            <div className="presta" key={id}>
              <h3>{name}</h3>
              <div className="price">
                <GiDuration />
                <span>{duration}</span>
                <ImPriceTag />
                <span>{price}</span>
              </div>
              <button className="btn" onClick={() => toggleMasqueReflexo(index)}>
                {estMasqueReflexo[index] ? "Plus de details" : "Masquer les details"}
              </button>
              {!estMasqueReflexo[index] && <p className="detail">{description}</p>}
            </div>
          );
        })}
        
      </div>
      <h2>MASSAGES</h2>
      <div className="ht__presta content">
        {massages.map(({ id, name, duration, price, description }, index) => {
          return (
            <div className="presta" key={id}>
              <h3>{name}</h3>
              <div className="price">
                <GiDuration />
                <span>{duration}</span>
                <ImPriceTag />
                <span>{price}</span>
              </div>
              <button className="btn" onClick={() => toggleMasqueMassage(index)}>
                {estMasqueMassage[index] ? "Plus de details" : "Masquer les details"}
              </button>
              {!estMasqueMassage[index] && <p className="detail">{description}</p>}
            </div>
          );
        })}
        
      </div>
    </section>
  );
}

export default Guidance;
