import React, { useContext } from 'react'
import useUser from '../hooks/useUser'
import UserContext from '../context/UserContext'
function Profile() {
    const {user}=useContext(UserContext)
    let conent=<div>Plzz login</div>
    // if(user==null) return <div>pllz login</div>
    // else return <div>welcome {user.username}</div>
  if(user && user.username && user.password){
    conent=<div>wlcom {user.username}</div>
  }
    return conent
}

export default Profile
