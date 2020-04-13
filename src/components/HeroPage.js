import React from 'react'
import Typical from 'react-typical'

class HeroPage extends React.Component {
  
  render() {
    return (
      <section className="Section" id="hero">
        <div className="Hero">
        <h1 className="name">Hi, my name is Rory.</h1>
    <p className="name">
      I'm a{'  '}
    <Typical
    loop={Infinity}
    wrapper="b"
    steps={[
      'Full-Stack Developer',
      1000,
      'Foodie',
      1000 ,
      'Runner',
      1000,
      'Linguist',
      1000
    ]}
    />
    </p> 
    </div>
      </section>
    )
  }
}

    export default HeroPage