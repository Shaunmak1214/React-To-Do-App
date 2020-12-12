import React from 'react'
import './Todos.css';
import { Button } from 'react-bootstrap'
import { ReactComponent as Logo } from './icons/close.svg';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>

                    <span>{todo.content}</span>
                    <Button onClick={() => {deleteTodo(todo.id)}}><Logo/>...</Button>
                    
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left!</p>
    );

    return(

        <div className="todos collection">
            {todoList}
        </div>

    )
}

export default Todos