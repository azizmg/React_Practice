import React, { useContext } from 'react'
import { useState } from 'react'
import userContext from '../context/UserContext'
function useUser() {
    const {setUser}=useContext(userContext)
  return   {setUser}
}

export default useUser
