import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleAddTodo = (text) => {
    setTodos([...todos, text]);
  };

  const handleUpdateTodo = (text) => {
    const updatedTodos = [...todos];
    updatedTodos[editTodo] = text;
    setTodos(updatedTodos);
    setEditTodo(null);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setEditTodo(null);
  };

  const handleEditTodo = (index) => {
    setEditTodo(index);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Todo App</h1>
        <TodoForm
          onAdd={handleAddTodo}
          onUpdate={handleUpdateTodo}
          editTodo={editTodo}
        />
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </div>
  );
}

export default App;

