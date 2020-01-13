import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        task: ''
    }

    handleInput = (e) => this.setState({
        [e.target.name] : e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({task: ' '})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="task"
                    placeholder="Add Task ..."
                    style={{flex:10, padding: '10px'}}
                    value={this.state.task}
                    onChange={this.handleInput}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex:1, padding: '10px'}}
                />

            </form>
        )
    }
}

export default AddTodo
