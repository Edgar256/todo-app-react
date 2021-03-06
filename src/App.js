import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        task: 'Waking up',
        completed: false
      },
      {
        id: uuid.v4(),
        task: 'Bathing and Cleaning up',
        completed: true
      },
      {
        id: uuid.v4(),
        task: 'Taking breakfast',
        completed: false
      },
      {
        id: uuid.v4(),
        task: 'Going to work',
        completed: true
      },
    ]
  } 
  
  markComplete = (id) => (
    this.setState({todos : this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
    }) })
  )

  delTodo = (id) => {
    this.setState({ todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (task) => {

    const newTodo = {
      id: uuid.v4(),
      task: task,
      completed : false
    }

    this.setState({todos:[...this.state.todos,newTodo]})
  }
  
  render(){

    return (
      <div className="container">  
        <Header /> 
        <AddTodo 
          addTodo = {this.addTodo}
        />     
        <Todos 
          todos = {this.state.todos} 
          markComplete={this.markComplete} 
          delTodo = {this.delTodo}
        />
      </div>
    )
  }
}

export default App;
