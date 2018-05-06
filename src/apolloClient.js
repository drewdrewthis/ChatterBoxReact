// import { createNetworkInterface } from 'react-apollo';
// import ApolloClient from 'apollo-client';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// const networkInterface = createNetworkInterface({
  // uri: 'http://localhost:3001/graphql',
// });


// const cache = new InMemoryCache();

// import registerServiceWorker from './registerServiceWorker';
// Create an http link:
// const httpLink = new HttpLink({
  // uri: 'http://localhost:3001/graphql'
// });

// Create a WebSocket link:
// const wsLink = new WebSocketLink({
  // uri: `ws://localhost:5000/`,
  // options: {
    // reconnect: true
  // }
// });

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
// const link = split(
  // // split based on operation type
  // ({ query }) => {
    // const { kind, operation } = getMainDefinition(query);
    // return kind === 'OperationDefinition' && operation === 'subscription';
  // },
  // // wsLink,
  // httpLink,
// );

export default new ApolloClient({
  uri: 'http://localhost:3001/graphql'
  // link: httpLink,
  // cache,
  // networkInterface,
});
