import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers, followUser, unfollowUser, changeUser  } from '../actions/userActions'
import User from '../components/User'

class UsersPage extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers = () => {
    return this.props.loading ? "Loading ..." : this.props.users.map(user => <User key={user.id} renderFollowButton={this.renderFollowButton(user)} user={user} />)
  }

  handleFollow = (notAlreadyFollowing, this_user) => () => {
    if (notAlreadyFollowing) {
      this.props.followUser({follow: this_user.id, follower: this.props.current_user});
    }
    else 
    { this.props.unfollowUser({follow: this_user.id, follower: this.props.current_user});}
  }

  renderFollowButton = (this_user) => () => {
    let notAlreadyFollowing = !(this_user.followers.find(follower => follower.id === this.props.current_user))
    let notCurrentUser = this_user.id !== this.props.current_user;
    let buttonText = (notFollowing) => notFollowing ? "Follow" : "Unfollow"
    if (notCurrentUser) { 
      return <button onClick={this.handleFollow(notAlreadyFollowing, this_user)} >{buttonText(notAlreadyFollowing)}</button> 
    }
  }

  render() { 
    return (
      <div>
      {this.renderUsers()}
      <br />
      {/* Button for testing purposes below */}
      <button onClick={this.props.changeUser} >Change User</button>
      </div>
  )}
}

const mapStateToProps = (state) => {
  return { users: state.users, loading: state.loading, current_user: state.user_id }
}
 
const mapDispatchToProps = dispatch => {
  return { 
    fetchUsers: () => dispatch(fetchUsers()), 
    followUser: payload => dispatch(followUser(payload)),
    unfollowUser: payload => dispatch(unfollowUser(payload)),
    changeUser: () => dispatch(changeUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)