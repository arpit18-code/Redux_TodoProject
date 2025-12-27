import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../Slices/TodoSlice'

export const Store = configureStore({
    reducer:{
        TodoArray:TodoReducer
    }
})