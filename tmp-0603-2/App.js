import React, { useState } from 'react'
import MyDisplay from './components/MyDisplay'
import MyButtons from './components/MyButtons'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <MyDisplay total={total} />
      <MyButtons
        title="+1"
        clickMethod={() => {
          setTotal(total + 1)
        }}
      />
      <MyButtons
        title="-1"
        clickMethod={() => {
          setTotal(total - 1)
        }}
      />
    </>
  )
}

export default App
