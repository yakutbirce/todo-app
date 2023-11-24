import React from 'react';
import '../styles/TodoList.css';
import TodoItem from './TodoItem';



function TodoList({ todos, onDelete, onEdit }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    onDelete={() => onDelete(index)}
                    onEdit={() => onEdit(index)}
                />
            ))}
        </ul>
    );
}

export default TodoList;