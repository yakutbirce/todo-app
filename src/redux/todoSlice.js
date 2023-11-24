// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
        editedTodo: null,
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter((_, index) => index !== action.payload);
        },
        startEditTodo: (state, action) => {
            state.editedTodo = { ...state.list[action.payload], index: action.payload };
        },
        updateTodo: (state, action) => {
            if (state.editedTodo) {
                state.list[state.editedTodo.index] = action.payload;
                state.editedTodo = null;
            }
        },
    },
});

export const { addTodo, deleteTodo, startEditTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
