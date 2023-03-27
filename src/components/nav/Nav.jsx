import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlinePsychology} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {TbMassage} from 'react-icons/tb'
import {ImPriceTag} from 'react-icons/im'
import {GiFootprint} from 'react-icons/gi'


import {useState, useEffect} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const getVisibleSection = () => {
    const sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        return section;
      }
    }
    return null;
  };
  const handleScroll = () => {
    const visibleSection = getVisibleSection();
    if (visibleSection) {
      setActiveNav(`#${visibleSection.id}`);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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