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
            <div style={this.getStyle()} className="list">
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> { ' '}
                {task}
                <button onClick={this.props.delTodo.bind(this, id)} className="btnStyle">X</button>
            </div>
        )
    }
}

