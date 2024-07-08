import { useState } from 'react'

import './App.css'
import Card from './componens/Card'
import Button from './componens/Button'
import { ThemeContextProvider } from './contexts/Theme'

function App() {
  
  const [isDark,setDark]=useState('')
  const handleTheme=()=>{
      setDark(pre=>!pre)
  }
  return (
    <>
    <ThemeContextProvider value={{isDark,setDark,handleTheme}}> 
    <Button/>
     <Card/>
    </ThemeContextProvider>
    </>
  )
}

export default App
