import React, { Component } from 'react';
import find from 'lodash/find';
import assign from 'lodash/assign';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { ApolloProvider, Query } from "react-apollo";
import client from './apolloClient';
// import { USER_QUERY } from 'graphql/queries/users';
import { MESSAGE_QUERY } from 'graphql/queries/messages';
import { MESSAGE_SUBSCRIPTION } from 'graphql/subscriptions/messages';
import { USER_SUBSCRIPTION } from 'graphql/subscriptions/users';

const AppWithData = ({ params }) => (
  <Query
    query={MESSAGE_QUERY}
    variables={{ repoName: '' }}
  >
    {({ subscribeToMore, ...result }) => (
      <App
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
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppWithData />
  </ApolloProvider>,
  document.getElementById('root'),
);

// registerServiceWorker();
