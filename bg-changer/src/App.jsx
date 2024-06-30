import { useState } from "react"


function App() {
  const [color,setColor]=useState('cyan')
  const bgColor=(bg)=>{
    
  }
  return (
    <>
    <div className="h-screen w-full"
    style={
      {backgroundColor:color}
    }>
      <div className="buttonContainer"> 
        <div className="btns  bg-white rounded-lg">
          <button className="rounded-xl px-3  py-1 mx-3 text-white" onClick={()=>setColor('red')} style={
            {backgroundColor:"red"}
          }>Red</button>
          <button  className="rounded-xl px-3 py-1 mx-3 text-white" onClick={()=>setColor('green')}  style={
            {backgroundColor:"green"}}>Green</button>
          <button  className="rounded-xl px-3  py-1mx-3 text-white" onClick={()=>setColor('blue')}style={
            {backgroundColor:"blue"}}>Blue</button>
          <button className="rounded-xl px-3 py-1 mx-3 text-black" onClick={()=>setColor('yellow')}style={{backgroundColor:"yellow"}}>Yellow</button>
          <button  className="rounded-xl px-3 py-1 mx-3 text-white" onClick={()=>setColor('olive')}  style={
            {backgroundColor:"olive"}}>Olive</button>
          <button  className="rounded-xl px-3  py-1 mx-3 text-black" onClick={()=>setColor('pink')}style={
            {backgroundColor:"pink"}}>Pink</button>
          <button className="rounded-xl px-3 py-1 mx-3 text-white" onClick={()=>setColor('purple')}style={{backgroundColor:"purple"}}>Purple</button>
          <button  className="rounded-xl px-3 py-1 mx-3 text-black" onClick={()=>setColor('lavender')}  style={
            {backgroundColor:"lavender"}}>Lavender</button>
          <button  className="rounded-xl px-3  py-1mx-3 text-black" onClick={()=>setColor('white')}style={
            {backgroundColor:"white"}}>White</button>
          <button className="rounded-xl px-3 py-1 mx-3 text-white" onClick={()=>setColor('gray')}style={{backgroundColor:"gray"}}>Gray</button>
          <button className="rounded-xl px-3 py-1 mx-3 text-white" onClick={()=>setColor('black')}style={{backgroundColor:"black"}}>Black</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
