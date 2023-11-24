import React, { useState } from 'react';
import '../styles/TodoForm.css';



function TodoForm({ onAdd, onUpdate, editTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        if (editTodo === null) {
            onAdd(input);
        } else {
            onUpdate(input);
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