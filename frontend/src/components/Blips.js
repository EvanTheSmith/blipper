import React, { Component } from 'react'
import Blip from './Blip'

class Blips extends Component {
  render() { 
    return (
      <>
      <Blip content="Blip 1" />
      <Blip content="Blip 2" />
      <Blip content="Blip 3" />
      </>
    );
  }
}
 
export default Blips