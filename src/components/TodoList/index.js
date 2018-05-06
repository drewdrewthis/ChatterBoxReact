import React from 'react';
import PropTypes from 'prop-types';
import styles from './todo-list.module.scss';

const renderTodo = todo => (
  <li key={todo.id}>
    <div className={styles.top}>
      {todo.title}
    </div>
    <div className={styles.bottom}>
      {todo.description}
    </div>
  </li>
);

const TodoList = (props) => {
  const { todos } = props;

  return (
    <ol className={styles['todo-list']}>
      { todos.map(renderTodo) }
    </ol>
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
