import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Cookie from 'js-cookie';
import logo from 'assets/logo.svg';
import { ADD_USER } from 'graphql/mutations/users';
import { connect } from './selectors';
import Users from '../Users';
import Conversation from '../Conversation';
import Login from '../Login';
import styles from './app.module.scss';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: {},
      loggedIn: false,
      conversationId: 1
    }
  }

  login = (data) => {
    console.log(data);
    Cookie.set('nickname', data.nickname);
    Cookie.set('id', data.id);
    this.props.subscribeToNewMessages();
    this.props.subscribeToNewUsers();
    this.setState({
      currentUser: data,
      loggedIn: true
    })
  }

  renderMain() {
    const {
      loading,
      data,
      subscribeToNewMessages
    } = this.props;

    const {
      currentUser,
      conversationId,
      loggedIn
    } = this.state;

    console.log('app', this.props)

    if (loading) { return null; }

    if(Cookie.get('nickame') || loggedIn) {

      return (
        <div className={styles.app}>
          <Users users={data.allUsers} className={styles['user-list']} />
          <Conversation
            id={conversationId}
            userId={currentUser.id}
            messages={data.allMessages}
            className={styles.convo}
          />
        </div>
      )
    } else {
      return (
        <Login
          login={this.login}
        />
      )
    }
  }

  render() {
    return (
      <div className={styles['app-container']}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ChatterBox</h1>
        </header>
        { this.renderMain() }
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default App;
