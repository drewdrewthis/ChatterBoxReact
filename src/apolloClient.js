// import { createNetworkInterface } from 'react-apollo';
import ApolloClient from 'apollo-client';
// import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split, ApolloLink, Observable } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import ActionCable from 'actioncable';
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink';
var printer = require("graphql/language/printer");


const cable = ActionCable.createConsumer('http://localhost:3001/websocket')

// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
});

document.cookie = "nickname=Drew";
var channelName = "GraphqlChannel"
var actionName = "execute"

const wsLink = new ApolloLink(function(operation) {
  return new Observable(function(observer) {
    // var channelId = Math.round(Date.now() + Math.random() * 100000).toString(16)

    var subscription = cable.subscriptions.create({
      channel: channelName,
      // channelId: channelId
    }, {
      connected: function() {
        console.log('connected!');
        this.perform(
          actionName,
          {
            query: operation.query ? printer.print(operation.query) : null,
            variables: operation.variables,
            operationId: operation.operationId,
            operationName: operation.operationName
          }
        )
      },
      received: function(payload) {
        console.log('got something!', payload);
        if (payload.result.data) {
          observer.next(payload.result)
        }
        else {
          observer.complete()
        }

        // if (!payload.more) {
          // this.unsubscribe()
          // observer.complete()
        // }
      }
    })

    return subscription
  })
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  // new ActionCableLink({cable}),
  httpLink
);

export default new ApolloClient({
  // uri: 'http://localhost:3001/graphql'
  link,
  cache: new InMemoryCache()
  // networkInterface,
});
