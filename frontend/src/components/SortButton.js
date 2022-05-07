import React from "react"

const SortButton = ({toggle, text}) => (
  <div>
      <button onClick={toggle}>{text}</button>
</div>
)

export default SortButton