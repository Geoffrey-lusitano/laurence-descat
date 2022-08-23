import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Reflexiology from './components/reflexiology/Reflexiology'
import Massages from './components/massages/Massages'
import Guidance from './components/guidance/Guidance'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header /> 
      <Nav />
      <About />
      <Reflexiology />
      <Massages />
      <Guidance />
      <Contact />
      <Footer />
    </>
  )
}

export default App
   