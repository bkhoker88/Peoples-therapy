import React from 'react'

import {Navbar, Footbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footbar />
    </div>
  )
}

export default App
