import React, { Component } from 'react'
import { connect } from 'react-redux';
import { likeBlip, unlikeBlip, deleteBlip } from '../actions/blipActions'
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
    return renderMethod === "Home" && username;
    // only render poster if renderMethod is Home
  }

  renderDelete = (blip) => () => { // only render Delete Button if current user posted blip
    let button = <button onClick={() => this.props.deleteBlip(blip.id)}>Delete Blip</button>
    return (this.props.current_user === blip.user.id) && button;
  }

  renderMyBlips = () => { 
    let {current_user, users, blips, renderMethod} = this.props;
    let userObject = users.filter(user => user.id === current_user)[0] || {};
    let renderArray; // this variable will be rewritten depending on whether the Home or a User page is rendering

      if (renderMethod === "Home") {
        let followedUserIDs = userObject.followings;
        let homePageBlips = blips.filter(blip => blip.user.id === current_user || followedUserIDs.some(user => user.id === blip.user.id ));
        renderArray = homePageBlips;
      } else if (renderMethod === "User") {
        let page_user = users.filter(user => user.username === this.props.username)[0];
        let userPageBlips = blips.filter(blip => blip.user.id === page_user.id);
        renderArray = userPageBlips; 
      }
    
    return renderArray.map(blip => <Blip 
      key={blip.id} 
      renderMethod={renderMethod} 
      blip={blip} 
      renderLike={this.renderLike(blip)} 
      renderPoster={this.renderPoster(blip.user.username, renderMethod)} 
      renderDelete={this.renderDelete(blip)} 
    />);
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
  unlikeBlip: payload => dispatch(unlikeBlip(payload)),
  deleteBlip: payload => dispatch(deleteBlip(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Blips)