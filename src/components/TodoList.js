import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodoAction, deleteTodoAction } from '../redux';

export default () => {
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();

    const completeTodo = ((todoid) => dispatch(completeTodoAction(todoid)));
    const deleteTodo = ((todoid) => dispatch(deleteTodoAction(todoid)));
    
    return (
        <ul className="todo-list">
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <input type="checkbox"
                    checked={todo.complete}
                    onChange={() => completeTodo(todo.id)}/>
                    <span className ={ todo.complete ? 'complete' : null }>{todo.name}</span>
                    <button className ="delete-button" onClick={() => deleteTodo(todo.id)}>X</button>
                </li>
            ))}
        </ul>     
    );
}