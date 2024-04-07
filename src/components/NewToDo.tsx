import React, { useRef } from 'react';
import { NewTodoProps } from '../todo.model';

import './NewTodo.css';

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Simple TODO Web Application</label>
                <input type="text" id="todo-text" placeholder="Enter your task..." ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewTodo;
