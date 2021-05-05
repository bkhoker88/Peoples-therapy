import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home} from './components'
import {About} from './components/AboutUs'
import {MeetOurTeam} from './components/MeetOurTeam'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Aboutus" component={About} />
        <Route path="/Team" component={MeetOurTeam} />
      </Switch>
    )
  }
}

export default Routes
