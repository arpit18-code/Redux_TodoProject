import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const TodoSlice = createSlice({
  name: "TodoArray",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
        state = [...state, { id:uuidv4(), Text:action.payload, IsCompleted:false}]
        return state
    },
    RemoveTodo: (state, action) => {
        state = state.filter((todo)=> todo.id !== action.payload.id)
        return state
    },
    CheckTodo:(state,action) => {
        state = state.map((todo)=>{
          if(todo.id === action.payload.id){
            todo.IsCompleted = !todo.IsCompleted
          }
        })
    },
    EditTodo : (state,action) => {
        state = state.map((Todo)=>{
        if(Todo.id === action.payload.id){
          Todo.Text = action.payload.EditedText
        } 
       })
    }
  },
});

export const { AddTodo, RemoveTodo, EditTodo, CheckTodo } = TodoSlice.actions;

export default TodoSlice.reducer