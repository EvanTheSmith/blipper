import React, { Component } from 'react'
import { connect } from 'react-redux';
import { followUser, unfollowUser, changeUser  } from '../actions/userActions'
import User from '../components/User'

class UsersPage extends Component {

  renderUsers = () => {
    return this.props.users.map(user => <User key={user.id} renderFollowButton={this.renderFollowButton(user)} user={user} />)
  }

  handleFollow = (notAlreadyFollowing, this_user_id, current_user_id) => () => {
    // let actionType = () => { return notAlreadyFollowing ? this.props.followUser : this.props.unfollowUser }
    // actionType()({follow: this_user_id, follower: current_user_id});
    let payload = {follow: this_user_id, follower: current_user_id};
    if (notAlreadyFollowing)
    {this.props.followUser(payload)}
    else
    {this.props.unfollowUser(payload)}
  }

  renderFollowButton = (this_user) => () => {
    let notAlreadyFollowing = !(this_user.followers.find(follower => follower.id === this.props.current_user))
    let notCurrentUser = this_user.id !== this.props.current_user;
    let buttonText = notAlreadyFollowing ? "Follow" : "Unfollow"
    if (notCurrentUser) { // Only render the button at all if this user is not the logged-in user
      return <button onClick={this.handleFollow(notAlreadyFollowing, this_user.id, this.props.current_user)} >{buttonText}</button> 
    }
  }

  render() { 
    return this.props.loading ? "Loading ..." : (
      <div>
      {this.renderUsers()}
      <br />
      {/* Button below for testing purposes below */}
      <button onClick={this.props.changeUser} >Change User</button>
      </div>
  )}
}

const mapStateToProps = (state) => ({ 
  users: state.users, 
  blips: state.blips,
  loading: state.loading, 
  current_user: state.user_id 
})
 
const mapDispatchToProps = dispatch => ({ 
  followUser: payload => dispatch(followUser(payload)),
  unfollowUser: payload => dispatch(unfollowUser(payload)),
  changeUser: () => dispatch(changeUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)