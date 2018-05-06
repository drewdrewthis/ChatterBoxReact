import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { ApolloProvider, Query } from "react-apollo";
import client from './apolloClient';
// import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { USER_QUERY } from 'graphql/queries/users';
import { MESSAGE_QUERY } from 'graphql/queries/messages';


// class CommentsPage extends Component {
// componentDidMount() {
// this.props.subscribeToNewComments();
// }
// render() {
// console.log(this.props);
// return <h1>hello</h1>
// }
// }

const AppWithData = ({ params }) => (
  <Query
    query={MESSAGE_QUERY}
    variables={{ repoName: '' }}
  >
    {({ subscribeToMore, ...result }) => (
      <App
        {...result}
        subscribeToNewComments={() =>
            subscribeToMore({
              // document: COMMENTS_SUBSCRIPTION,
              // variables: { repoName: '' },
              // updateQuery: (prev, { subscriptionData }) => {
              // if (!subscriptionData.data) return prev;
              // const newFeedItem = subscriptionData.data.commentAdded;

              // return Object.assign({}, prev, {
              // entry: {
              // comments: [newFeedItem, ...prev.entry.comments]
              // }
              // });
              // }
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
