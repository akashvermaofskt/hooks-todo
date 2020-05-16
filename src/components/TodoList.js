import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodoAction, deleteTodoAction } from '../redux';

export default () => {
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();
    return (
        <ul className="todo-list">
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <input type="checkbox"
                    checked={todo.complete}
                    onChange={dispatch.bind(null,completeTodoAction(todo.id))}/>
                    <span className ={ todo.complete ? 'complete' : null }>{todo.name}</span>
                    <button className ="delete-button" onClick={dispatch.bind(null,deleteTodoAction(todo.id))}>X</button>
                </li>
            ))}
        </ul>     
    );
}