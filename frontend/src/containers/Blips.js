import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBlips } from '../actions/blipActions'
import { fetchUsers } from '../actions/userActions'
import Blip from '../components/Blip'

class Blips extends Component {

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchBlips();
  }

  renderMyBlips = () => { 
    let {current_user, users, blips} = this.props;
    let userObject = users.filter(user => user.id === current_user)[0];
    if (userObject) {
      let followedUserIDs = userObject.followings;
      let homePageBlips = blips.filter(blip => blip.user.id === current_user || followedUserIDs.some(user => user.id === blip.user.id ));
      return homePageBlips.map(blip => <Blip key={blip.id} content={blip.content} />)
    }
    return null
  }

  render() {
    return this.props.loading ? "Loading ..." : this.renderMyBlips()
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, blips: state.blips, loading: state.loading, current_user: state.user_id }
}

const mapDispatchToProps = dispatch => {
  return { 
    fetchBlips: () => dispatch(fetchBlips()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blips)