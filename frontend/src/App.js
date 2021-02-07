import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'

class App extends Component { 
  render() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/users" component={UsersPage} />
      <Route exact path="/users/:username" component={UserPage} />
    </div>
    </Router>
  )}
}

export default App