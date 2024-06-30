import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
const increaser=()=>{
  if(count<10){
    // setCount(count=>count+1)
    setCount(count+1)
  }
 
}
const decreaser=()=>{
  if(count>0){
    // count=0
    setCount(count-1)
  }
 
} 

  return (
    <>
      <h1>Counter App</h1>
      <h3>count:{count}</h3>
      <button onClick={
        increaser
      }
      >click to increase <small style={{color:'green'}}>{count===10?'Full':''}</small> </button>
      <br/>
      <button onClick={
       decreaser
      }
      >click to decrease <small style={{color:'red'}}>{count===0?'Empty':''}</small></button>
    </>
  )
}

export default App
