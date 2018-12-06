// add combineReducers from redux library
import { combineReducers } from 'redux';

const state = { todos: [], content: '' };

const manageTodoReducer = (todoList = state, action = {}) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...todoList,
        todos: [...todoList.todos, { id: Math.random(), title: action.payload }]
      };
    }
    case 'CLEAR_TODO': {
      const filterTodoList = todoList.todos.filter(todo => {
        return action.payload !== todo.id;
      });
      return { ...todoList, todos: filterTodoList };
    }
    case 'FILL_IN_INPUTBOX':
      return { ...todoList, content: action.payload };
    case 'RESET_INPUTBOX':
      return { ...todoList, content: '' };
    default:
      return todoList;
  }
};

// the object keys in the combineReducers represent the slice of state
export default combineReducers({
  // defaultTodos: todosReducer,
  todoList: manageTodoReducer
});
