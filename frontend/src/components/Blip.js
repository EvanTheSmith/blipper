import React from "react"

const Blip = (props) => (
  <div className="blip">
    "{props.blip.content}" - {props.blip.user.username}
  </div>
)

export default Blip