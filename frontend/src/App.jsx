import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the Steam Game Recommendations App</h1>
      <h2>
        <button>Click me!</button>
      </h2>
    </>
  )
}

export default App
