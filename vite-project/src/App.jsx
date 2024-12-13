import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Check from './new'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This is my first vite project</h1>
      <Check/>
    </>
  )
}

export default App
