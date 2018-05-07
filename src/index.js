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

const AppWithData = ({ params }) => (
  <Query
    query={MESSAGE_QUERY}
    variables={{ repoName: '' }}
  >
    {({ subscribeToMore, ...result }) => (
      <App
        {...result}
        subscribeToNewMessages={() =>
            subscribeToMore({
              document: MESSAGE_SUBSCRIPTION,
              variables: { repoName: '' },
              updateQuery: (prev, { subscriptionData }) => {
                const { data } = subscriptionData;
                const { allMessages, allUsers } = prev;
                const sample = allMessages[0];

                if (!data) return prev;
                // debugger;

                const newMessage = assign({},
                  sample,
                  data.message,
                  {
                    user: find(allUsers, u => u.id === data.user.id.toString())
                  }
                );

                console.log('uhg', sample, newMessage)

                return assign({}, prev,
                  {
                    allMessages: [...prev.allMessages, newMessage]
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
