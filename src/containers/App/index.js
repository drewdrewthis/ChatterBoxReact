import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/logo.svg';
import { connect } from './selectors';
import Users from '../Users';
import Coversation from '../Conversation';
import styles from './app.module.scss';
import './App.css';

const App = props => {
  console.log(props);
  const {
    loading,
    data
  } = props;

  if (loading) { return null; }

  return (
    <div className={styles['app-container']}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <p>{props.filter}</p>
      </header>
      <div className={styles.app}>
        <Users users={data.allUsers} className={styles['user-list']} />
        <Coversation messages={data.allMessages} className={styles.convo}/>
      </div>
    </div>
  );
}

App.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default App;
