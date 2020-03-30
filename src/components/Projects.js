import React from 'react'
import Project1 from '../assets/Snake_Game.png'
import Project2 from '../assets/Hero_API.png'
import Project3 from '../assets/Geocachr.png'
import Project4 from '../assets/Pensive.png'

class Projects extends React.Component{
  render() {
    return (
      <section className="Section" id="projects">
        <h1 className="title">Projects</h1>
        <div className="projects">
        {/* Snake */}
      <div className="container-p">
      <hr/>
        <div className="image">
        <img className="project-image" src={Project1} alt="snake_game"></img>
      </div>
        <div className="container-info">
        <div className="project-info">
          <h1 className="title-small">Snake Game</h1>
          <ul className="icons">
          <li className="cell"> <i className="fab fa-js-square fa-2x"></i></li>
          <li className="cell"> <i className="fab fa-html5 fa-2x"></i></li>
          <li className="cell"><i className="fab fa-css3-alt fa-2x"></i></li>
          </ul>
          <a href="http://bit.ly/rf-project-1" className="button" alt="link"><i className="fas fa-link"></i><span>View Project</span></a>
          <a href="https://github.com/Fletch-7/SEI-Project-1" className="button" alt="link"><i className="fab fa-github-square"></i><span> GitHub</span></a>
        </div>
        <div className="project-description">
          <p>My first project after three weeks to make a game over a two-week period, using HTML, CSS and JavaScript fundamentals. The project included a variety of JavaScript functions that enabled smooth gameplay and transitioning throughout.</p>
        </div>
        </div>
      </div>
       {/* Hero API */}
      <div className="container-p">
      <hr/>
        <div className="image">
        <img className="project-image" src={Project2} alt="Hero_API"></img>
        </div>
        <div className="container-info">
        <div className="project-info">
          <h1 className="title-small">POW!</h1>
          <ul className="icons">
          <li className="cell"> <i className="fab fa-js-square fa-2x"></i></li>
          <li className="cell"> <i className="fab fa-html5 fa-2x"></i></li>
          <li className="cell"><i className="fab fa-css3-alt fa-2x"></i></li>
          <li className="cell"> <i className="fab fa-react fa-2x"></i></li>
          </ul>
          <a href="http://bit.ly/heroku-hero" className="button" alt="link"><i className="fas fa-link"></i><span>View Project</span></a>
          <a href="https://github.com/Fletch-7/SEI-PROJECT-2" className="button" alt="link"><i className="fab fa-github-square"></i><span> GitHub</span></a>
        </div>
        <div className="project-description">
          <p>The second project was to pull an API database and create a front end to display it using React.js. My teammate and I opted for a superhero API, where we created a game similar to Top-Trumps. We used a variety of JavaScript functions to make the website interactive for the user. Designwise, we opted to use Bulma in conjunction with a variety of graphics to improve the aesthetic of the website.</p>
        </div>
        </div>
      </div>
        {/* Geocachr */}
      <div className="container-p">
      <hr/>
        <div className="image">
        <img className="project-image" src={Project3} alt="Geocachr_website"></img>
        </div>
        <div className="container-info">
        <div className="project-info">
          <h1 className="title-small">Geocachr</h1>
          <ul className="icons" id="small">
          <li className="cell"> <i className="fab fa-js-square "></i></li>
          <li className="cell"> <i className="fab fa-html5 "></i></li>
          <li className="cell"><i className="fab fa-css3-alt "></i></li>
          <li className="cell"> <i className="fab fa-react"></i></li>
          <li className="cell"> <i className="fab fa-node-js"></i></li>
          <li className="cell"><i className="Bulma"><img src="https://versions.bulma.io/0.6.1/favicons/safari-pinned-tab.svg?v=201701041855" alt="bulma logo"/></i></li>
          <li className="cell"><i className="devicon-express-original"></i></li>
          <li className="cell"><i className="devicon-mongodb-plain"></i></li>
          </ul>
          <a href="http://bit.ly/rf-project-3" className="button" alt="link"><i className="fas fa-link"></i><span>View Project</span></a>
          <a href="https://github.com/Fletch-7/sei-group-project " className="button" alt="link"><i className="fab fa-github-square"></i><span> GitHub</span></a>
        </div>
        <div className="project-description">
          <p> My third project was with a team of four to create a fully functional front and back-end website using Express, React.js and MongoDB. Our team created a geo-caching game where users could make accounts and take part in treasure hunts based around London and comment, create, and edit trails in their accounts as well as comment on other users. My role was to work on the front end using React.js and applying the necessary API’s.</p>
        </div>
        </div>
      </div>
        {/* Pensive */}
        <div className="container-p">
        <hr/>
        <div className="image">
        <img className="project-image" src={Project4} alt="pensive_website"></img>
        </div>
        <div className="container-info">
        <div className="project-info">
          <h1 className="title-small">Pensive</h1>
          <ul className="icons" id="small">
          <li className="cell"> <i className="fab fa-js-square"></i></li>
          <li className="cell"> <i className="fab fa-html5"></i></li>
          <li className="cell"><i className="fab fa-css3-alt"></i></li>
          <li className="cell"> <i className="fab fa-html5 "></i></li>
          <li className="cell"> <i className="fab fa-react"></i></li>
          <li className="cell"><i className="Bulma"><img src="https://versions.bulma.io/0.6.1/favicons/safari-pinned-tab.svg?v=201701041855" alt="bulma logo"/></i></li>
          <li className="cell"><i className="devicon-python-plain"></i></li>
          <li className="cell"> <i className="django"><img src="https://d7umqicpi7263.cloudfront.net/img/product/003313e7-e97b-4a5d-860a-f1a435a41174/b4b17d38-d65c-4b5f-9241-94104beb9a88.png" alt="Django"/></i></li>
          </ul>
          <a href="http://bit.ly/heroku-pensive " className="button" alt="link"><i className="fas fa-link"></i><span>View Project</span></a>
          <a href="https://github.com/Fletch-7/sei-final-project/tree/Fletch-7-patch-1" className="button" alt="link"><i className="fab fa-github-square"></i><span> GitHub</span></a>
        </div>
        <div className="project-description">
          <p>My fourth and final project involved creating a blog platform using a mixture of Python, PostgreSQL and Django. The platform includes main features such as profiles, trending topics and articles created by software developers and coding enthusiasts. My role was using MongoDB, Python and PostgreSQL to create CRUD processes and authentication on the back end. I also worked on the JavaScript in React to improve the functionality on the front end.</p>
        </div>
        </div>
      </div>
      </div>
      </section>
    )
  }

}

export default Projects