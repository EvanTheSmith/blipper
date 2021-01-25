import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './containers/Home'
import Users from './containers/Users'

class App extends Component { 
  render() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
    </div>
    </Router>
  )}
}

export default App