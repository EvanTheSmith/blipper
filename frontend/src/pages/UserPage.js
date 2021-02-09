import React, { Component } from 'react'
import Blips from '../containers/Blips'

class UserPage extends Component {
  render() {
    let { username } = this.props.match.params;
    return (
    <>
    <p>Blips you have created will show here.</p>
    <Blips username={username} renderMethod="User" />
    </>
  )}
}
 
export default UserPage