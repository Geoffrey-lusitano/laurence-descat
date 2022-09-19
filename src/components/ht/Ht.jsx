import React from 'react'
import './ht.css'
import {ImPriceTag} from 'react-icons/im'
import {GiDuration} from 'react-icons/gi'
function Guidance() {
  return (
    <section id="ht">
      <h2>TARIFS</h2>
      <div className="ht__reflexotherapie content">
        <h3>REFLEXOTHERAPIE</h3>
        <div className="presta">
          <h3>Périnatalité (du désir à l'accompagnement de la grossesse)</h3>
          <p><GiDuration/>1h00</p>
          <p>Séance d'accompagnement aux problématiques des femmes étant en désir de grossesse, étant enceinte, en préparation de l'accouchement ou après accouchement. Séance agissant sur les problématiques physiques sur la détente et proposition de Réflexo-Analyse pour des séances de Libération de mémoires émotionnelles si besoin.</p>
          <div className="price">
            <ImPriceTag/>
            <span>55,00 €</span>
          </div>
        </div>
        <div className="presta">
          <h3>Libération de mémoires émotionnelles de vie prénatale & de naissance</h3>
          <p><GiDuration/>1h00</p>
          <p>Séance permettant d'identifier les mémoires émotionnelles engendrant des émotions, des ressentis, des sensations plus ou moins agréables voir très gênantes dans sa vie d'adulte, pour se libérer de ces émotions et croyances. Séance commençant par un entretien puis une séance de revisualisation guidée oralement.</p>
          <div className="price">
          <ImPriceTag/>
            <span>55,00 €</span>
          </div>
        </div>
      </div>
      <div className="ht__reflexologie content">
        <h3>REFLEXOLOGIE</h3>
        <div className="presta">
          <h3>Réflexologie selon MTC</h3>
          <p><GiDuration/>1h00</p>
          <p>Par des gestes précis, stimuler l’homéostasie pour une régulation naturelle des déséquilibres constatés, depuis les pieds 👣, les mains 🙌, les oreilles 👂🏻, la tête 💆🏻, le visage, la colonne,…</p>
          <div className="price">
          <ImPriceTag/>
            <span>55,00 €</span>
          </div>
        </div>
        <div className="presta">
          <h3>Accompagnements spécifiques (Parkinson, Alzheimer, Cancers, Fibromyalgie, Endométriose)</h3>
          <p><GiDuration/>1h00</p>
          <p>Séance de réflexologie adaptée à la pathologie, exercée sur différents points du corps et trouvant son intérêt pour réduire certains effets liés à la maladie ou aux traitements afin de gagner une meilleure qualité de vie et plus de bien-être au quotidien.</p>
          <div className="price">
          <ImPriceTag/>
            <span>55,00 €</span>
          </div>
        </div>
        <div className="presta">
          <h3>Digitopresssion Shiatsu</h3>
          <p><GiDuration/>1h00</p>
          <p>Régulation de points sur le trajet de méridiens sur l'ensemble du corps par des pressions effectuées manuellement. Séance habillée, effectuée sur table de massage.</p>
          <div className="price">
          <ImPriceTag/>
            <span>55,00 €</span>
          </div>
        </div>
        <div className="presta">
          <h3>Découverte de la Réflexologie - 1er Rdv</h3>
          <p><GiDuration/>1h00</p>
          <p>Lors de ce rendez-vous découverte je vous expliquerai en quoi consiste mon travail. Le temps de la séance et la qualité de la prestation est identique à une séance normale.</p>
          <div className="price">
          <ImPriceTag/>
            <span>45,00 €</span>
            
          </div>
        </div>
        <div className="presta">
          <h3>Réflexologie Enfants</h3>
          <p><GiDuration/>1h00</p>
          <p>Le travail lors d'une séance pour les enfants est adapté à l'âge et au temps qu'il pourra accepter le massage. (le tarif étant adapté en fonction) Des explications lui seront données selon son âge et sa compréhension. Un travail préalable sur les mains pourra lui montrer ce qui va être effectué sur ses pieds (zone plus sensible) et l'utilisation de diverses méthodes est discuté avec les parents.</p>
          <div className="price">
          <ImPriceTag/>
            <span>35,00 €</span>
            
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Guidance