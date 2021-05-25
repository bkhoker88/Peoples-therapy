import React from 'react'
import {Zoom} from 'react-reveal'

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div>
      <div className="firstIntro">
        <Zoom duration={800} delay={800}>
          <h1 id="intro">a mental health practice of diverse</h1>
        </Zoom>
        <Zoom duration={800} delay={1600}>
          <h1 id="intro">and inclusive therapists for the people;</h1>
        </Zoom>
        <Zoom duration={800} delay={2400}>
          <h1 id="intro">our people.</h1>
        </Zoom>
      </div>

      <img
        id="homePhoto"
        src="NYC.jpg"
        height="400"
        width="400"
        className="responsive"
      />
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
