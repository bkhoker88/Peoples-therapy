import React from 'react'
import {Zoom} from 'react-reveal'

const Footbar = () => {
  return (
    <div id="footer-div">
      <Zoom delay={500}>
        <footer>
          <div id="footContainer">
            <div>
              <div id="footName">Location</div>
              <div>A virtual mental health practice Serving all of NY</div>
            </div>
            <div>
              <div id="footName">Hours</div>
              <div>Monday thru Friday: 9:00am — 8:00pm</div>
              <div> Saturday and Sunday</div>
            </div>
            <div>
              <div id="footName">Contact</div>
              <div>hello@thepeoplestherapy.sprucecare.com</div>
              <div>Phone (917) 426-1618</div>
            </div>
          </div>
        </footer>
      </Zoom>
    </div>
  )
}

export default Footbar
