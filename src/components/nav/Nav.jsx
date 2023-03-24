import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlinePsychology} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {TbMassage} from 'react-icons/tb'
import {ImPriceTag} from 'react-icons/im'
import {GiFootprint} from 'react-icons/gi'


import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
        <AiOutlineHome/>
        <span className='nameNav'>Accueil</span>
      </a>
      <a href="#reflexiology" onClick={() => setActiveNav('#reflexiology')} className={activeNav === '#reflexiology' ? 'active' : ''}>
        <GiFootprint/>
        <span className='nameNav'>Réflexologie</span>
      </a>
      <a href="#massages" onClick={() => setActiveNav('#massages')} className={activeNav === '#massages' ? 'active' : ''}>
        <TbMassage/>
        <span className='nameNav'>Massage</span>
      </a>
      <a href="#memory" onClick={() => setActiveNav('#memory')} className={activeNav === '#memory' ? 'active' : ''}>
        <MdOutlinePsychology/>
        <span className='nameNav'>Mémoires <br></br> emotionnelles</span>
      </a>

      <a href="#ht" onClick={() => setActiveNav('#ht')} className={activeNav === '#ht' ? 'active' : ''}>
        <ImPriceTag/>
        <span className='nameNav'>Horaires <br></br> Tarifs</span>
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail/>
        <span className='nameNav'>Contact</span>
      </a>
    </nav>
  )
}

export default Nav