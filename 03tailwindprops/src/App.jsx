import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)    // useState is a react hook which helps to create a state variable in functional component. Here count is the state variable and setCount is the function to update the state variable.

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
  Tailwind is Working! 🚀🔥
</h1>
      <Card username="Divyanshu" btnText="click me"/>
      <Card username="chaiaurcode" btnText="visit me"/>      
    </>
  )
}

export default App



// React:

// Executes first Card

// Executes second Card

// Combines their JSX output

// Renders both into the DOM