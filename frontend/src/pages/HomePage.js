import React, { Component } from 'react'
import Blips from '../containers/Blips'
import BlipForm from '../components/BlipForm'

class HomePage extends Component {
  render() { 
    return (
      <>
      <BlipForm />
      <Blips renderMethod="Home" />
      </>
    )
  }
}
 
export default HomePage