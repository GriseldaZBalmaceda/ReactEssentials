import React, { useState } from "react"
import TabButton from "./TabButton"
import { EXAMPLES } from "../../data"
import Section from "./Section"
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("")
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton)
  }
  return (
    <Section title={"Examples"} id="examples">
      <menu>
        <TabButton
          selected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          selected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          Jsx
        </TabButton>
        <TabButton
          selected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          selected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {selectedTopic ? (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      ) : (
        <p>Please select a topic</p>
      )}
    </Section>
  )
}
