import createKey from '../helpers/createKey';

export const TODOS_ACTIONS = {
  ADD_TODOS: 'add_todos',
  DELETE_TODOS: 'delete_todos',
};

export const todosReducer = (state = {todos: []}, action) => {
  switch (action.type) {
    case TODOS_ACTIONS.ADD_TODOS:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: createKey(),
            name: action.payload.name,
            completed: false,
          },
        ],
      };
    case TODOS_ACTIONS.DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id != action.payload.id),
      };
    default:
      return state;
  }
};
