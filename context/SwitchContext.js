import React, { useState, createContext } from 'react'

const SwitchContext = createContext()

const SwitchProvider = ({ children }) => {
  const [toggled, setToggled] = useState(false)

  return (
    <SwitchContext.Provider value={[toggled, setToggled]}>
      {children}
    </SwitchContext.Provider>
  )
}

export { SwitchContext, SwitchProvider }
