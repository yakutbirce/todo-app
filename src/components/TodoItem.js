// src/components/TodoItem.js
import React from 'react';
import '../styles/TodoList.css';

function TodoItem({ todo, onDelete }) {
    return (
        <li>
            {todo}
            <button onClick={onDelete}>Sil</button>
        </li>
    );
}

export default TodoItem;
