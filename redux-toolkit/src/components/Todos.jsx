import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
export default function Todos() {
    const todos=useSelector(state=>state.todos)
    
  return (
    <div>
        <ul>
      {todos.map(todo=>(
        <li key={todo.id}>{todo.text}</li>
      
      ))}

        </ul>
    </div>
  )
}
