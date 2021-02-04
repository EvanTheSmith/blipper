import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions'
import Blip from '../components/Blip'

class Blips extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderMyBlips = () => { 
  let theUser = this.props.users.filter(user => user.id === this.props.current_user)[0];
  if (theUser) { return theUser.blips.map(blip => <Blip key={blip.id} content={blip.content} />) } else {return null}
  }

  render() { 
    return this.props.loading ? "Loading ..." : this.renderMyBlips()
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, loading: state.loading, current_user: state.user_id }
}

const mapDispatchToProps = dispatch => {
  return { fetchUsers: () => dispatch(fetchUsers()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blips)