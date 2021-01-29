import React from "react"

const User = (props) => (
  <div className="user_card">
    <b>{props.user.username}</b> <br />
    Followers: {props.user.followers.length} <br />
    {props.renderFollow()}
  </div>
)

export default User