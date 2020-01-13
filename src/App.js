import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        task: 'Waking up',
        time: '9:00am',
        completed: false
      },
      {
        id: 2,
        task: 'Bathing and Cleaning up',
        time: '9:30am',
        completed: true
      },
      {
        id: 3,
        task: 'Taking breakfast',
        time: '10:00am',
        completed: false
      },
      {
        id: 4,
        task: 'Going to work',
        time: '10:20am',
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
  
  render(){

    // console.log(this.state.todos)
    
    return (
      <div className="container">  
        <Header /> 
        <AddTodo />     
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
