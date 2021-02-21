import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault();

        //pushing props up to app.js 
        this.props.addTodo(this.state);

        this.setState({
            content: ''
        })

    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>

        )
    }
}

export default AddTodo