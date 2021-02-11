import React from "react"

const User = (props) => (
  <div className="user_card">
    <b>{props.user.username}</b> <br />
    Followers: {props.user.followers.length} <br />
    Likes Received: {props.countMyLikes()} <br />
    {props.renderFollowButton()} {/* This will only render a Follow Button if appropriate */}
  </div>
)

export default User