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
    let { username } = this.props.match.params;
    let the_user = this.props.users.filter(user => user.id === this.props.current_user)[0];
    let canFindUser = this.props.users.filter(user => user.username === username)[0];
    let success_jsx = (<>
    <div> {the_user && the_user.username} has received {this.countMyLikes(the_user)} likes</div>
    <Blips username={username} renderMethod="User" />
    </>)

    return canFindUser ? success_jsx : "User not Found"
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