import React from 'react'
import TodoItem from './TodoItem'
import TodoItemEditForm from './TodoItemEditForm'

function TodoList(props) {
  //console.log(props)
  const {
    todos,
    handleCompleted,
    handleDelete,
    handleEditedToggle,
    handleEditedSave,
  } = props

  console.log(todos)

  return (
    <>
      <div>
        <ul className="list-group">
          {todos.map((value, index) => {
            if (value.edited) {
              return (
                <TodoItemEditForm
                  key={value.id}
                  value={value}
                  handleEditSave={handleEditedSave}
                />
              )
            }
            // 改用TodoItem
            return (
              <TodoItem
                key={value.id}
                value={value}
                handleCompleted={handleCompleted}
                handleEditedToggle={handleEditedToggle}
                handleDelete={handleDelete}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TodoList
