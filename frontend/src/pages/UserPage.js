import React, { Component } from 'react'
import { connect } from 'react-redux';
import Blips from '../containers/Blips'

class UserPage extends Component {

  countMyLikes = (user) => {
    let myBlips = this.props.blips.filter(blip => blip.user.id === user.id && blip.likers.length !== 0);
    let myLikes = myBlips.map(blip => blip.likers).flat(1);
    // let removeOwnLikes = myLikes.filter(liker => liker.id !== user.id);
    return myLikes.length;
  }

  renderIfValidUser = () => {
    let { username } = this.props.match.params; // Grab username from URL params
    let canFindUser = this.props.users.filter(user => user.username === username)[0];
    let renderPage = (<>
    <div> {canFindUser && canFindUser.username} has received {canFindUser && this.countMyLikes(canFindUser)} likes</div>
    <Blips username={username} renderMethod="User" />
    </>)

    return canFindUser ? renderPage : "User not Found"
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