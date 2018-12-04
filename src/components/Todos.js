import React from 'react';

const Todos = ({ todos, clearTodo }) => {
  const todoLength = todos.length;

  const todolist = todoLength ? (
    todos.map(todo => {
      return (
        <div className="card-action center" key={todo.id}>
          <span onClick={() => clearTodo(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <div className="card-action center">You no longer have todos, yahoo!</div>
  );

  return <div className="">{todolist}</div>;
};

export default Todos;
