import React from 'react'

class MyTest extends React.Component {
  // Mounting(掛載階段) 只會呼叫一次
  constructor(props) {
    // 呼叫React.Component建構式
    super(props)

    //設定state初始值
    this.state = {
      total: 0,
    }
    console.log('Child constructor')
  }

  // Mounting(掛載階段)，呈現後只會呼叫一次
  componentDidMount() {
    console.log('Child componentDidMount')
  }

  // 更新階段，每次更新後會呼叫一次
  componentDidUpdate() {
    console.log('Child componentDidUpdate')
  }

  render() {
    console.log('Child render')
    return (
      <>
        <h1>MyTest</h1>
      </>
    )
  }
}

export default MyTest
