import React, { Component } from 'react'
import Blips from '../containers/Blips'

class UserPage extends Component {
  render() {
    return <Blips username={this.props.match.params.username} renderMethod="User" />
  }
}
 
export default UserPage