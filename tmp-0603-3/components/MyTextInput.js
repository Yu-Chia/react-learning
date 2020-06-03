import React, { useState } from 'react'

function MyTextInput(props) {
  //   const [name, setName] = useState('')

  return (
    <>
      {/* <input type="text" value={props.value} onChange={props.onChange} /> */}
      <input type="text" {...props}></input>

      {/* <button
        onClick={() => {
          props.sendNameToMe(name)
        }}
      >
        送給父母元件
      </button> */}
    </>
  )
}

export default MyTextInput
