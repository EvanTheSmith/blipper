import React from "react"

const Blip = (props) => (
  <table className="blip"><tbody>

    <tr>
      <td> {props.blip.content} </td>
      <td className="blip-right"> 
      {props.renderPoster()} {/* render the name of the user who posted this blip if we are currently on the Home page */}
      </td>
    </tr>

    <tr>
      <td>
      {props.renderLike()}
      Likes: {props.blip.likers.length} {/* count the number of likes the blip has received and display */}
      </td>

      <td className="blip-right">
      {props.renderDelete()} {/* render the delete button IF the current user is the creator of this blip */}
      </td>
    </tr>

    </tbody></table>
)

export default Blip