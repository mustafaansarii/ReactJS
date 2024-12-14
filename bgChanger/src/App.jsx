import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-100' style={{background:color}}>
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-3xl' style={{background:"red"}}> red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-3xl' style={{background:"green"}}> green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 rounded-3xl' style={{background:"blue"}}> blue</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 rounded-3xl text-white' style={{background:"black"}}> black</button>
          <button  onClick={()=>setColor("white")} className='outline-none px-4 rounded-3xl border' style={{background:"white"}}> white</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
