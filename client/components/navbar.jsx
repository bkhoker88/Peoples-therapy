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
        <Link to="/"> Home</Link>
        <Link to="/Aboutus"> Who We Are</Link>
        <Link to="/Team"> Meet Our Team</Link>
        <Link to="/Services"> Services</Link>
        <Link to="/Insurance"> Insurance & Fees </Link>

        {/* <button type='button'>Contact</button> */}
      </ul>
      <div />
    </nav>
  </div>
)

export default Navbar
