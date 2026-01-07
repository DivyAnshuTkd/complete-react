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






// Simple Example
// How you use the component
// <UserContextProvider>
//   <App />
// </UserContextProvider>


// Everything between the opening and closing tags is children.

// So here:

// children = <App />

// What React Actually Does

// When React sees:

// <UserContextProvider>
//   <App />
// </UserContextProvider>


// What is children in React?

// children is a special prop that represents whatever you put inside a component when you use it.

// That’s it in one line.

// Simple Example
// How you use the component
// <UserContextProvider>
//   <App />
// </UserContextProvider>


// Everything between the opening and closing tags is children.

// So here:

// children = <App />

// What React Actually Does

// When React sees:

// <UserContextProvider>
//   <App />
// </UserContextProvider>


// It internally turns it into something like:

// UserContextProvider({ children: <App /> })


// So in your code:

// const UserContextProvider = ({ children }) => {


// You are simply receiving that children prop.

// Why children is Used Here

// In your code:

// <UserContext.Provider value={{ user, setUser }}>
//   {children}
// </UserContext.Provider>


// This means:

// “Wrap all these child components with UserContext.Provider so they can access the context.”

// If you remove {children}, nothing inside the provider will render.