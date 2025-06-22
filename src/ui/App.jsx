import { useState } from 'react'
import reactLogo from '../assets/react.svg'
// import viteLogo from '../vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const handleFile = async () => {
    console.log("React: calling readFile"); // <-- frontend log
    const text = await window.api.readFile();
    console.log("React: got result", text); // <-- result log
    setText(text || "No text received");
  };
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("React: calling consoleLog", value); // <-- frontend log
    window.api.consoleLog(value); // <-- call to main process
  };
  return (
    <>
      <div>

        <a href="https://vite.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleFile}>
          Read File
        </button>
        <p>{text} i got</p>
        <input type="text" onChange={handleChange} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
