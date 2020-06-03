import React, { useState } from 'react'
import MyTextInput from './components/MyTextInput'

function App() {
  const [nameFromChild, setNameFromChild] = useState('user')
  return (
    <>
      <h1>您好，{nameFromChild}</h1>
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
