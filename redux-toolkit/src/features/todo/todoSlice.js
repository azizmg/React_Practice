import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:'Hello todo list'}]
}

export const todoSlice= createSlice({
name:'todo',
initialState,
reducers:{
    addTodo:(state,action)=>{
        console.log('action:',action)
        console.log('state:',state)
        const todo={
             id:nanoid,
             text:action.payload
        }
        state.todos.push(todo)
    }
}
})
export const {addTodo} = todoSlice.actions

export default todoSlice.reducer