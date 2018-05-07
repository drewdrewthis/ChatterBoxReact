/* eslint-disable no-console */
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split, ApolloLink, Observable } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import ActionCable from 'actioncable';

const printer = require('graphql/language/printer');

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql',
});

document.cookie = 'nickname=Drew';

const cable = ActionCable.createConsumer('http://localhost:3001/websocket');
const channelName = 'GraphqlChannel';
const actionName = 'execute';

const wsLink = new ApolloLink((operation => new Observable(((observer) => {
  const subscription = cable.subscriptions.create({
    channel: channelName,
  }, {
    connected() {
      console.log('Subscribed Successfully');

      this.perform(
        actionName,
        {
          query: operation.query ? printer.print(operation.query) : null,
          variables: operation.variables,
          operationId: operation.operationId,
          operationName: operation.operationName,
        },
      );
    },
    received(payload) {
      console.log('Payload Received', payload);

      if (payload.result.data) {
        observer.next(payload.result);
      }

      // if (!payload.more) {
      // this.unsubscribe()
      // observer.complete()
      // }
    },
  });

  return subscription;
}))));

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
