import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './containers/Home'
import Users from './containers/Users'
import User from './containers/User'

class App extends Component { 
  render() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/:username" component={User} />
    </div>
    </Router>
  )}
}

export default App