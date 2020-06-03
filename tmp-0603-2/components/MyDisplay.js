import React, { useState } from 'react'
import PropTypes from 'prop-types'

function MyDisplay(props) {
  console.log(props)
  return (
    <>
      <h1>{props.total}</h1>
    </>
  )
}
MyDisplay.propTypes = {
  total: PropTypes.string.isRequired,
}

MyDisplay.defaultProps = {
  total: '沒給值',
}

export default MyDisplay
