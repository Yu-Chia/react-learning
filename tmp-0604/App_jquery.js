import React from 'react'
// 要先安裝jquery 模組
// yarn add jquery或npm instal jquery
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props)
    // product = { name: string, price: numbers }
    this.state = {
      data: 0,
    }
  }

  componentDidMount() {
    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    // $('#one').on('click', () => alert('data is ' + this.state.data))

    document.getElementById('one').addEventListener('click', () => {
      alert('data is ' + this.state.data)
    })
  }

  render() {
    return (
      <>
        <button id="one">click me</button>
        <button onClick={() => this.setState({ data: 111 })}>
          change to 111
        </button>
      </>
    )
  }
}

export default App
