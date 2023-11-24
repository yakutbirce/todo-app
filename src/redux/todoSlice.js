// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload];
        },
        updateTodo: (state, action) => {
            const { index, text } = action.payload;
            const updatedTodos = [...state];
            updatedTodos[index] = text;
            return updatedTodos;
        },
        deleteTodo: (state, action) => {
            const index = action.payload;
            return state.filter((_, i) => i !== index);
        },
    },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
