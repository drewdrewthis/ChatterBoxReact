import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from './selectors';
import UserList from 'components/UserList';
import { USER_QUERY } from 'graphql/queries/messages';

class Users extends Component {
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

export default (props) = (
  <Query
    query={USER_QUERY}
    variables={{ repoName: '' }}
  >
    {({ subscribeToMore, ...result }) => (
      <User
        {...props}
        {...result}
        subscribeToNewUsers={() =>
            subscribeToMore({
              document: USER_SUBSCRIPTION,
              variables: { repoName: '' },
              updateQuery: (prev, { subscriptionData }) => {
                const { data } = subscriptionData;
                const { allMessages, allUsers } = prev;
                const sample = allUsers[0];

                return prev;

                if (!data || !data.user) return prev;

                debugger;

                const newUser = assign({},
                  sample,
                  data.user
                );

                return assign({}, prev,
                  {
                    allUsers: [...prev.allUsers, newUser]
                  }
                );
              }
            })
        }
      />
    )}
  </Query>

)
;
