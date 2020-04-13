import React from 'react'

class Experience extends React.Component{

render() {
  return(
    <section className="Section" id="experience">
    <div className="container-experience"> 
      <div className="roles">
      <h1 className="title">Experience</h1>
        <br/>
          <h2 className="subtitle">General Assembly- Software Engineering Course</h2>
              <h3 className="time">December ‘19 - March ‘20</h3>
                <p>A three-month intensive course that covered the fundamentals of software development through lessons, homework and projects, by industry professionals. During the course we undertook 4 projects, each comprising of a different mixture of lanaguages and frameworks. During the course we had daily stand-ups as a team to talk through wins and challenges. In addition, we focused on pair programming and presenting projects. </p>
                <br/>
                    <h2 className="subtitle">Mahabis</h2>
                  <h3 className="time"> Feb – Apr ‘19  </h3>
                    <p>My role was to help build and maintain B2B partnerships and ensure a stable avenue of sales to keep the company operating. I managed to improve our partnerships and sell a considerable amount of old stock to both domestic and international partners to bring in new and improved ranges. I also took part in setting up our new account with Amazon launchpad.</p>
                      <br/>
                    <h2 className="subtitle">Simba Sleep</h2>
                      <h3 className="time">Aug ‘17 - Feb ‘19</h3>
                        <p>My role as Retail Coordinator enabled me to develop my skills in project management, account management and sales between both the retail and logistics departments. As a Retail Coordinator, I focused on building the international and national retail departments along with four colleagues.</p>

      </div>
    </div>
    </section>
  )
}

}

export default Experience