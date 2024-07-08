import React, { useContext } from 'react'
import userContext from "../context/UserContext"
import useUser from '../hooks/useUser'
function Home() {
    const {user}=useUser()
  return (
    <div>
      hey hom:{user}
    </div>
  )
}

export default Home
