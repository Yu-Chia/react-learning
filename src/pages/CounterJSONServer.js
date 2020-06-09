import React, { useState, useEffect } from 'react'

function CounterJSONServer(props) {
  const [total, setTotal] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)

  async function getTotalFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    //console.log(data)
    // 設定資料
    setTotal(data.total)
  }

  async function updateTotalToSever(value) {
    // 開啟載入指示
    setDataLoading(true)

    const newTotal = { total: total + value }

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'PUT',
      body: JSON.stringify(newTotal),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newTotal))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)
    setTotal(total + value)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getTotalFromServer()
  }, [])

  // 每次total資料有變動就會3秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [total])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          updateTotalToSever(1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          updateTotalToSever(-1)
        }}
      >
        -1
      </button>
    </>
  )

  // 初始化的第一次render的判斷，擋掉會看到空白頁，初始化值的情況
  if (total === 0) return <></>

  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

export default CounterJSONServer
