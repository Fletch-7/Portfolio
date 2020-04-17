import React from 'react';
import './App.scss';
import 'bulma'

import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import Software from './components/Software'
import About from './components/About'
// import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'


function App() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <HeroPage/>
      <About/>
      <Software/>
      {/* <Skills/> */}
      <Projects/>
      <Experience/>
      <Contact/>
    </main>
    </>
  
  );
}

export default App;
