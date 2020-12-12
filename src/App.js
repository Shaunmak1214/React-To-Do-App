import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddForm';

class App extends Component{
  
  state = {

    todos: [
      {id: 1, content: 'Study React'},
      {id: 2, content: 'Get good in react'},
      {id: 3, content: 'React is hard as hell bruv'}
    ]

  }

  deleteTodo = (id) => {

    const todos = this.state.todos.filter(todo => {
      return todo.id !== id 
    });

    this.setState({
      todos: todos
    })

  }

  addTodo = (todo) => {

    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })

  }

  render() {
    return(
      <div className="todo-app container">

        <h1 className="center blue-text">Todo's</h1>

        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>

        <AddTodo addTodo={this.addTodo}/>

      </div>
    );
  }
}

export default App;
