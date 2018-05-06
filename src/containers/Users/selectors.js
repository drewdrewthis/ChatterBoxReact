import { compose, bindActionCreators } from 'redux';
import { connect as reduxConnect } from 'react-redux';
import userQuery from 'graphql/queries/users';
import * as Actions from './actions';

const mapStateToProps = (state, props) => {
  const {
    allUsers = [],
  } = props;

  const {
    filter,
  } = state.todos;

  return {
    todos: filter
      ? allUsers.filter(todo => todo.title.toLowerCase().includes(filter.toLowerCase()))
      : allUsers,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export const connect = ComponentClass => compose(
  userQuery,
  reduxConnect(mapStateToProps, mapDispatchToProps),
)(ComponentClass);
