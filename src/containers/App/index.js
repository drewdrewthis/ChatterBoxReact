import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/logo.svg';
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
      data,
    } = this.props;

    if (loading) { return null; }

    const id = data.allMessages[0].conversation_id;

    return (
      <div className={styles['app-container']}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ChatterBox</h1>
        </header>
        <div className={styles.app}>
          <Users users={data.allUsers} className={styles['user-list']} />
          <Coversation
            id={id}
            userId={5}
            className={styles.convo}
            messages={data.allMessages}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  subscribeToNewMessages: PropTypes.func.isRequired,
  data: PropTypes.shape({
    allUsers: PropTypes.arrayOf(PropTypes.shape({})),
    allMessages: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

export default App;
