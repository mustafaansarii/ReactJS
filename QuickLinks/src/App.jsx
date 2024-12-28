import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileLinkTree from './Components/ProfileLinkTree'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProfileLinkTree/>
    </>
  )
}

export default App
