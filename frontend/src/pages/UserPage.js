import React, { Component } from 'react'
import { connect } from 'react-redux';
import Blips from '../containers/Blips'
import { fetchUserBlips } from '../actions/blipActions' // NEW //

class UserPage extends Component {

  componentDidMount() {
    // Only fetches data if not already present in React Store //
    if (!this.props.blips.some(blip => blip.user.id === this.props.current_user )) {
    this.props.fetchUserBlips(this.props.current_user); }
  }

  countMyLikes = (user) => {
    let myBlips = this.props.blips.filter(blip => blip.user.id === user.id && blip.likers.length !== 0);
    let myLikes = myBlips.map(blip => blip.likers).flat(1);
    // OPTIONAL : filter own likes
    // let removeOwnLikes = myLikes.filter(liker => liker.id !== user.id);
    return myLikes.length;
  }

  renderIfValidUser = () => {
    let { username } = this.props.match.params; // Grab username from URL params
    let canFindUser = this.props.users.filter(user => user.username === username)[0];

    // If the username in the URL params isn't a valid user, stop everything
    if (!canFindUser) {return "Invalid username entered into address bar"} 

    let user = canFindUser || {followers: []}; // prevents .username glitches below if cannot find user
    let users_blips = this.props.blips.filter(blip => blip.user.id === user.id);

    return (<>
    <br /><div> Welcome to {user.username}'s profile — 
      Followers: {user.followers.length} / 
      Blips: {users_blips.length} / 
      Likes: {this.countMyLikes(user)}
    </div><br />
    <Blips username={username} renderMethod="User" />
    </>)
  }

  render() {
    return this.props.loading ? "Loading ..." : this.renderIfValidUser()
  }
}

const mapStateToProps = state => ({ 
  users: state.users, 
  blips: state.blips,
  loading: state.loading, 
  current_user: state.user_id 
})

const mapDispatchToProps = dispatch => ({
  fetchUserBlips: (user_id) => dispatch(fetchUserBlips(user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);