import React from "react"

const Blip = (props) => (
  <table className="blip"><tbody>

    <tr>
      <td> {props.blip.content} </td>
      <td className="blip-right"> {props.renderPoster()} </td>
    </tr>

    <tr>
      <td>
      {props.renderLike()}
      Likes: {props.blip.likers.length}
      </td>

      <td className="blip-right">
      {props.renderDelete()}
      </td>
    </tr>

    </tbody></table>
)

export default Blip