import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import Signin from './component/Login'
import Pricing from './component/pricing'
import StudentMarksTable from './component/Student'
const students = [
  { id: 1, name: "Alice", marks: 85 },
  { id: 2, name: "Bob", marks: 78 },
  { id: 3, name: "Charlie", marks: 92 },
  { id: 4, name: "Daisy", marks: 88 },
];

function App() {
  return (
    <>
    <StudentMarksTable id={students[0].id} name={students[0].name} marks={students[0].marks} />
    </>
  );
}

export default App
