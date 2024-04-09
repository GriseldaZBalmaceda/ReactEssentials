import React from "react"

export default function TabButton({ children, onSelect, selected, ...props }) {
  return (
    <li>
      <button className={selected ? "active" : null} {...props}>
        {children}
      </button>
    </li>
  )
}
