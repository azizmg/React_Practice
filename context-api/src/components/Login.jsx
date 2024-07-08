import React, { useContext, useState } from 'react'
import useUser from '../hooks/useUser'
import UserContext from "../context/UserContext"
function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    console.log('u',username)
    console.log('p',password)
    // const {setUser}=useUser()
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
      <h1>Login plzz</h1>
      <input type="text" value={username} onChange={(e)=>{
        setUsername(e.target.value)
      }}/>
      <input type="password"value={password} onChange={(e)=>{
             setPassword(e.target.value)
      }}/>
      <button  onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
