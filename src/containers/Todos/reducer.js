import { UPDATE_TODO_FILTER } from './actions';

const defaultState = {
  filter: '',
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case UPDATE_TODO_FILTER:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
