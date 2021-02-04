import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions'
import Blip from '../components/Blip'

class Blips extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() { console.log(this.props.users);
    return this.props.loading ? "Loading ..." : <Blip content="Blip 1" />
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, loading: state.loading, current_user: state.user_id }
}

const mapDispatchToProps = dispatch => {
  return { fetchUsers: () => dispatch(fetchUsers()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blips)