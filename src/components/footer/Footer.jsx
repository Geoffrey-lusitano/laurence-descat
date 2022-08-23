import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <footer>

      <ul className="permalinks">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        
      </div>

      <div className="footer__copyright">
        <small>&copy; Geoffrey LUSITANO. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer