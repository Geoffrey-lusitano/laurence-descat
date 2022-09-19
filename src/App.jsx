import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Reflexiology from './components/reflexiology/Reflexiology'
import Massages from './components/massages/Massages'
import Memory from './components/memory/Memory'
import Ht from './components/ht/Ht'
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
      <Memory />
      <Ht />
      <Contact />
      <Footer />
    </>
  )
}

export default App
   