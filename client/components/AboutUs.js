import React from 'react'
import {Fade, Zoom, Flip} from 'react-reveal'

export const About = () => {
  return (
    <div>
      {/* <img src="queens.png"/> */}
      {/* <Zoom> */}
      <h1 id="introTitle">about us </h1>
      {/* </Zoom> */}
      <Zoom>
        <div id="about">
          <p>
            The People’s Therapy is a virtual mental health practice of diverse
            and inclusive therapists some of whom identify as BIPOC. Our mission
            is to provide excellent mental health services at affordable fees
            and via insurance. We are passionate about learning and therefore
            our clinicians are constantly working and growing their clinical
            skills to bring the latest tools and interventions to their therapy
            sessions. We believe everyone should have access to exceptional
            mental health care from well trained licensed clinicians, with
            someone you can identify with whether through lived experience,
            culture or race, and at your convenience.
          </p>
        </div>
      </Zoom>
    </div>
  )
}
