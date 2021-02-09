import React, { Component } from 'react'
import Blips from '../containers/Blips'
import BlipForm from '../components/BlipForm'

class HomePage extends Component {
  render() { 
    return (
      <>
      <BlipForm />
      <p>Blips from creators you follow and blips you have created will show here.</p>
      <Blips renderMethod="Home" />
      </>
    )
  }
}
 
export default HomePage