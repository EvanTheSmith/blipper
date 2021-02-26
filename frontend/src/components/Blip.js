import React from "react"

const Blip = (props) => (
  <table className="blip">

    <tr>
      <td>"{props.blip.content}"</td>
      <td>{props.renderPoster()}</td>
    </tr>

    <tr>
      <td>
      {props.renderLike()}
      Likes: {props.blip.likers.length}
      </td>

      <td>
      {props.renderDelete()}
      </td>
    </tr>

  </table>
)

export default Blip