import React, { useState } from 'react'

function MyButtons(props) {
  //   console.log(props)
  return (
    <>
      <button onClick={props.clickMethod}>{props.title}</button>
    </>
  )
}

export default MyButtons
