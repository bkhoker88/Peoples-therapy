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
          <Zoom duration={750} delay={450}>
            <h2 id="intro">a mental health practice of diverse</h2>
          </Zoom>
          <Zoom duration={750} delay={900}>
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

        {/* <button type="button" id="Contact" onClick="location.href = 'https://adriana-khoker.clientsecure.me';">
          Make an Appointment
        </button> */}

        <div className="spwidget-button-wrapper">
          <a
            id="Contact"
            href="https://adriana-khoker.clientsecure.me"
            className="spwidget-button"
            data-spwidget-scope-id="1c342bdf-c323-45bd-a4db-d3461b4838d0"
            data-spwidget-scope-uri="adriana-khoker"
            data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
            data-spwidget-scope-global
            data-spwidget-autobind
          >
            Request Appointment
          </a>
        </div>
        <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js" />
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

//npm run build-client
