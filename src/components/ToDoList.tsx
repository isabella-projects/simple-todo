import React from 'react';
import { TodoListProps } from '../todo.model';

import './TodoList.css';

const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
            {props.items.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
