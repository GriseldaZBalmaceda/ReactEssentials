import React, { useState } from "react"

import { CORE_CONCEPTS, EXAMPLES } from "../data"
import Header from "./components/Header/Header"
import CoreConcepts from "./components/CoreConcepts"
import TabButton from "./components/TabButton"
function App() {
  const [selectedTopic, setSelectedTopic] = useState("")
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              selected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              selected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              selected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              selected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
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
        </section>
      </main>
    </div>
  )
}

export default App
