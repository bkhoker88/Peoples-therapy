import React from 'react'
import {Zoom, Tada} from 'react-reveal'

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div>
      <Zoom duration={2000}>
        <h1 id="intro">a mental health practice of diverse</h1>
      </Zoom>

      <Zoom duration={2000} delay={1000}>
        <h1 id="intro">and inclusive therapists for the people;</h1>
      </Zoom>

      <Zoom duration={2000} delay={2000}>
        <h1 id="intro">our people.</h1>
      </Zoom>

      <img id="homePhoto" src="NYC.jpg" height="400" width="400" />
      <br />
      <Zoom>
        <div id="homebottom">
          <h1>Reach out to us</h1>
          <h1>Begin the work</h1>
        </div>
      </Zoom>
      <Zoom>
        <div id="homebottom2">
          <h1> a telehealth practice serving all of new york</h1>
          <button type="button" id="Contact">
            {' '}
            Make an Appointment{' '}
          </button>
        </div>
      </Zoom>
    </div>
  )
}

export default Home
