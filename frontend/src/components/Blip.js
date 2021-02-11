import React from "react"

const Blip = (props) => (
  <div className="blip">
    "{props.blip.content}" - {props.blip.user.username} <br />
    Likes: {props.blip.likers.length} <br />
    {props.renderLike()}
  </div>
)

export default Blip