import React from 'react'

class Navbar extends React.Component{

  state = { navbarOpen: false }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

render() {
  const { navbarOpen } = this.state
  return (
    <header>
    <nav className="navbar has-background-black has-text-white is-transparent is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item"  href="#hero">Rory Fletcher </a>
        <span className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar} alt="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </span>
      </div>
      <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
        <a className="navbar-item " href="#about">about</a>
        <a className="navbar-item " href="#skills">skills</a>
        <a className="navbar-item"  href="#projects">projects</a>
        <a className="navbar-item"  href="#experience">experience</a>
        <a className="navbar-item"  href="#contact">contact</a>
        </div>
      </div>
    </div>
    </nav>
    </header>
  ) 
}


}

export default Navbar
