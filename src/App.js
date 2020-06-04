import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'

function App() {
  // todos列表
  // todo = { id: 123213, text:'買牛奶', completed: false }
  const [todos, setTodos] = useState([
    { id: 1591256594282, text: '買牛奶', completed: false },
    { id: 1591256594281, text: '買iphone', completed: true },
    { id: 1591256594283, text: '學react', completed: false },
  ])

  // 用於文字輸入框輸入新的todo
  const [text, setText] = useState('')

  //
  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const todoItemIndex = todos.findIndex((v, i) => v.id === id)
    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      setTodos(newTodos)
    }
  }

  return (
    <>
      <MyNavbar />
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">待辨事項</h1>
          <hr />

          {/* 可控表單元素必要條件: 
                1. value對應state值
                2. onChange事件對應setState(setXXX)改變值的方法 */}

          <div className="form-group">
            <label htmlFor="todoInput">輸入待辨事項</label>
            <input
              id="todoInput"
              className="form-control"
              type="text"
              value={text}
              onChange={(event) => {
                setText(event.target.value)
              }}
              onKeyPress={(event) => {
                // 處理按下 Enter鍵
                if (event.key === 'Enter' && event.target.value !== '') {
                  // 建立一個新的todo項目
                  const newTodoItem = {
                    id: +new Date(),
                    text: event.target.value,
                    completed: false,
                  }

                  // 建立新的todos陣列
                  const newTodos = [newTodoItem, ...todos]

                  // 設定新的todos，變動呈現的列表
                  setTodos(newTodos)

                  // 清空文字輸入框
                  setText('')
                }
              }}
            />
          </div>
          <div>
            <ul className="list-group">
              {todos.map((value, index) => {
                // 利用id即為加入的時間日期
                const date = new Date(value.id)

                if (value.completed) {
                  return (
                    <li
                      key={value.id}
                      className="bg-light list-group-item d-flex justify-content-between align-items-center"
                    >
                      <del>{value.text}</del>
                      <del>
                        ⌚{date.toLocaleString()}&nbsp;&nbsp;&nbsp;
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => {
                            handleCompleted(value.id)
                          }}
                        >
                          已完成
                        </button>
                      </del>
                    </li>
                  )
                }

                // 列表項目(子元素)需要唯一的key值(id值的意思)
                return (
                  <li
                    key={value.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {value.text}
                    <div>
                      ⌚{date.toLocaleString()}&nbsp;&nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                          handleCompleted(value.id)
                        }}
                      >
                        完成
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>
      <MyFooter />
    </>
  )
}

export default App
