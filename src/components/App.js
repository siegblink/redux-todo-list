import React, { Component } from 'react';
import Todos from './Todos';
import Header from './Header';
import TodoList from './TodoList';

class App extends Component {
  state = {
    todos: [
      // { id: '', content: '' }
    ]
  };

  clearTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos: todos });
  };

  addTodo = todos => {
    todos.id = Math.random();
    todos = [...this.state.todos, todos];
    this.setState({ todos: todos });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <Header />
          <Todos todos={this.state.todos} clearTodo={this.clearTodo} />
        </div>
        <TodoList addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
