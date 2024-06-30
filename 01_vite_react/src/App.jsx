import { useState } from 'react'

import Test from "./Test"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Test/>
    <div>
      <h1>App</h1>
    </div>
    </>
  )
}

export default App
