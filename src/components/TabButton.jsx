import React from "react"

export default function TabButton({ children, onSelect, selected }) {
  return (
    <li>
      <button className={selected && "active"} onClick={onSelect}>
        {children}
      </button>
    </li>
  )
}
