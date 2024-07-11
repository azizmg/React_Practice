import { createContext, useContext } from "react";

export  const TodoContext=createContext({
    todos:[{
        id:1,
        todo:'msg'
    }],
    AddTodo:(todo)=>{},
    // UpdateTodo:(id)=>{},
    DeleteTodo:(id)=>{}
})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoContextProvider=TodoContext.Provider