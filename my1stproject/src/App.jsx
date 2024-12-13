import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter,setCount]=useState(10)
  function addValue(){
    counter = counter+1
    setCount(counter)
  }
  function removeValue(){
    counter = counter-1
    if(counter<0){
      counter=0
    }
    setCount(counter)
  }
   
  return (
    <>
    <h1>React with vite</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}> add value</button> <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
