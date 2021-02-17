import React from "react"

const Blip = (props) => (
  <div className="blip">
    "{props.blip.content}"<br />
    {props.renderLike()}
    Likes: {props.blip.likers.length} / Posted by: {props.blip.user.username}
  </div>
)

export default Blip