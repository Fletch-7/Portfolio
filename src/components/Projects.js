import React from 'react'
import Project1 from '../assets/Snake_Game.png'
import Project2 from '../assets/Hero_API.png'
import Project3 from '../assets/Geocachr.png'
import Project4 from '../assets/Pensive.png'
import Project5 from '../assets/pcosparty.png'
import Project6 from '../assets/underc.png'

class Projects extends React.Component{
  render() {
    return (
      <section className="Section" id="projects">
        <h1 className="title" id="p-title">Projects</h1>
        <div className="projects">
        {/* Snake */}
      <div className="container-p">
        <div className="image">
        <img className="project-image is-hidden-mobile" src={Project1} alt="snake_game"></img>
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
          <p>My first project after three weeks to make a game over a two-week period, using HTML, CSS and JavaScript fundamentals. I decided to make snake I, as it was something I always used to play as a kid. Over the two weeks, the first week was spent planning how the game would work, whilst the second week was left to implementing pseudocode to actual code. The project included a variety of JavaScript functions that enabled smooth gameplay and transitioning throughout.</p>
        </div>
        </div>
      </div>
       {/* Hero API */}
      <div className="container-p">
      <hr/>
        <div className="image">
        <img className="project-image is-hidden-mobile" src={Project2} alt="Hero_API"></img>
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
          <p>The second project was to pull a third-party API database and create a front end to display it using React.js. My teammate and I opted for a superhero API, where we created a game similar to Top-Trumps. We used a variety of JavaScript functions to make the website interactive for the user. Designwise, we opted to use Bulma in conjunction with a variety of graphics to improve the aesthetic of the website.</p>
        </div>
        </div>
      </div>
        {/* Geocachr */}
      <div className="container-p">
      <hr/>
        <div className="image">
        <img className="project-image is-hidden-mobile" src={Project3} alt="Geocachr_website"></img>
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
        <img className="project-image is-hidden-mobile" src={Project4} alt="pensive_website"></img>
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

      {/* It's a PCOS party! */}
      <div className="container-p">
      <hr/>
        <div className="image">
        <img className="project-image is-hidden-mobile" src={Project5} alt="pcos_desktop"></img>
        </div>
        <div className="container-info">
        <div className="project-info">
          <h1 className="title-small">It's a PCOS party!</h1>
          <ul className="icons">
          <li className="cell"> <i className="fab fa-js-square"></i></li>
          <li className="cell"> <i className="fab fa-html5"></i></li>
          <li className="cell"><i className="fab fa-css3-alt"></i></li>
          <li className="cell"><i class="fab fa-sass"></i></li>
          <li className="cell"> <i className="fab fa-react"></i></li>
          <li className="cell"><i class="fab fa-mailchimp"></i></li>
          </ul>
          <a href="https://fletch-7.github.io/pcos-launch/" className="button" alt="link"><i className="fas fa-link"></i><span>View Project</span></a>
        </div>
        <div className="project-description">
          <p>This was my first freelance project after leaving General Assembly during the Covid-19 Lockdown. I was approached by a friend that required a simple front-end website that would allow her to demonstrate her business and story. The client wanted to keep the website as simple as possible as her wanted it to supplement their Instagram account.  Her brief also included the necessity of having a website that was mobile responsive, as 90% of her clients will view this from their mobile.</p>
          <br/>
          <p>After remotely meeting  on video calls to discuss initial plans , we ended up with a simple , clean, to-the-point website that met the clients expectations. After discussing whether to add a back-end to the website to enable comments and forms, I ended up suggesting to use  Mail-chimp as this allowed the client to have control over making forms and marketing materials in the future  without any assistance. </p>
        </div>
        </div>
      </div>

      {/* PIXL8 */}
      <div className="container-p">
      <hr/>
        <div className="image">
        <img className="project-image is-hidden-mobile" src={Project6} alt="pcos_desktop"></img>
        </div>
        <div className="container-info">
        <div className="project-info">
          <h1 className="title-small">PIXL8</h1>
          <ul className="icons">
          <li className="cell"> <i className="fab fa-js-square"></i></li>
          <li className="cell"> <i className="fab fa-html5"></i></li>
          <li className="cell"><i className="fab fa-css3-alt"></i></li>
          <li className="cell"><i class="fab fa-sass"></i></li>
          <li className="cell"> <i className="fab fa-react"></i></li>
          <li className="cell"><i class="fab fa-mailchimp"></i></li>
          </ul>
          <a href="#" className="button" disabled alt="link"><i className="fas fa-link"></i><span>Coming Soon!</span></a>
        </div>
        <div className="project-description">
          <p>This is my second freelance  during the Covid-19 Lockdown. I was approached by my brother who needs a simple front-end website that would allow him to have an online prescence, as well as, offer a way to showcase his production business and past projects to potential clients.</p>
          <br/>
          <p>Currently, this project is under construction and will be uploaded as soon as the client is satisfied.</p>
        </div>
        </div>
      </div>
      </div>
      </section>
    )
  }

}

export default Projects