import React, { useState, useEffect } from 'react'

export default function AppFunc(props) {
  const [value, setValue] = useState('')

  useEffect(() => {
    // Your code here
    console.log('componentDidUpdate', value)
  }, [value])

  const handleChange = (event) => {
    // 先保存會更動後的值
    const v = event.target.value

    // 設置給狀態
    setValue(v)

    // 後面使用這個先保存的值
    console.log('handleChange', v)
  }

  return (
    <>
      <select onChange={handleChange} value={value}>
        <option value="男一" key={1}>
          男一
        </option>
        <option value="女2" key={2}>
          女2
        </option>
        <option value="React" key={3}>
          React
        </option>
      </select>
      <h1>{value}</h1>
    </>
  )
}
