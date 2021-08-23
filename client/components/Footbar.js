import React from 'react'
import {Zoom} from 'react-reveal'

const Footbar = () => {
  return (
    <div id="footer-div">
      <footer>
        <div id="footContainer">
          <div>
            <div id="footName">Location</div>
            <div>A virtual mental health practice serving all of NY</div>
          </div>
          <div>
            <div id="footName">Hours</div>
            <div>By Appointment</div>
            {/* <div> Saturday and Sunday</div> */}
          </div>
          <div>
            <div id="footName">Contact</div>
            <div>info@thepeoplestherapy.com</div>
            <div>Phone (917) 426-1618</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footbar
