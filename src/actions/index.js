// Action creators
export const addTodo = todo => {
  return { type: 'ADD_TODO', payload: todo };
};

export const clearTodo = todo => {
  return { type: 'CLEAR_TODO', payload: todo };
};
