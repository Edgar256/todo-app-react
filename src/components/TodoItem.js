import React, { Component } from 'react'

export default class TodoItem extends Component {
    getStyle = () => {        
        return{
            textDecoration : this.props.todo.completed? 'line-through' : 'none'
        }
        
    }
    
    
    render() {  
        
        const { id,task } = this.props.todo;
        
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> { ' '}
                {task}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
            </div>
        )
    }
}
const btnStyle = {
    background: 'ff0000',
    color: 'fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    // float: 'right'
}
