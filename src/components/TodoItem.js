import React from 'react';




function TodoItem({ todo, onDelete, onEdit }) {
    return (
        <li>
            {todo}
            <button onClick={onEdit}>Düzenle</button>
            <button onClick={onDelete}>Sil</button>
        </li>
    );
}

export default TodoItem;