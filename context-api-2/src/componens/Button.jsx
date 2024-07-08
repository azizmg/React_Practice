import React from 'react'
import useTheme from '../contexts/Theme'

export default function Button() {
    const {isDark,handleTheme}=useTheme()
  return (
    <div>
     <button onClick={handleTheme}>light</button>
    </div>
  )
}
