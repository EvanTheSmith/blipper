import React, { Component } from 'react'
import Header from './components/Header'
import Blips from './components/Blips';

class App extends Component { 
  render() {
  return (
    <div className="App">
      <Header />
      <Blips />
    </div>
  )}
}

export default App;