/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, Query } from 'react-apollo';
import find from 'lodash/find';
import assign from 'lodash/assign';
import { MESSAGE_QUERY } from 'graphql/queries/messages';
import { MESSAGE_SUBSCRIPTION } from 'graphql/subscriptions/messages';
import App from 'containers/App';
import './index.css';
import client from './apolloClient';

const updateQuery = (prev, { subscriptionData }) => {
  const { data } = subscriptionData;
  const { allMessages, allUsers } = prev;
  const sample = allMessages[0];

  if (!data) return prev;

  const newMessage = assign(
    {},
    sample,
    data.message,
    {
      user: find(allUsers, u => u.id === data.user.id.toString()),
    },
  );

  return assign(
    {}, prev,
    {
      allMessages: [...prev.allMessages, newMessage],
    },
  );
};

const AppWithData = ({ params }) => (
  <Query
    query={MESSAGE_QUERY}
  >
    {({ subscribeToMore, ...result }) => (
      <App
        {...result}
        subscribeToNewMessages={() => (
          subscribeToMore({
            document: MESSAGE_SUBSCRIPTION,
            updateQuery,
          })
        )}
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
