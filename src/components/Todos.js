import React from 'react';
import { connect } from 'react-redux';
import { clearTodo } from '../actions';

const Todos = ({ newTodos, clearTodo }) => {
  const newtodosLength = newTodos.todos.length;
  const newTodoList = newtodosLength ? (
    newTodos.todos.map(newTodo => {
      return (
        <div className="card-action center" key={newTodo.id}>
          <span onClick={() => clearTodo(newTodo.id)}>{newTodo.title}</span>
        </div>
      );
    })
  ) : (
    <div className="card-action center">You no longer have todos, yahoo!</div>
  );

  return <div>{newTodoList}</div>;
};

const mapStateToProps = state => {
  return {
    // todos: state.defaultTodos,
    newTodos: state.todoList
  };
};

export default connect(
  mapStateToProps,
  { clearTodo }
)(Todos);
