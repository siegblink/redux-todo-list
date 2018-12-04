// Action creators
export const addTodo = id => {
  return {
    type: 'ADD_TODO',
    payload: todos
  }
}

export const clearTodo = todos => {
  return {
    type: 'CLEAR_TODO',
    payload: todos
  }
}