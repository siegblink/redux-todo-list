// add combineReducers from redux library
import { combineReducers } from 'redux';

// this is a static reducer that returns default todos
// const todosReducer = () => {
//   return [
//     { title: 'Do 3 sets of push-ups for 20 reps', id: 0 },
//     { title: 'Drink serious-mass protein shake', id: 1 },
//     { title: 'Update projects in Github', id: 2 }
//   ];
// };

// this is a dynamic reducer that handles specific actions
const manageTodoReducer = (
  todoList = { todos: [], content: '' },
  action = {}
) => {
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
