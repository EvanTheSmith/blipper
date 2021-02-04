import React, { Component } from 'react'
import { connect } from 'react-redux';
import Blip from '../components/Blip'

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

const mapStateToProps = (state) => {
  return { users: state.users, loading: state.loading, current_user: state.user_id }
}

export default connect(mapStateToProps, null)(Blips)