import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      {/* 
        Wrapping components with UserContextProvider
        so that all child components can access the context.
      */}

      <h1>React with Chai and Context is important</h1>

      <Login />
      {/*
        Login component handles user login.
        It can access setUser from context to update user data.
      */}

      <Profile />
      {/*
        Profile component consumes user data from context
        to display logged-in user information.
      */}
    </UserContextProvider>
  )
}

export default App
