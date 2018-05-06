import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from './selectors';
import UserList from 'components/UserList';

class Users extends Component {
  handleOnChange = (e) => {
    const {
      updateUserFilter,
    } = this.props;

    updateUserFilter(e.target.value);
  }

  render() {
    const {
      loading,
      users,
      className,
    } = this.props;

    if (loading) { return null; }

    return (
      <div className={className}>
        <h2>USER LIST</h2>
        <input onChange={this.handleOnChange} />
        <UserList users={users} />
      </div>
    );
  }
}

Users.propTypes = {
  updateUserFilter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  className: PropTypes.string,
};

export default Users;
