import React from 'react'
import {Fade, Zoom, Slide} from 'react-reveal'

export const Insurance = () => {
  return (
    <div id="insurance">
      <Zoom>
        <h1 id="introTitle">Insurance </h1>
      </Zoom>
      <h2 id="about">
        It’s our mission to provide the best quality mental health in New York
        City, and we strive to make this as convenient as possible. Our billing
        team will clarify your payment options as well as verify your insurance
        coverage prior to your first visit- so you don’t have to. Call us
      </h2>
      <div id="insuranceLogos">
        <Slide bottom>
          <img src="cigna-logo.png" />
        </Slide>
        <Slide right>
          <img src="uhc.png" />
        </Slide>
        <Slide left>
          <img src="optum.png" />
        </Slide>
      </div>
      <div id="insuranceLogos">
        <Slide top>
          <img src="oscar.png" />
        </Slide>
        <Slide top>
          <img src="empire.png" />
        </Slide>
        <Slide left>
          <img src="oxford.png" />
        </Slide>
      </div>
    </div>
  )
}
