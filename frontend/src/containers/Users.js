import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions'
import User from '../components/User'

class Users extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers = () => {
    return this.props.users.map(user => <User key={user.id} user={user} />)
  }

  render() { 
    return this.props.loading ? "Loading ..." : <div>{this.renderUsers()}</div>
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, loading: state.loading }
}
 
const mapDispatchToProps = dispatch => {
  return { fetchUsers: () => dispatch(fetchUsers()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)