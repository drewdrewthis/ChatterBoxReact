import { compose } from 'redux';
import { connect as reduxConnect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const {
    filter
  } = state.todos;

  return {
    filter
  };
};

export const connect = (ComponentClass) => compose(
  reduxConnect(mapStateToProps),
)(ComponentClass);
