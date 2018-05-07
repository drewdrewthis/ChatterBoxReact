import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/logo.svg';
import { connect } from './selectors';
import Users from '../Users';
import Coversation from '../Conversation';
import styles from './app.module.scss';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.subscribeToNewMessages();
  }

  render() {
    const {
      loading,
      data
    } = this.props;

    console.log('app', this.props)

    if (loading || !data.allMessages) { return null; }

    return (
      <div className={styles['app-container']}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className={styles.app}>
          <Users users={data.allUsers} className={styles['user-list']} />
          <Coversation messages={data.allMessages} className={styles.convo}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default App;
