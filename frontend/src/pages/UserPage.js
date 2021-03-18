import React, { Component } from 'react'
import { connect } from 'react-redux';
import Blips from '../containers/Blips'

class UserPage extends Component {

  countMyLikes = (user) => {
    let myBlips = this.props.blips.filter(blip => blip.user.id === user.id && blip.likers.length !== 0);
    let myLikes = myBlips.map(blip => blip.likers).flat(1);
    // let removeOwnLikes = myLikes.filter(liker => liker.id !== user.id); // OPTIONAL : filter own likes
    return myLikes.length;
  }

  renderIfValidUser = () => {
    let { username } = this.props.match.params; // Grab username from URL params
    let canFindUser = this.props.users.filter(user => user.username === username)[0];
    let user = canFindUser || {followers: []}; // prevents .username glitches below if cannot find user
    let users_blips = this.props.blips.filter(blip => blip.user.id === user.id);
    let renderPage = (<>
    <br /><div> Welcome to {user.username}'s profile — 
      Followers: {user.followers.length} / 
      Blips: {users_blips.length} / 
      Likes: {this.countMyLikes(user)}
    </div><br />
    <Blips username={username} renderMethod="User" />
    </>)

    return canFindUser ? renderPage : "Invalid username entered into address bar"
  }

  render() {
    return this.props.loading ? "Loading ..." : this.renderIfValidUser()
  }
}

const mapStateToProps = (state) => ({ 
  users: state.users, 
  blips: state.blips,
  loading: state.loading, 
  current_user: state.user_id 
})

export default connect(mapStateToProps)(UserPage)