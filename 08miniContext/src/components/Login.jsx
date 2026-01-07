import React from 'react'
import {useState, useContext} from 'react'           // Importing useState and useContext hooks from React

// useContext is used to fetch the data from UserContext and that data is used by other components

import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)        // Using useContext to get setUser function from UserContext
                                                     // setUser is used to update the user data in context. It's like sending data to context.
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
      <h2>Login</h2>

      <input type="text" 
      value={username}
      onChange={(e) => setUsername(e.target.value) }
      placeholder='username' />
      {" "}

      <input type="text" 
      value={password}
      onChange={(e) => setPassword(e.target.value) }
      placeholder='password' />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
