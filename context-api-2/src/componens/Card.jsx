import React, { useState } from 'react'
import profile from "../assets/Picsart_23-04-01_15-17-38-362.jpg"
import useTheme from '../contexts/Theme'
export default function Card() {
    const {isDark}=useTheme()
    // const handleTheme=()=>{
    //     setDark(pre=>!pre)
    // }
  return (
    <div className={`card-container ${isDark?'dark':'light'}`}>
     
      <div className="card">
        <img src={profile} alt="" width={200} height={200}/>
        <div className="card-content">
            <h3>Abdul Aziz</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam quis repellat ex recusandae itaque sequi quod fuga assumenda nostrum omnis, harum quo ratione maiores sit officia quas modi quae minus unde sunt optio.</p>
        </div>
      </div>
    </div>
  )
}
