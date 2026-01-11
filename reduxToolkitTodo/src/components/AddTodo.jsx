import React, {useState} from 'react'                // useState is a React hook that allows us to add state to functional components.
import {useDispatch} from 'react-redux'              // useDispatch is a hook that gives access to the dispatch function from the Redux store.
import {addTodo} from '../features/todo/todoSlice'   // Importing the addTodo action creator to dispatch actions to add new todos.

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()                   // dispatch is used to send value

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))                 // Dispatching the addTodo action with the current input value as payload.
        setInput('')                             // Clear the input field after adding the todo.
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo