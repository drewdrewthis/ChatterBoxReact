import { combineReducers } from 'redux';
import client from './apolloClient';
import todoReducer from './containers/Todos/reducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  apollo: client.reducer(),
});

export default rootReducer;
