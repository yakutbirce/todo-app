// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todoSlice';
import '../styles/TodoForm.css';

function TodoForm({ editTodo }) {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        if (editTodo === null) {
            dispatch(addTodo(input));
        } else {
            dispatch(updateTodo({ index: editTodo, text: input }));
        }

        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">{editTodo === null ? 'Ekle' : 'Güncelle'}</button>
        </form>
    );
}

export default TodoForm;
