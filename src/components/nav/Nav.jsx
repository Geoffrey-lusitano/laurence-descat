import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {TbMassage} from 'react-icons/tb'
import {DiAtlassian} from 'react-icons/di'
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
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser/>
        <span className='nameNav'>Présentation</span>
      </a>
      <a href="#reflexiology" onClick={() => setActiveNav('#reflexiology')} className={activeNav === '#reflexiology' ? 'active' : ''}>
        <GiFootprint/>
        <span className='nameNav'>Réflexiologie</span>
      </a>
      <a href="#massages" onClick={() => setActiveNav('#massages')} className={activeNav === '#massages' ? 'active' : ''}>
        <TbMassage/>
        <span className='nameNav'>Massage</span>
      </a>
      <a href="#guidance" onClick={() => setActiveNav('#guidance')} className={activeNav === '#guidance' ? 'active' : ''}>
        <DiAtlassian/>
        <span className='nameNav'>Accompagnement</span>
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail/>
        <span className='nameNav'>Contact</span>
      </a>
    </nav>
  )
}

export default Nav