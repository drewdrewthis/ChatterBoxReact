import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from 'components/UserList';
import cx from 'classnames';
import styles from './users.module.scss';

const Users = (props) => {
  const {
    loading,
    users,
    className,
  } = props;

  if (loading) { return null; }

  return (
    <div className={cx(className, styles.users)}>
      <h2>USER LIST</h2>
      <UserList users={users} />
    </div>
  );
};

Users.propTypes = {
  updateUserFilter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  className: PropTypes.string,
};

export default Users;
