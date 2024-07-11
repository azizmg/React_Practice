import React from 'react'
import { useTodo } from '../contexts'

export default function TodoItem({todo}) {
   const {DeleteTodo}=useTodo()
  return (
    <div className='item-box'>
      {todo.todo}
      <button onClick={()=>{DeleteTodo(todo.id)}  }>dele</button>
    </div>
  )
}
