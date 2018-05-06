/* eslint-disable no-console */
export const UPDATE_TODO_FILTER = 'UPDATE_TODO_FILTER';

export const updateTodoFilter = filter => (dispatch, _getState) => {
  dispatch({ type: UPDATE_TODO_FILTER, payload: { filter } });
};
