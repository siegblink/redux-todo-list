import React, { Component } from 'react';

class TodoList extends Component {
  state = { content: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: '' });
  };

  handleInput = e => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add todo:</label>
        <input
          type="text"
          onChange={this.handleInput}
          value={this.state.content}
        />
      </form>
    );
  }
}

export default TodoList;
