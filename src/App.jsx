import { useState } from 'react'
import './App.css'
import Bgchanger from './Bgchanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Bgchanger/>
    </>
  )
}

export default App
