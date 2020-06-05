import React, { useState } from 'react'

function TodoItemEditForm(props) {
  const [editText, setEditText] = useState(props.value.text)

  //console.log(props)
  // 先解構賦值，直接套用由props得到的變數值
  const { value, handleEditSave } = props

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-inline">
          <input
            id="todoEdit"
            className="form-control mb2"
            type="text"
            value={editText}
            onChange={(event) => {
              setEditText(event.target.value)
            }}
          />
          <button
            type="button"
            className="btn btn-info mb2"
            onClick={() => {
              handleEditSave(value.id, editText)
            }}
          >
            儲存
          </button>
        </div>
      </li>
    </>
  )
}

export default TodoItemEditForm
