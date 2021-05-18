import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home} from './components'
import {About} from './components/AboutUs'
import {MeetOurTeam} from './components/MeetOurTeam'
import {Services} from './components/Services'
import {Insurance} from './components/Insurance'

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
        <Route path="/Services" componenet={Services} />
        <Route path="/Insurance" component={Insurance} />
      </Switch>
    )
  }
}

export default Routes
