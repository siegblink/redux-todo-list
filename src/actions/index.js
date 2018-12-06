// Action creators

// adds a new todo list
export const addTodo = todo => {
  return { type: 'ADD_TODO', payload: todo };
};

// deletes a todo list
export const clearTodo = id => {
  return { type: 'CLEAR_TODO', payload: id };
};

// fills the input box with the entered data
export const fillInputBox = event => {
  return { type: 'FILL_IN_INPUTBOX', payload: event.target.value };
};

// clears the value of the input box after the data is submitted
export const resetInputBox = () => {
  return { type: 'RESET_INPUTBOX' };
};
