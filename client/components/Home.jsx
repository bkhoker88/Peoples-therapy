import React from 'react'
import {Zoom} from 'react-reveal'

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div>
      <div className="imgContainer">
        <img
          id="homePhoto"
          src="nyc2.jpg"
          height="400"
          width="400"
          className="responsive"
        />
        <div className="firstIntro">
          <Zoom duration={800} delay={800}>
            <h2 id="intro">a mental health practice of diverse</h2>
          </Zoom>
          <Zoom duration={800} delay={1600}>
            <h2 id="intro">and inclusive therapists for the people;</h2>
          </Zoom>
          <Zoom duration={800} delay={2400}>
            <h2 id="intro">our people.</h2>
          </Zoom>
        </div>
      </div>
      <br />
      <div id="homebottom">
        <Zoom duration={1700} delay={800}>
          <h1>Reach out to us</h1>
        </Zoom>
        <Zoom duration={1700} delay={800}>
          <h1>Begin the work</h1>
        </Zoom>
      </div>
      <div id="homebottom2">
        <h1> a telehealth practice serving all of new york</h1>
        <Zoom duration={2000} delay={1600}>
          <button type="button" id="Contact">
            {' '}
            Make an Appointment{' '}
          </button>
        </Zoom>
      </div>
    </div>
  )
}

export default Home
