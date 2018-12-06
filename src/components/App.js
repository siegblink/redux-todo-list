import React from 'react';
import Todos from './Todos';
import Header from './Header';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <Todos />
      </div>
      <TodoList />
    </div>
  );
};

export default App;
