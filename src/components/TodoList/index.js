import React from 'react';
import PropTypes from 'prop-types';

const renderTodo = todo => (
  <li key={todo.id}>{todo.title}</li>
);

const TodoList = (props) => {
  const { todos } = props;

  return (
    <ul>
      { todos.map(renderTodo) }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default TodoList;
