import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContextProvider } from './contexts'
function App() {
  // const [count, setCount] = useState(0)
  const [todos,setTodos]=useState([])

const map= todos.map(todf=>{
  return todf
})
console.log('map',map)
const filter= todos.filter(todq=>{
  return todq
})
console.log("f")

       const AddTodo=(todo)=>{
        setTodos((prev)=>[{id:Date.now(),...todo},...prev])
       }
     const DeleteTodo=(id)=>{
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
     }

     useEffect(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
       
          const parsedTodos = JSON.parse(storedTodos);
          if (parsedTodos && parsedTodos.length > 0) {
            setTodos(parsedTodos);
          }
      }
    }, []);
    
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
  return (
    <TodoContextProvider value={{todos,AddTodo,DeleteTodo}}>
      <div className={`card-container`}>
     <div className="card">
         <h1>Manage Your Todos</h1>
         <div className="todo-form">
          <TodoForm/>
         </div>
         <div className="todo-items">
          {todos.map((todo)=>(
           <div  key={todo.id}  className='item'>
              <TodoItem todo={todo}/>
            </div>
          ))} 
         </div>
     </div>
   </div>
    </TodoContextProvider>
  )
}

export default App
