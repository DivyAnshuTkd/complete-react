import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)           // useSelector is used to receive values
  const dispatch = useDispatch()

  // 🆕 Local state for editing
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleUpdate = (id) => {
    if (!editText.trim()) return
    dispatch(updateTodo({ id, text: editText }))            // dispatching the updateTodo action with id and new text
    setEditId(null)
    setEditText('')
  }

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Todo text OR input */}
            {editId === todo.id ? (                 // this editId comes when we click on edit button and this todo.id is the id of the current todo item in the map function
              <input
                className="bg-zinc-700 text-white px-2 py-1 rounded outline-none"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            {/* Icons */}
            <div className="flex gap-2 ml-auto">
              {/* Delete */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-3 hover:bg-red-600 rounded cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79"
                  />
                </svg>
              </button>

              {/* Edit / Save */}
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-3 hover:bg-green-600 rounded cursor-pointer"
                >
                  ✅
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id)
                    setEditText(todo.text)
                  }}
                  className="text-white bg-blue-500 border-0 py-1 px-3 hover:bg-blue-600 rounded cursor-pointer"
                >
                  ✏️
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
