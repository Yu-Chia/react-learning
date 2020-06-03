import React, { useState } from 'react'
import MyTextInput from './components/MyTextInput'
import MyTextDisplay from './components/MyTextDisplay'

function App() {
  const [nameFromChild, setNameFromChild] = useState('defaultuser')
  return (
    <>
      <MyTextDisplay text={nameFromChild} />
      <MyTextInput
        value={nameFromChild}
        onChange={(event) => setNameFromChild(event.target.value)}
        // sendNameToMe={(text) => {
        //   setNameFromChild(text)
        // }}
      />
    </>
  )
}

export default App
