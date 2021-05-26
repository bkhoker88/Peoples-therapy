import React from 'react'
import {Link} from 'react-router-dom'
import {Fade} from 'react-reveal'

const Navbar = () => (
  <div>
    <nav>
      <Fade left>
        <img alt="" src="logo.png" height="50" width="50" id="logo" />
      </Fade>
      <ul>
        <Link to="/"> home</Link>
        <Link to="/Aboutus"> who we are</Link>
        <Link to="/Team"> meet our team</Link>
        <Link to="/Services"> services</Link>
        <Link to="/Insurance"> insurance & fees </Link>

        {/* <button type='button'>Contact</button> */}
      </ul>

      <div />
    </nav>
  </div>
)

export default Navbar
