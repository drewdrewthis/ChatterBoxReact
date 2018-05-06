import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3001/graphql',
});

export default new ApolloClient({
  networkInterface,
});

