import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import TodoList from './components/ToDoList';
import NewTodo from './components/NewToDo';

import { Todo } from './todo.model';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addHandler = (text: string) => {
        setTodos((prevTodos) => [...prevTodos, { id: uuid(), text: text }]);
    };

    const removeHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={addHandler} />
            <TodoList items={todos} onDeleteTodo={removeHandler} />
        </div>
    );
};

export default App;
