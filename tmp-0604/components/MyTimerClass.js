import React from 'react'

class MyTimerClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), total: 0 }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleClickEverySeconds = (value) => {
    setInterval(() => {
      console.log('handleClickEverySeconds')
      this.setState({ total: this.state.total + value })
    }, 1000)
  }

  render() {
    return (
      <>
        <h1 onClick={() => this.handleClickEverySeconds(1)}>
          {this.state.total}
        </h1>
        <h1>MyTimerClass: {this.state.date.toLocaleTimeString()}</h1>
      </>
    )
  }
}

export default MyTimerClass
