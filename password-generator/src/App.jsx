import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [numberAllowd, setNumber] = useState(false)
  const [characterAllowd, setCharacter] = useState(false)

  const pssordRef=useRef(null)
  const password_generator=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numberAllowd)str+='0123456789'
  if(characterAllowd)str+='!#%&*$@/'
  console.log('ll',length)
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
   
    setPassword(pass)
  },[numberAllowd,characterAllowd,length,setPassword])
 console.log('hhhhhh')
  useEffect(()=>{

    password_generator()
  },[numberAllowd,characterAllowd,length])


  const copPassword=()=>{
    console.log(pssordRef.current)
    pssordRef.current?.select()
    pssordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className='main-container'>
        <div className='container'>
          <div className='input_bar'>
          <input 
          type="text"
           style={{outline:'none',width:"100%"}}
            value={password}
            ref={pssordRef}
            />
          <button style={{backgroundColor:'blue',outline:'none',color:'white',border:'none',cursor:'pointer',fontWeight:'bold'}}
          onClick={copPassword}
          >copy</button>
          </div>
          <div className='actions'>
            <input type="range"
            min={6}
            max={100}
            value={length}
             onChange={(e)=>setLength(e.target.value)}/>
            <label htmlFor=""style={{color:'yellow',marginLeft:'8px'}}>Length:[{length}]</label>
            <input type="checkbox"  defaultChecked={characterAllowd} onChange={()=>{
              setCharacter((prev)=>!prev)
            }}/>
            <label htmlFor=""style={{color:'yellow',marginLeft:'8px'}}>With Characters</label>
            <input type="checkbox" defaultChecked={numberAllowd} onChange={()=>{
              setCharacter((prev)=>!prev)
            }}/>
            <label htmlFor=""style={{color:'yellow',marginLeft:'8px'}}>With symbols</label>
          </div>
          </div>
      </div>
      
    </>
  )
}

export default App
