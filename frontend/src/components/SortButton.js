import React from "react"

const SortButton = (props) => (
  <div>
      <button onClick={props.toggle}>{props.text}</button>
</div>
)

export default SortButton