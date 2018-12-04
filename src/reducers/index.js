// add combineReducers from redux library
import { combineReducers } from 'redux';

const todosReducer = () => {
  return [
    { todo: 'Do 3 sets of push-ups for 20 reps' },
    { todo: 'Drink serious-mass protein shake' },
    { todo: 'Update projects in Github' }
  ];
};

const manageTodoReducer = (todoList = [], action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todoList, action.payload];
    case 'CLEAR_TODO':
      return [...todoList, action.payload];
    default:
      return todoList;
  }
};

export default combineReducers({
  defaultTodos: todosReducer,
  todoList: manageTodoReducer
});
