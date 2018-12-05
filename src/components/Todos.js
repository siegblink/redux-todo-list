import React from 'react';
import { connect } from 'react-redux';
import { clearTodo } from '../actions';

const Todos = props => {
  // const todoLength = props.todos.length;
  // const todolist = todoLength ? (
  //   props.todos.map(todo => {
  //     return (
  //       <div className="card-action center" key={todo.id}>
  //         <span onClick={() => props.clearTodo(todo.id)}>{todo.title}</span>
  //       </div>
  //     );
  //   })
  // ) : (
  //   <div className="card-action center">You no longer have todos, yahoo!</div>
  // );

  const newtodosLength = props.newTodos.todos.length;
  const newTodoList = newtodosLength ? (
    props.newTodos.todos.map(newTodo => {
      return (
        <div className="card-action center" key={newTodo.id}>
          <span onClick={() => props.clearTodo(newTodo.id)}>
            {newTodo.title}
          </span>
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
