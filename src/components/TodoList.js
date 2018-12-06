import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, fillInputBox, resetInputBox } from '../actions';

class TodoList extends Component {
  handleSubmit = event => {
    const { todos, addTodo, resetInputBox } = this.props;

    event.preventDefault();
    addTodo(todos.content);
    resetInputBox();
  };

  handleInput = event => {
    const { fillInputBox } = this.props;
    fillInputBox(event);
  };

  render() {
    const { todos } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add todo:</label>
        <input type="text" onChange={this.handleInput} value={todos.content} />
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
