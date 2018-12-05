import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, fillInputBox, resetInputBox } from '../actions';

class TodoList extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.props.todos.content);
    this.props.resetInputBox();
  };

  handleInput = event => {
    this.props.fillInputBox(event);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add todo:</label>
        <input
          type="text"
          onChange={this.handleInput}
          value={this.props.todos.content}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todoList };
};

export default connect(
  mapStateToProps,
  { addTodo, fillInputBox, resetInputBox }
)(TodoList);
