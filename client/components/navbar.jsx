import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <nav>
      <img alt="" src="rocko.png" height="50" width="50" id="logo" />
      <ul>
        <Link to="/"> Home</Link>
        <Link to="/Aboutus"> Who We Are</Link>
        <Link to="/Team"> Meet Our Team</Link>
        <Link to="/Services"> Services</Link>
        <Link to="/Insurance"> Insurance & Fees </Link>
        <Link to="/Contact">Contact Us</Link>
      </ul>
      <div />
    </nav>
    <hr />
  </div>
)

export default Navbar
