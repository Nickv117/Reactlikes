import React, { useState } from "react"

export function Likes() {
  const [Like, likesUpdate] = useState(0)
  const Pluralize = (Like, like, suffix = "s") =>
    `${Like} ${like}${Like !== 1 ? suffix : ""}`

  function likesCount(e) {
    e.preventDefault()
    likesUpdate(Like + 1)
  }

  return <button onClick={likesCount}>{Pluralize(Like, "like")}</button>
}

export default Likes
