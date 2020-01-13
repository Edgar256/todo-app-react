import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        task: ''
    }

    handleInput = (e) => this.setState({
        task: e.target.value
    })

    render() {
        return (
            <form>
                <input 
                    type="text"
                    nam="task"
                    placeholder="Add Task ..."
                    style={{flex:10, padding: '10px'}}
                    value={this.state.task}
                    onChange={this.handleInput}
                />
                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{flex:1, padding: '10px'}}
                />

            </form>
        )
    }
}

export default AddTodo
