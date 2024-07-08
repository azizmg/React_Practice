import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from "./context/UserContextProvider"
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>hello react</h1> */}
    <UserContextProvider>
      <h2>yress:</h2>
      <Home/>
      <Login/>
      <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
