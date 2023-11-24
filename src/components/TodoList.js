// src/components/TodoList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';
import '../styles/TodoList.css';
import TodoItem from './TodoItem';

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleDeleteTodo = (index) => {
        dispatch(deleteTodo(index));
    };

    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    onDelete={() => handleDeleteTodo(index)}
                />
            ))}
        </ul>
    );
}

export default TodoList;
