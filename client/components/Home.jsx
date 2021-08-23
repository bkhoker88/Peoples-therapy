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
          <Zoom duration={800} delay={500}>
            <h2 id="intro">a mental health practice of diverse</h2>
          </Zoom>
          <Zoom duration={800} delay={1000}>
            <h2 id="intro">and inclusive therapists for the people</h2>
          </Zoom>
          {/* <Zoom duration={800} delay={1500}>
            <h2 id="intro">our people.</h2>
          </Zoom> */}
        </div>
      </div>
      <br />
      <div id="homebottom">
        <Zoom duration={1700} delay={1500}>
          <h1>reach out to us</h1>
        </Zoom>
        <Zoom duration={1700} delay={1600}>
          <h1>begin the work</h1>
        </Zoom>
      </div>
      <div id="homebottom2">
        <h1> a telehealth practice serving all of new york</h1>

        {/* <button type="button" id="Contact">
          {' '}
          Make an Appointment{' '}
        </button> */}
      </div>
    </div>
  )
}

export default Home

// colors
// #c89882  logo brown
// #fdf8f5  white
// #e8cebf  pink
// #266150  green
// #4f4846  black
