import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from './selectors';
import TodoList from '../../components/TodoList';

class Todos extends Component {
  handleOnChange = (e) => {
    const {
      updateTodoFilter,
    } = this.props;

    updateTodoFilter(e.target.value);
  }

  render() {
    const {
      loading,
      todos,
    } = this.props;

    if (loading) { return null; }

    return (
      <div className="Todos">
        <h2>TODO LIST</h2>
        <input onChange={this.handleOnChange} />
        <TodoList todos={todos} />
      </div>
    );
  }
}

Todos.propTypes = {
  updateTodoFilter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(Todos);
