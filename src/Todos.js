import React from 'react'
import './Todos.css';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>

                    <span>{todo.content}</span>
                    <button onClick={() => {deleteTodo(todo.id)}}>delete</button>
                    
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