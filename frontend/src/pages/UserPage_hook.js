// an attempt to convert UserPage from a React Class to a React Hook :: WIP
///////////////////////////////////////////////////////////////////////////

import React from 'react'
import { useSelector } from 'react-redux';
import Blips from '../containers/Blips'
import { fetchUserBlips } from '../actions/blipActions' 
import { fetchUsers } from '../actions/userActions' 
import { useEffect, useParams } from 'react-router-dom'


function UserPage (props) {

  const localState = useSelector((state) => ({ 
    users: state.users, 
    blips: state.blips,
    loading: state.loading, 
    current_user: state.user_id 
  }))

  useEffect(() => { // Replaces componentDidMount
    // Fetch Users (if not already in Redux) // 
    props.users.length || props.fetchUsers();
    // Fetch Blips for the Current User (if not already in Redux) //
    if (!props.blips.some(blip => blip.user.id === props.current_user )) {
    props.fetchUserBlips(props.current_user); }
    }, []
  )

  const countMyLikes = (user) => {
    let myBlips = props.blips.filter(blip => blip.user.id === user.id && blip.likers.length !== 0);
    let myLikes = myBlips.map(blip => blip.likers).flat(1);
    // OPTIONAL : filter own likes
    // let removeOwnLikes = myLikes.filter(liker => liker.id !== user.id);
    return myLikes.length;
  }

  const renderIfValidUser = () => {
    // let { username } = this.props.match.params; // Grab username from URL params

    let canFindUser = props.users.filter(user => user.username === username)[0];

    // If the username in the URL params isn't a valid user, stop everything
    if (!canFindUser) {return "Invalid username entered into address bar"} 

    let user = canFindUser || {followers: []}; // prevents .username glitches below if cannot find user
    let users_blips = props.blips.filter(blip => blip.user.id === user.id);

    return (<>
    <br /><div> Welcome to {user.username}'s profile — 
      Followers: {user.followers.length} / 
      Blips: {users_blips.length} / 
      Likes: {countMyLikes(user)}
    </div><br />
    <Blips username={username} renderMethod="User" />
    </>)
  }


    return props.loading ? "Loading ..." : renderIfValidUser()
}

const mapStateToProps = state => ({ 
  users: state.users, 
  blips: state.blips,
  loading: state.loading, 
  current_user: state.user_id 
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUserBlips: (user_id) => dispatch(fetchUserBlips(user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);