import React from 'react'

function Addform(props) {
  console.log(props)
  const { text, setText, todos, setTodos } = props
  return (
    <>
      <div className="form-group">
        <label htmlFor="todoInput">輸入待辨事項</label>
        <input
          id="todoInput"
          className="form-control"
          type="text"
          value={text}
          placeholder="輸入完成後enter"
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
    </>
  )
}

export default Addform
