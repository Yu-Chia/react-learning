import React, { useState } from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  handleClickAfterSecond = () => {
    setTimeout(() => {
      this.setState({ total: this.state.total - 1 })
    }, 1000)
  }

  handleClick = () => {
    this.setState({ total: this.state.total + 1 })
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            this.handleClick()
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.handleClickAfterSecond()
          }}
        >
          -1
        </button>
      </>
    )
  }
}

export default App
