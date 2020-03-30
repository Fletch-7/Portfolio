import React from 'react';
import './App.scss';
import 'bulma'

import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import Software from './components/Software'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'


function App() {
  return (
    <main>
      <Navbar/>
      <HeroPage/>
      <Software/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  
  );
}

export default App;
