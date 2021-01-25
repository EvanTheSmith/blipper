import React from "react"

const User = (props) => (
  <div className="user_card">
    Username: {props.user.username}
  </div>
)

export default User