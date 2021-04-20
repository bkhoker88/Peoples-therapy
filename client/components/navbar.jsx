import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = () => (
  <div>
    <nav>
      <img alt="" src="rocko.png" height="50" width="50" id="logo" />
      <Link to="/"> Home</Link>
      <Link to="/Aboutus"> Who We Are</Link>
      <Link to="/Team"> Meet Our Team</Link>
      <Link to="/Services"> Services</Link>
      <Link to="/Insurance"> Insurance & Fees </Link>
      <Link to="/Contact" id="nav-div">
        {' '}
        Contact Us{' '}
      </Link>
    </nav>
    <hr />
  </div>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
