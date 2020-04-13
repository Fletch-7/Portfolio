import React from 'react'

class Contact extends React.Component{
  render(){
    return(
    <section className="Section" id="contact">
    <div className="footer">
      <h1 className="title">Get In Touch</h1>
    <a href="mailto:r.a.m.fletcher7@gmail.com" className="button" alt="link"><i className="fas fa-link"></i><span>r.a.m.fletcher7@gmail.com</span></a>
    <a href="https://github.com/Fletch-7" className="button" alt="link"><i className="fab fa-github-square"></i><span> GitHub</span></a>
    <a href="https://www.linkedin.com/in/rory-fletcher-918426113/" className="button" alt="link"><i class="fab fa-linkedin"></i><span> Linkedin</span></a>
    </div>
    </section>
    )
  }

}

export default Contact