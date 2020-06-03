import React, { useState, useEffect } from 'react'

// 所有狀態與更動狀態均來自於上層父母元件
function MyTestFunc(props) {
  const [total, setTotal] = useState(100)

  // For componentDidMount
  useEffect(() => {
    console.log('MyTestFunc Child componentDidMount')
  }, [])

  // For componentDidUpdate
  useEffect(() => {
    // Your code here
    console.log('MyTestFunc Child componentDidUpdate')
  }, [total])

  useEffect(() => {
    // componentWillUnmount
    return () => {
      // Your code here
      console.log('MyTestFunc Child componentWillUnmount')
    }
  }, [])

  return (
    <>
      <div onClick={() => setTotal(total + 1)}>{total}</div>
    </>
  )
}

export default MyTestFunc
