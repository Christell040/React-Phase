import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction, EditTodoAction } from './actions/TodoActions';
import "./App.css";

const App = () => {
    const [todo, setTodo] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [currentTodoId, setCurrentTodoId] = useState(null);

    const dispatch = useDispatch();
    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            dispatch(EditTodoAction(currentTodoId, todo));
            setEditMode(false);
            setCurrentTodoId(null);
        } else {
            dispatch(AddTodoAction(todo));
        }
        setTodo('');
    };

    const editTodoHandler = (todo) => {
        setTodo(todo.todo);
        setCurrentTodoId(todo.id);
        setEditMode(true);
    };

    const removeTodoHandler = (todo) => {
        dispatch(RemoveTodoAction(todo));
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <h2>TodoList App</h2>
            </header>
            <form className='Task-entry' onSubmit={handleSubmit}>
                <input
                    placeholder='Enter Task'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button >{editMode ? 'Update' : 'Go'}</button>
            </form>
            <ul className='list-area'>
                {todos &&
                    todos.map((t) => (
                        <li className='list-items' key={t.id}>
                            <span>{t.todo}</span>
                            <div>
                                <button onClick={() => editTodoHandler(t)} className='edit'>Edit</button>
                                <button onClick={() => removeTodoHandler(t)} className='del'>Done</button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default App;
