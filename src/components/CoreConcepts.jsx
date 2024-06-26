//using destructuring in order to avoid prop.image, props.description, etc
import React from "react"
export default function CoreConcepts({ image, description, title }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
