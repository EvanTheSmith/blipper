import React from "react"

const User = (props) => (
  <div className="user_card">
    <b>{props.user.username}</b> <br />
    Followers: {props.user.followers.length} <br />
    {props.renderFollowButton()} 
    {/* ^ This will only render a Follow Button if set conditions are met: 
    - This user is not the active user (cannot follow self)
    - The active user is not already following this user
    */}
  </div>
)

export default User