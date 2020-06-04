import React, { useState, useEffect } from 'react'

function MyTimerFunc(props) {
  const [date, setDate] = useState(new Date())
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      window.clearInterval(timerID)
    }
  }, [date])

  // 錯誤用法
  // 需要改用useInterval
  // 參考：https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/
  const handleClickEverySeconds = (value) => {
    setInterval(() => {
      console.log('handleClickEverySeconds')
      setTotal(total + value)
    }, 1000)
  }

  return (
    <>
      <h2>{date.toLocaleTimeString()}</h2>
      <h1 onClick={() => handleClickEverySeconds(1)}>{total}</h1>
    </>
  )
}

export default MyTimerFunc
