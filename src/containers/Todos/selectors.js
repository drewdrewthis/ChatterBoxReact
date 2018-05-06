import { compose, bindActionCreators } from 'redux';
import { connect as reduxConnect } from 'react-redux';
import * as Actions from './actions';
import todosQuery from '../../graphql/queries/todos';

const mapStateToProps = (state, props) => {
  const {
    allTodos = [],
  } = props;

  const {
    filter,
  } = state.todos;

  return {
    todos: filter
      ? allTodos.filter(todo => todo.title.includes(filter))
      : allTodos,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export const connect = ComponentClass => compose(
  todosQuery,
  reduxConnect(mapStateToProps, mapDispatchToProps),
)(ComponentClass);
