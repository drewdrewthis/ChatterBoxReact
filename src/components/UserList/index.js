import React from 'react';
import PropTypes from 'prop-types';
import styles from './user-list.module.scss';

const renderUser = user => (
  <li key={user.id}>
    { user.nickname }
  </li>
);

const UserList = (props) => {
  const { users } = props;

  return (
    <ul className={styles['user-list']}>
      { users.map(renderUser) }
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
  })).isRequired,
};

export default UserList;
