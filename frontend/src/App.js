import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Blips from './components/Blips';

class App extends Component { 
  render() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Blips} />
    </div>
    </Router>
  )}
}

export default App;