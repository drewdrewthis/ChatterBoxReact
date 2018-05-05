import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});

const GET_TODOS = gql`
  query {
    allTodos {
      id
      title
      description
    }
  }
`;

class App extends Component {
  componentDidMount() {
    client
      .query({
        query: GET_TODOS
      })
      .then(result => console.log(result));
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={GET_TODOS}>
          {(data) => {
            console.log(data);

            return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
              </div>
            )
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
