import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = () => {
  return (
    <div>
      <h1 id="intro">
        A mental health practice of diverse and inclusive therapists for the
        people; our people.
      </h1>

      <img alt="" src="rocko.png" height="400" width="1000" />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
