import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import { connect } from 'react-redux';

import Navbar from './components/Navbar'
import Home from './containers/Home'

class App extends Component { 
  render() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
    </Router>
  )}
}

export default App