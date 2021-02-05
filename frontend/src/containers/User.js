import React, { Component } from 'react'
import Blips from './Blips'

class Home extends Component {
  render() { 
    return <Blips renderMethod="User" />
  }
}
 
export default Home