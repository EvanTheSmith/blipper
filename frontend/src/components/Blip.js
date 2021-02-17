import React from "react"

const Blip = (props) => (
  <div className="blip">
    "{props.blip.content}"<br />
    {props.renderLike()}
    Likes: {props.blip.likers.length}
    {props.renderPoster()}
  </div>
)

export default Blip