import React, { Component } from 'react'
import { connect } from 'react-redux';
import { likeBlip, unlikeBlip } from '../actions/blipActions'
import Blip from '../components/Blip'

class Blips extends Component {

  renderLike = (this_blip) => () => {
    let notAlreadyLiked = !(this_blip.likers.find(liker => liker.id === this.props.current_user));
    let star_url = notAlreadyLiked ? '/star_notliked.png' : '/star_liked.png';
    return <img onClick={this.handleLike(notAlreadyLiked, this_blip.id, this.props.current_user)} className="blip_star" alt="blipper like star" src={star_url} />
  }

  handleLike = (notAlreadyLiked, this_blip_id, current_user_id) => () => {
    let actionType = () => { return notAlreadyLiked ? this.props.likeBlip : this.props.unlikeBlip }
    actionType()({blip: this_blip_id, user: current_user_id});
  }

  renderPoster = (username, renderMethod) => () => {
    return renderMethod === "Home" && ` / Posted by: ${username}`;
  }

  renderMyBlips = () => { 
    let {current_user, users, blips, renderMethod} = this.props;
    let userObject = users.filter(user => user.id === current_user)[0];
    let renderArray; // this array will be rewritten depending on whether the Home or a User page is rendering
    if (userObject) {
      if (renderMethod === "Home") {
        let followedUserIDs = userObject.followings;
        let homePageBlips = blips.filter(blip => blip.user.id === current_user || followedUserIDs.some(user => user.id === blip.user.id ));
        renderArray = homePageBlips;
      }
      else if (renderMethod === "User") {
        // let userPageID; // declare the variable here to prevent bugs
        // let canFindUser = users.filter(user => user.username === this.props.username)[0];
        // If user can be found via username, grab the ID. If not, return the below sentence to inform user \/
        // if (canFindUser) {userPageID = canFindUser.id} else {return "Incorrect username entered in address bar"}
        let userID = users.filter(user => user.username === this.props.username)[0].id;
        let userPageBlips = blips.filter(blip => blip.user.id === userID);
        renderArray = userPageBlips; 
      }
      return renderArray.map(blip => <Blip 
        key={blip.id} 
        renderMethod={renderMethod} 
        blip={blip} 
        renderLike={this.renderLike(blip)} 
        renderPoster={this.renderPoster(blip.user.username, renderMethod)} />);
    }
    return null // returns null as a default if userObject wasn't truthy
  }

  render() {
    return this.renderMyBlips()
  }
}

const mapStateToProps = (state) => ({
  users: state.users, 
  blips: state.blips, 
  loading: state.loading, 
  current_user: state.user_id
})

const mapDispatchToProps = dispatch => ({ 
  likeBlip: payload => dispatch(likeBlip(payload)),
  unlikeBlip: payload => dispatch(unlikeBlip(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Blips)