import React, { Component } from 'react'
import Blips from './Blips'

class User extends Component {
  render() {
    return <Blips username={this.props.match.params.username} renderMethod="User" />
  }
}
 
export default User