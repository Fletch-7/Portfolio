import React from 'react'

class Navbar extends React.Component{

render() {
  return (
    <nav className="navbar has-background-black has-text-white is-transparent is-fixed-top">
    <div className="container">
      <div className="navbar-start">
        <a className="navbar-item"  href="#hero">Rory Fletcher </a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item " href="#about">about</a>
        <a className="navbar-item " href="#skills">skills</a>
        <a className="navbar-item"  href="#experience">experience</a>
        <a className="navbar-item"  href="#projects">projects</a>
        <a className="navbar-item"  href="#contact">contact</a>
        </div>
    </div>
    </nav>
  ) 
}


}

export default Navbar
