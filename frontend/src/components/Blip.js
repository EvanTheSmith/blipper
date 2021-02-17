import React from "react"

const Blip = (props) => (
  <div className="blip">
    "{props.blip.content}" - {props.blip.user.username} <br />
    {props.renderLike()}
    Likes: {props.blip.likers.length} <br />
  </div>
)

export default Blip