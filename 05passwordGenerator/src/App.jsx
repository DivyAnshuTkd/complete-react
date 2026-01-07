import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // useRef hook to keep track of the latest values of length, numberAllowed, and charAllowed without causing re-renders
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
 
    if(numberAllowed == true)
    {
      str = str + "0123456789"
    }

    if(charAllowed == true)
    {
      str = str + "!@#$%^&*-_+=[]{}~`"
    }

    for(let i = 1; i <= length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1);    // after * with str.length, Now range becomes: 1 to str.length    // generates a random index to pick a character from str
      pass = pass + str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20); // For mobile devices
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(()=> { 
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input                                        // ✅ The DOM element is the input field
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref = {passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className = 'flex items-center gap-x-1'>
            <input 
            type="range" 
            min = {6}
            max = {100}
            value={length}
             className="cursor-pointer"
             onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className = 'flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);       // callback function to toggle numberAllowed state
              }}
            />
            <label>Numbers</label>
          </div>
          <div className = 'flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);   // callback function to toggle charAllowed state
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;






// You cannot call passwordGenerator() directly because React re-runs the component many times, 
// and calling it directly would cause uncontrolled re-renders or infinite loops.



// State changes → re-render → useEffect → passwordGenerator
// useEffect is the right place to call passwordGenerator because it runs after the component has rendered,
// ensuring that the password is generated only when the relevant state variables change.


// Re-render means React calls the App() function again.