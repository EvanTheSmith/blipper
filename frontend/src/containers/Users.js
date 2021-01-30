import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions'
import User from '../components/User'

class Users extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers = () => {
    return this.props.users.map(user => <User key={user.id} renderFollowButton={() => this.renderFollowButton(user)} user={user} />)
  }

  handleFollow = (notAlreadyFollowing, { username }) => {
    notAlreadyFollowing ? console.log(`Now following ${username}`) : console.log(`Now unfollowing ${username}`)
  }

  renderFollowButton = (this_user) => {
    let notAlreadyFollowing = !(this_user.followers.find(follower => follower.id === this.props.current_user))
    let notCurrentUser = this_user.id !== this.props.current_user;
    if (notCurrentUser) { 
      return <button onClick={() => this.handleFollow(notAlreadyFollowing, this_user)} >{notAlreadyFollowing ? "Follow" : "Unfollow"}</button> 
    }
  }

  render() { 
    return this.props.loading ? "Loading ..." : <div>{this.renderUsers()}</div>
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, loading: state.loading, current_user: state.user_id }
}
 
const mapDispatchToProps = dispatch => {
  return { fetchUsers: () => dispatch(fetchUsers()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)